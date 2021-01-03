import React from "react";

import "./Editor.css"

const editor = (props) => {
    return (
        <textarea 
            id="editor"
            value={props.text}
            onChange={props.handleTextInput}></textarea>
    )
}

export default editor;