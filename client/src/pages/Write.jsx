
const Write = () =>{
    return(
        <div className="write-page">
        <div className="write-container">
            <div className="write-left">
                <div className="title">
                    <p>Title</p>
                    <input type="text" placeholder="Title Here"/>
                </div>
                <div className="description">
                    <p>Description</p>
                    <textarea name="" id="" rows={10}></textarea>
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
                        <input type="file" id="file"/>
                        <label htmlFor="file">Upload Image</label>
                    </div>
                    <div className="btn-group">
                        <button className="draft-btn">Save As Draft</button>
                        <button className="publish-btn">Publish</button>
                    </div>
                </div>
                <div className="box">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" id="blockchain" name="cat" value="blockchain"/>
                        <label htmlFor="blockchain">Blockchain</label>
                    </div>
                    <div className="cat">
                        <input type="radio" id="trading" name="cat" value="trading"/>
                        <label htmlFor="trading">Trading</label>
                    </div>
                    <div className="cat">
                        <input type="radio" id="crypto" name="cat" value="crypto"/>
                        <label htmlFor="crypto">Crypto</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" id="nft" value="nft"/>
                        <label htmlFor="nft">NFT</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" id="ai" value="ai"/>
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