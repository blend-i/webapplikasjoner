import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

function Modall({ state, close, handleTitleChange, handleDescriptionChange, handleAuthorChange, handleSubmit, setModalOpen }) {
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

                <label>Description</label>
                <input type="text" onChange={handleDescriptionChange} />

                <label>Author</label>
                <input type="text" onChange={handleAuthorChange} />

                <button type="submit" onClick={handleSubmit}>Create</button>
            </form>
        </Modal>
        ) : null
    )
}

export default Modall;