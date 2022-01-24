import MovieDetails from "./MovieDetails";

const Modal = ({ show, onClose, children }) => {
  return (
    <div style={{ border: "1px grey solid", width: "600px" }}>
      <p
        style={{
          padding: "10px 10px 10px 550px",
          borderBottom: "1px grey solid",
        }}
        onClick={onClose}
      >
        X
      </p>

      {children}
    </div>
  );
};
export default Modal;
