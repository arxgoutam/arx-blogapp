import { Link, useLocation, useNavigate } from "react-router-dom";
import user from "../assets/user.jpg"
import { FaTrashCan, FaPenToSquare } from "react-icons/fa6";
import Menu from "../components/Menu";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContex";
import axios from "axios";
import moment from "moment"
import Loader from "../components/Loader";
const Single = () =>{
    const [post, setPost] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const postId = location.pathname.split("/")[2];
    const navigate = useNavigate();

    const {currentUser} = useContext(AuthContext);
    
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const res = await axios.get(`http://localhost:8000/api/posts/${postId}`);
                setPost(res.data.data)
            } catch (error) {
                setError("Error Fetching Post")
            } finally {
                setLoading(false)
            }
        };

        fetchData();
        
    }, [postId]);

    if(loading) return <Loader/>;
    if(error) return <p className="error">{error}</p>

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/posts/${postId}`, {withCredentials: true});
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="single-page">
            <div className="single-container">
                <div className="single-left">
                    <div className="post-img">
                        <img src={post.img} alt="" />
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <div className="img">
                                <img src={user} alt="" />
                            </div>
                            <div className="info">
                                <h5>{post.username}</h5>
                                <p>Posted {moment(post.post_date).fromNow()}</p>
                            </div>
                        </div>
                    {currentUser && post && currentUser.username === post.username &&
                        <div className="action">
                            <Link to={`/write?edit=${postId}`} state={post}><FaPenToSquare /></Link>
                            {/* <Link><FaTrashCan /></Link> */}
                            <button onClick={handleDelete} className="delete-btn"><FaTrashCan /></button>
                        </div>
                     }
                    </div>
                    <div className="post-title">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="post-desc">
                       {post.post_desc}
                       </div>
                </div>
                <div className="single-right">
                    <Menu cat={post.cat}/>
                </div>
            </div>
        </div>
    );
};

export default Single;