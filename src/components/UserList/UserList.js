import "./UserList.css"
import { Skeleton } from "@mui/material"

const UserList = () => {
    return(
        <div className="userlist border p-3">
            <h2 className="main__title">User List</h2>
            <div className="my-2 p-1 border d-flex align-items-center userlist__user gap-2">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                <span>User Name</span>
            </div>
            <div className="my-2 p-1 border d-flex align-items-center userlist__user gap-2">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                <span>User Name</span>
            </div>
            <div className="my-2 p-1 border d-flex align-items-center userlist__user gap-2">
                <Skeleton variant="circular" width={40} height={40}/>
                <Skeleton variant="rectangular" width={200} height={30}/>
            </div>
        </div>
    )
}

export default UserList