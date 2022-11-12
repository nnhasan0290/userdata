import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [activeItem, setActiveItem] = useState(0);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const [usersError, setUserError] = useState("");
  const [detailsError, setDetailsError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      setLoading(false);
      setUsers(data);
    } catch (error) {
      setLoading(false);
      setUserError("User list not found");
    }
  };

  const fetchUserDetails = async () => {
    try {
      setDetailsLoading(true);
      const { data } = await axios.get(
        `https://602e7c2c4410730017c50b9d.mockapi.io/users/${activeItem + 1}`
      );
      setDetailsLoading(false);
      setUserDetails(data);
    } catch (error) {
      setDetailsLoading(false);
      setDetailsError("User Details not found");
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, [activeItem]);

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <UserContext.Provider
      value={{
        loading,
        users,
        activeItem,
        setActiveItem,
        detailsLoading,
        userDetails,
        usersError,
        detailsError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default ContextProvider;

export const UserState = () => useContext(UserContext);
