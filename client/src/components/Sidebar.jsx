import { Link } from "react-router-dom";


const Sidebar = () => {
    return(
        <div className="sidebar-con">
            <Link to="/dashboard">Dashboard</Link>
            <Link>Proile</Link>
            <Link>Change Password</Link>
        </div>
    );
};

export default Sidebar; 