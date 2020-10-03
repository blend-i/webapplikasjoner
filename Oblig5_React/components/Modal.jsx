import React, {useState} from 'react';
import Modal from 'react-modal';


Modal.setAppElement('body');



function Modall({ state, close, handleTitleChange, handleDescriptionChange, handleAuthorChange, handleSubmit, setModalOpen }) {

    const [fifty, setFifty] = useState(50);

    const limit = (e) => {
        setFifty(50 - e.target.value.length)
    };

    return (
        state ? (<Modal
            className="modal"
            isOpen={state}
            onRequestClose={setModalOpen}
            style={
                {
                    overlay: {
                        backgroundColor: 'rgba(52, 52, 52, 0.5)'
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignSelf: 'center',
                        width: '350px',
                        height: '400px',
                        margin: '0 auto ',
                        marginTop: '25vh',
                        outline: 'none',
                    },
                }
            }
        >
            <div className="newTodo">
                <label>New Todo </label>
                <button className="close" onClick={close}>X</button>
            </div>
            <form>
                <label>Title</label>
                <input type="text" onChange={handleTitleChange} />

                <label>Description {fifty < 1 ? ('(max characters reached)') : ('(' + fifty + ' characters left)')} </label>
                <input id="descritpion__input" type="text"  maxLength={50} onKeyDown={limit} onChange={handleDescriptionChange}/>

                <label>Author</label>
                <input type="text" onChange={handleAuthorChange} />

                <button type="submit" onClick={handleSubmit}>Create</button>
            </form>
        </Modal>
        ) : null
    )
}

export default Modall;