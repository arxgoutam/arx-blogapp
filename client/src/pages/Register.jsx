import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () =>{
    const [inputs, setInputs] = useState({
        full_name: "",
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setInputs((prev)=>({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/auth/register', inputs);
            navigate('/login')
        } catch (error) {
            setError(error.response.data)
        }
    }

    return(
        <div className="register-page">
            <form className="from-con" action="">
                <div className="input-group">
                    <p>Full Name</p>
                    <input onChange={handleChange} type="text" name="full_name" placeholder="Full Name" />
                </div>
                <div className="input-group">
                    <p>Username</p>
                    <input onChange={handleChange} type="text" name="username" placeholder="username" />
                </div>
                <div className="input-group">
                    <p>Email</p>
                    <input onChange={handleChange} type="email" name="email" placeholder="Email" />
                </div>
                <div className="input-group">
                    <p>Password</p>
                    <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                </div>
                <button className="register-btn" onClick={handleSubmit}>Register</button>
                {error && <p className='error'>{error}</p>}
                <div className="switch-log-btn">
                    <p>Already have account? <Link to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;