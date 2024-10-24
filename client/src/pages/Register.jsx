import { Link } from "react-router-dom";

const Register = () =>{
    return(
        <div>
            <form action="">
                <div className="inptu-group">
                    <p>Full Name</p>
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className="inptu-group">
                    <p>Username</p>
                    <input type="text" placeholder="username" />
                </div>
                <div className="inptu-group">
                    <p>Email</p>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="inptu-group">
                    <p>Password</p>
                    <input type="password" placeholder="Password" />
                </div>
                <button>Register</button>
            </form>
            <div className="ddd">
                <p>Already have account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;