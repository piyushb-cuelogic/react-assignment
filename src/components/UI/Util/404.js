import React from "react"

const Page404 = ({ location }) => (
    <div>
        <h2>404 Page not found</h2>
        <p>No match found for <code>{location.pathname}</code></p>
    </div>
);

export default Page404;