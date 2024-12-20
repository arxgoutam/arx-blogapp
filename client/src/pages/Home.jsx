import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Home = () => {
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

    //  const data = [
    //     {
    //         id: 1,
    //         title: "Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         desc: "Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         img: "https://www.guillenphoto.com/images/igallery/resized/6401-6500/01_landscape_photograph_in_black_and_white-6466-900-600-100.webp"
    //     },
    //     {
    //         id: 2,
    //         title: "Post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         desc: "Post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         img: "https://i0.wp.com/erickimphotography.com/blog/wp-content/uploads/2018/05/ERIC-KIM-STREET-PHOTOGRAPHY2.jpg?resize=2000%2C1333"
    //     },
    //     {
    //         id: 3,
    //         title: "Post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         desc: "Post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         img: "https://images.unsplash.com/photo-1709884732297-4b3c1a3f725b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //         id: 4,
    //         title: "Post 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         desc: "Post 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         img: "https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //         id: 5,
    //         title: "Post 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         desc: "Post 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         img: "https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //         id: 6,
    //         title: "Post 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         desc: "Post 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    //         img: "https://plus.unsplash.com/premium_photo-1661777965336-e4e80856b9fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    // ]


    return(
        <div className="home-page">
            <div className="home-slider">
                <img src="https://i0.wp.com/erickimphotography.com/blog/wp-content/uploads/2018/05/ERIC-KIM-STREET-PHOTOGRAPHY2.jpg?resize=2000%2C1333" alt="" />
            </div>
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

export default Home;