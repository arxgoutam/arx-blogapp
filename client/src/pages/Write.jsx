
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
                    
                    <div className="btn-group">
                        <button className="draft-btn">Save As Draft</button>
                        <button className="publish-btn">Publish</button>
                    </div>
                </div>
                <div className="box"></div>
            </div>
        </div>
    </div>
    );
};

export default Write;