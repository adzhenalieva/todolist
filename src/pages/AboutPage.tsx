import React from 'react';
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory();

    return (
        <>
            <h1>About page</h1>
            <p></p>
            <button className="btn purple darken-3" onClick={() => history.push("/")}>Back to todos list</button>
        </>
    )
};
