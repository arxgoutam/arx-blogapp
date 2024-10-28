import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContex";

const Login = () =>{

   const [inputs, setInputs] = useState({
    email: "",
    password: ""
   });

   const [error, setError] = useState(null);
   const navigate = useNavigate();
   const {login} = useContext(AuthContext)


   const handleChange = (e) =>{
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
   }
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await login(inputs);
        navigate('/');
    } catch (error) {
        setError(error.response?.data || "Something went wrong. Please try again")
    }
   }
    return(
        <div className="register-page">
        <form className="from-con" action="">
          
            <div className="input-group">
                <p>Email</p>
                <input onChange={handleChange} name="email" type="email" placeholder="Email" />
            </div>
            <div className="input-group">
                <p>Password</p>
                <input onChange={handleChange} name="password" type="password" placeholder="Password" />
            </div>
            <button onClick={handleSubmit} className="register-btn">Login</button>
            {error && <p className="error">{error}</p>}
            <div className="switch-log-btn">
                <p>Have not account? <Link to='/register'>Register</Link></p>
            </div>
        </form>
    </div>
    );
};

export default Login;