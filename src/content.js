import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./content.css";

function Main () {
    useDocumentKeydown(({code, ctrlKey, altKey, metaKey}) => {
        if (ctrlKey && altKey && metaKey && code == "KeyM")
            console.log("Hello, SHION!")
    })
    return (
        <div className={'my-extension'}>
            <h1>Hello world - My first Extension</h1>
        </div>
    )
}

function useDocumentKeydown(handleKeydown) {
    useEffect(() => {
        document.addEventListener("keydown", handleKeydown)
        return () => document.removeEventListener("keydown", handleKeydown)
    })
}

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);