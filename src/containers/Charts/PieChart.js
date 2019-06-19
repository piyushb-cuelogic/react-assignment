import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Cell, Tooltip,
} from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class CuePieChart extends PureComponent {

    constructor(props) {
        super(props)
        let postCountByAuthors = {};
        this.props.posts.forEach(post => {
            postCountByAuthors[post.Author.toLowerCase()] = postCountByAuthors[post.Author.toLowerCase()] || 0;
            postCountByAuthors[post.Author.toLowerCase()]++;
        });
        this.state = {
            postCountByAuthors: postCountByAuthors
        };
    }

    prepareChartData = () => {
        let result = [];
        for (let author in this.state.postCountByAuthors) {
            if (this.state.postCountByAuthors[author]) {
                let obj = {
                    name: author,
                    value: this.state.postCountByAuthors[author]
                }
                result.push(obj)
            }
        }
        if (!result.length) {
            return [{ name: "No posts", value: 0 }];
        }
        return result;
    }

    render() {
        let chartData = this.prepareChartData();
        return (
            <PieChart width={1200} height={500} margin={{ top: 50, right: 5, bottom: 5, left: 300 }}>
                <Pie
                    data={chartData}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="value">
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        );
    }
}