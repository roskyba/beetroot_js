import Modal from 'react-modal';
import './CustomModal.css';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

const CustomModal = ({ isOpen, handleOpenClose, modalTitle, modalContent, isCheckout }) =>
(
    <Modal
        ariaHideApp={false}
        style={modalStyles}
        isOpen={isOpen}
        onRequestClose={handleOpenClose}
    >
        <div className='modal_wrapper'>
            <div className='modal_content'>
                <h2>{modalTitle}</h2>
                {modalContent}
                {isCheckout && (
                    <div className='modal_form'>
                        <label>Name
                            <input type="text" />
                        </label>

                        <label>Phone
                            <input type="text" />
                        </label>

                        <label>Address
                            <input type="text" />
                        </label>
                    </div>
                )}
            </div>
            <div className='modal_controls'>
                <button className='btn' onClick={() => console.log('confirm')}>Confim</button>
                <button className='btn' onClick={handleOpenClose}>Close</button>
            </div>
        </div>
    </Modal>

)


export default CustomModal;