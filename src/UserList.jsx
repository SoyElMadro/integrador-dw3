import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Llamar a la función para obtener la lista de usuarios
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://663bcd41fee6744a6ea2fdd8.mockapi.io/api/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {/* Mostrar lista de usuarios */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <Link style={{ marginLeft: "10px" }} to={`/edit/${user.id}`}>
              Editar
            </Link>
          </li>
        ))}
      </ul>
      <Link style={{ marginRight: "10px" }} to={`/create`}>
        Agregar Usuario
      </Link>
    </div>
  );
};

export default UserList;
