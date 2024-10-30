import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Category = () =>{
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const cat = useLocation().search
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/posts${cat}`);
                setPosts(res.data.data);
            } catch (error) {
                setError("Error Fetching Posts");
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [cat]);

    if(loading) return <Loader/>;
    if(error) return <p className="error">{error}</p>

    return(
        <div className="home-page">
      
        <div className="home-container">

            <div className="posts">
            {posts.map(post =>(
                <div className="post-box">
                    <div className="post-img">
                        <img src={post.img} alt="" />
                    </div>
                    <div className="post-info">
                        <h1 className="post-title">{post.title}</h1>
                        <p>{post.post_desc.slice(0, 600)}......</p>
                        <Link to={`/post/${post.id}`}>
                            <button className="read-more-btn">Read More</button>
                        </Link>
                    </div>
                </div>
                ))}
            </div>

        </div>
    </div>
    )
}

export default Category;