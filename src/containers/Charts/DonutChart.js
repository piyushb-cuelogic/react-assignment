import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        payload, percent, value,
    } = props;
    const fillCircle = "#8884d8";
    const fillText = "#d41212";//"#00C49F";
    const fill = "#0088FE";
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fillText}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fillCircle}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Posts count: ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


export default class Example extends PureComponent {

    constructor(props) {
        super(props)
        let postCountByCategories = {};
        this.props.categories.forEach(cat => {
            postCountByCategories[cat] = postCountByCategories[cat] || 0;
            this.props.posts.forEach(post => {
                if (post.Category === cat) {
                    postCountByCategories[cat]++;
                }
            })
        });
        this.state = {
            activeIndex: 0,
            postCountByCategories: postCountByCategories
        };
    }

    prepareChartData = () => {
        let result = [];
        for (let category in this.state.postCountByCategories) {
            if (this.state.postCountByCategories[category]) {
                let obj = {
                    name: category,
                    value: this.state.postCountByCategories[category]
                }
                result.push(obj)
            }
        }
        if (!result.length) {
            return [{ name: "No posts", value: 0 }];
        }
        return result;
    }

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        let chartData = this.prepareChartData();
        return (
            <PieChart
                width={1200}
                height={500}
                margin={{ top: 50, right: 5, bottom: 5, left: 300 }}>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={chartData}
                    cx={200}
                    cy={200}
                    innerRadius={120}
                    outerRadius={160}
                    fill="#ff8042"
                    dataKey="value"
                    onMouseEnter={this.onPieEnter} />
            </PieChart>
        );
    }
}
