import React from 'react';
import {useSelector} from "react-redux";

const Message = () => {
    const count = useSelector(state => state.count)
    return (
        <div className={"display-box"}>
            <h1>{count}</h1>
        </div>
    );
};

export default Message;