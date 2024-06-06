import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserForm from "./UserForm";
import UserDetails from "./UserDetails";
import UserEdit from "./UserEdit";
import UserDelete from "./UserDelete";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = async (newUser) => {
    try {
      const response = await fetch(
        "https://663bcd41fee6744a6ea2fdd8.mockapi.io/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUsers([...users, data]);
      } else {
        console.error("Error al agregar usuario");
      }
    } catch (error) {
      console.error("Error en la solicitud: ", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/create" element={<UserForm addUser={addUser} />} />
        <Route path="/edit/:id" element={<UserEdit />} />
        <Route path="/delete/:id" element={<UserDelete />} />
      </Routes>
    </Router>
  );
};
export default App;
