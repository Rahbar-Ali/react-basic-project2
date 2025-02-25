import ReactDom from "react-dom";

const Model = ({ children, handleCloseModel }) => {
  return ReactDom.createPortal(
    <div className="modal-container">
      <button onClick={handleCloseModel} className="modal-underlay"></button>
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Model;
