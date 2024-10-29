import { Link, useLocation, useNavigate } from "react-router-dom";
import user from "../assets/user.jpg"
import { FaTrashCan, FaPenToSquare } from "react-icons/fa6";
import Menu from "../components/Menu";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContex";
import axios from "axios";
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
    console.log(post)

    if(loading) return <Loader/>;
    if(error) return <p className="error">{error}</p>
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
                                <h5>Goutam Paik</h5>
                                <p>5 hours ago</p>
                            </div>
                        </div>
                        <div className="action">
                            <Link to={`/write/?edit=2`}><FaPenToSquare /></Link>
                            <Link><FaTrashCan /></Link>
                        </div>
                    </div>
                    <div className="post-title">
                        <h1>Post Title</h1>
                    </div>
                    <div className="post-desc">
                        <p>Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</p>
                        <p>Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaPost 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</p>
                    </div>
                </div>
                <div className="single-right">
                    <Menu/>
                </div>
            </div>
        </div>
    );
};

export default Single;