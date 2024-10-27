import { Link } from "react-router-dom";

const Register = () =>{
    return(
        <div className="register-page">
            <form className="from-con" action="">
                <div className="input-group">
                    <p>Full Name</p>
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className="input-group">
                    <p>Username</p>
                    <input type="text" placeholder="username" />
                </div>
                <div className="input-group">
                    <p>Email</p>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                    <p>Password</p>
                    <input type="password" placeholder="Password" />
                </div>
                <button className="register-btn">Register</button>
                <div className="switch-log-btn">
                    <p>Already have account? <Link to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;