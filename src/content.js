import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./content.css";

function Main () {
    const [modalIsOpen, openModal, closeModal] = useSwitch()
    useEffect(() => {
        Modal.setAppElement('body')
    })
    useDocumentKeydown(({code, ctrlKey, altKey, metaKey}) => {
        if (ctrlKey && altKey && metaKey && code == "KeyM")
            openModal()
    })
    return (
        <div className={'my-extension'}>
            <h1>Hello world - My first Extension</h1>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <p>Hello, SHION!</p>
            </Modal>
        </div>
    )
}

function useDocumentKeydown(handleKeydown) {
    useEffect(() => {
        document.addEventListener("keydown", handleKeydown)
        return () => document.removeEventListener("keydown", handleKeydown)
    })
}

function useSwitch() {
    const [v, setState] = useState(false)
    return [v, () => setState(true), () => setState(false)]
}

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);