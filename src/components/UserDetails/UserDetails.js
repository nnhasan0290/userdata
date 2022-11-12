import Loader from "../Layout/Loader";
import "./UserDetails.css";
import { UserState } from "../../context/ContextProvider";
const UserDetails = () => {
  const { detailsLoading, userDetails, detailsError } = UserState();
  console.log(detailsLoading, userDetails);
  const { Bio, profile, jobTitle } = userDetails;
  return (
    <div className="userdetails border p-3">
      <h2 className="main__title"> User Details</h2>
      {detailsLoading ? (
        <Loader />
      ) : (
        <>
        {
            detailsError ? (
                <div className="error__message">
                    <h3>{detailsError}</h3>
                </div>
            ): (
                <div className="d-flex flex-column align-items-center justify-content-center">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt=""
                />
                <span className="my-3">{profile?.username}</span>
                <p className="border w-100 p-2 user__data__input user__data user__bio">
                  {Bio}{" "}
                </p>
                <div className=" w-100 m-auto d-flex flex-column user__data">
                  <label htmlFor="">Full Name</label>
                  <p className="border p-2 user__data__input">{`${profile?.firstName} ${profile?.lastName}`}</p>
                </div>
                <div className=" w-100 m-auto d-flex flex-column user__data">
                  <label htmlFor="">Job Title</label>
                  <p className="border p-2 user__data__input">{jobTitle} </p>
                </div>
                <div className=" w-100 m-auto d-flex flex-column user__data">
                  <label htmlFor="">Email</label>
                  <p className="border p-2 user__data__input">{profile?.email} </p>
                </div>
              </div>
            )
        }
          
        </>
      )}
    </div>
  );
};

export default UserDetails;
