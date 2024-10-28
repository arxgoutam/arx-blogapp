import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () =>{

   const [inputs, setInputs] = useState({
    email: "",
    password: ""
   });

   const handleChange = (e) =>{
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
   }
   const handleSubmit = (e) => {
    e.preventDefault();
   }
    return(
        <div className="register-page">
        <form className="from-con" action="">
          
            <div className="input-group">
                <p>Email</p>
                <input onChange={handleChange} type="email" placeholder="Email" />
            </div>
            <div className="input-group">
                <p>Password</p>
                <input onChange={handleChange} type="password" placeholder="Password" />
            </div>
            <button onClick={handleSubmit} className="register-btn">Login</button>
            <div className="switch-log-btn">
                <p>Have not account? <Link to='/register'>Register</Link></p>
            </div>
        </form>
    </div>
    );
};

export default Login;