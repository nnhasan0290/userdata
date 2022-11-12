import "./UserList.css";
import Loader from "../Layout/Loader";
import { UserState } from "../../context/ContextProvider";

const UserList = () => {
  const { loading, users, activeItem, setActiveItem, usersError } = UserState();
  return (
    <div className="userlist border p-3">
      <h2 className="main__title">User List</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          {usersError ? (
            <div className="error__message">
              <h3>User not found</h3>
            </div>
          ) : (
            <>
              {users.map((user, i) => (
                <div
                  key={i}
                  onClick={() => setActiveItem(i)}
                  className={`my-2 p-1 border d-flex align-items-center userlist__user gap-2 ${
                    activeItem === i && "active"
                  }`}
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt=""
                  />
                  <span>
                    {user.profile.firstName + " " + user.profile.lastName}
                  </span>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default UserList;
