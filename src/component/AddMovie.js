import React from 'react'
import ReactModal from 'react-modal';

const AddMovie = () => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      ReactModal.setAppElement('#root');
      
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <div>
                      <button onClick={closeModal}>Add movie</button>

            
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles} 
        >

        <div>I am a modal</div>
        <form>
          <label for= ''>nom movie</label>
          <input type= 'text' name= '' value= ''   />
          <button>tab navigation</button>
          <button>add</button>
          <button onClick={closeModal}>cancel</button>
        </form>
      </Modal>
            
        </div>
    )
}

export default AddMovie
