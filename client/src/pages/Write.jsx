import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Write = () =>{
    const state = useLocation.state
    const navigate = useNavigate();
    const [title, setTitle] = useState(state ? state.title : "");
    const [desc, setDesc] = useState(state ? state.post_desc : "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state ? state.cat : "");

    const upload = async () => {
        const formData = new FormData(); // Corrected the variable name here
        formData.append("file", file); // Ensure `file` is correctly set from your input
        try {
          const res = await axios.post("http://localhost:8000/api/upload/posts", formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Important to set correct headers
            },
          });
          console.log(res.data)
          return res.data
        } catch (error) {
          console.log(error);
        }
     
      };

      const handleClick = async (e) => {
        e.preventDefault();
        let imgUrl = "";
        if(file) {
            try {
                imgUrl = await upload();
            } catch (uploadError) {
                console.log("error uploading image", uploadError);
                return;
            }
        }
        try {
            const payload = {
                title,
                desc,
                cat,
                img: file ? imgUrl : state.img,
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            };
            if(state){
                // Update Post
            } else {
                // Create new post 
                const response = await axios.post(`http://localhost:8000/api/posts`, payload, { withCredentials: true });
                console.log("post created:", response.data);
            }
        } catch (error) {
            console.error("Error during post operation arx:", error);
        }
      };

    return(
        <div className="write-page">
        <div className="write-container">
            <div className="write-left">
                <div className="title">
                    <p>Title</p>
                    <input type="text" placeholder="Title Here" value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="description">
                    <p>Description</p>
                    <textarea name="" id="" rows={20} value={desc} onChange={e=>setDesc(e.target.value)}></textarea>
                </div>
            </div>
            <div className="write-right">
                <div className="box">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span> <br />
                    <span>
                        <b>Visibility: </b> Public
                    </span><br />
                    <div className="upload-img">
                        <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
                        <label htmlFor="file">Upload Image</label>
                    </div>
                    <div className="btn-group">
                        <button className="draft-btn">Save As Draft</button>
                        <button className="publish-btn" onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className="box">
                    <h1>Category</h1>
                    <div className="cat">
                        <input checked={cat === "blockchain"} type="radio" id="blockchain" name="cat" value="blockchain" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="blockchain">Blockchain</label>
                    </div>
                    <div className="cat">
                        <input checked={cat === "trading"} type="radio" id="trading" name="cat" value="trading" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="trading">Trading</label>
                    </div>
                    <div className="cat">
                        <input checked={cat === "crypto"} type="radio" id="crypto" name="cat" value="crypto" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="crypto">Crypto</label>
                    </div>
                    <div className="cat">
                        <input checked={cat === "nft"} type="radio" name="cat" id="nft" value="nft" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="nft">NFT</label>
                    </div>
                    <div className="cat">
                        <input checked={cat === "ai"} type="radio" name="cat" id="ai" value="ai" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="ai">AI</label>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    </div>
    );
};

export default Write;