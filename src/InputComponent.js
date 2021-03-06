// agorgon@lookingglasscyber.com

import React, {useState} from 'react';

export const InputComponent = () => {
    const [text, setText] = useState("Hello");
    const [prevText, setPrevText] = useState("");
    const [editMode, setEditMode] = useState(false);

    const handleClick = () => {
        setPrevText(text)
        setText('');
        setEditMode(true);
    }

    const handleBlur = () => {
        setText(prevText);
        setEditMode(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPrevText('');
        setEditMode(false)
    }

    return (
        <div>
            {editMode && (
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} onBlur={handleBlur} />
                </form>
            )}
            {!editMode && (
                <div onClick={() => handleClick()}>{text}</div>
            )}
        </div>
    )
}