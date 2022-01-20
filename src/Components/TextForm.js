import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("")
    const uppercaseClick = () => {
        // console.log("Uppercase is Click");
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Uppercase Transformation Done Successfully", "success")
    }
    const lowercaseClick = () => {
        // console.log("Uppercase is Click");
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("LowerCase Transformation Done Successfully", "success")
    }
    const onChange = (event) => {
        setText(event.target.value)
    }
    const clearText = () => {
        setText("")
        props.showAlert("Clear Text  Done Successfully", "success")
    }
    const toTitleCase = () => {
        let new_text = text.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
        setText(new_text);
        props.showAlert("To Tile Case Transformation Done Successfully", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy Done Successfully", "success")
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control " id="myBox" value={text} onChange={onChange} style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(35 58 120)',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} rows="8"></textarea>
                </div >
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={uppercaseClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={lowercaseClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={toTitleCase}>Capitalize Case</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCopy}>Copy</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summery</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words,{text.replace(" ", "").length} Character</p>
                <p>{0.08 * text.split(" ").length} Minites To Read</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? 'Enter Some Thing To Preview' : text}</p>
            </div>
        </>
    )
}

