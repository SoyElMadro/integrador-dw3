import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Llamar a la función para obtener los detalles del usuario
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        `https://663bcd41fee6744a6ea2fdd8.mockapi.io/api/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error en la solicitud: ", error);
    }
  };

  return (
    <div>
      <h1>Detalles de Usuario</h1>
      <p>ID: {user.id}</p>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <Link style={{ marginRight: "10px" }} to={`/delete/${user.id}`}>
        Eliminar Usuario
      </Link>
      <Link style={{ marginRight: "10px" }} to={`/edit/${user.id}`}>
        Editar Usuario
      </Link>
      <Link to={`/`}>Volver</Link>
    </div>
  );
};

export default UserDetails;
