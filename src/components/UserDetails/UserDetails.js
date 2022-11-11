import Loader from "../Layout/Loader";
import "./UserDetails.css";
import { useState } from "react";
const UserDetails = () => {
    const [userDetails, setUserDetails] = useState({})
    return(
        <div className="userdetails border p-3">
            <h2 className="main__title"> User Details</h2>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                <span className="my-3">@username</span>
                <p className="border w-100 p-2 user__data__input user__data user__bio">Lorem ipsum dolor sit amet consectetur adipiscing, elit vitae senectus aptent laoreet, aenean curae nibh nisi magnis. Fringilla est sociis sapien convallis at aliquam conubia integer eleifend eget metus, consequat </p>
                <div className=" w-100 m-auto d-flex flex-column user__data">
                    <label htmlFor="">Full Name</label>
                    <p className="border p-2 user__data__input">full name </p>
                </div>
                <div className=" w-100 m-auto d-flex flex-column user__data">
                    <label htmlFor="">Job Title</label>
                    <p className="border p-2 user__data__input">full name </p>
                </div>
                <div className=" w-100 m-auto d-flex flex-column user__data">
                    <label htmlFor="">Email</label>
                    <p className="border p-2 user__data__input">full name </p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;