import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validar que el nombre tenga al menos 2 caracteres y el email sea válido
    const validateForm = () => {
      const isNameValid = name.length >= 2;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setIsValid(isNameValid && isEmailValid);
    };

    validateForm();
  }, [name, email]);

  const handleSubmit = () => {
    // Validar datos antes de agregar
    const newUser = { name, email };

    // Llamar a la función desde las props para agregar usuario
    addUser(newUser);
  };

  return (
    <div>
      <h2>Agregar Usuario</h2>
      <label>Nombre: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Email: </label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <Link to={`/`}>
        <button onClick={handleSubmit} disabled={!isValid}>
          Agregar
        </button>
      </Link>
      <br />
      <Link to={`/`}>Volver</Link>
    </div>
  );
};

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default UserForm;
