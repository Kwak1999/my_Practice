import React from 'react';
import {useRecoilState} from "recoil";
import {textState} from "../App";

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} value={text} />
            <br/>
            Echo: {text}
        </div>
    );
};

export default TextInput;