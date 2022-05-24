import Modal from "react-modal";
import "./CustomModal.css";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CustomModal = ({
  isOpen,
  handleOpenClose,
  modalTitle,
  modalContent,
  isCheckout,
  handleOrderSave,
  formFields,
  orderCreationState,
  inputValues,
  onInputChange,
}) => (
  <Modal
    ariaHideApp={false}
    style={modalStyles}
    isOpen={isOpen}
    onRequestClose={handleOpenClose}
  >
    <div className="modal_wrapper">
      <div className="modal_content">
        <h2>{modalTitle}</h2>
        {modalContent}
        <div></div>
        {isCheckout && orderCreationState && (
          <div className="modal_form">
            {formFields.map((field) => {
              return (
                <label key={field.name + "_" + field.type}>
                  {field.name}
                  <input
                    type={field.type}
                    name={field.field}
                    value={inputValues[field.name]}
                    required={field.isRequired}
                    pattern={field.validation}
                    onChange={(e) => onInputChange(e)}
                  />
                </label>
              );
            })}
          </div>
        )}
      </div>
      {orderCreationState && (
        <div className="modal_controls">
          <button className="btn" onClick={handleOrderSave}>
            Confim
          </button>
          <button className="btn" onClick={handleOpenClose}>
            Close
          </button>
        </div>
      )}
    </div>
  </Modal>
);

export default CustomModal;
