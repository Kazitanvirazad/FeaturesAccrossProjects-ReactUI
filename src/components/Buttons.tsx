import { Link } from "react-router-dom";

const Buttons = () => {
    return (
        <>
            <div className="d-flex flex-row justify-content-center">
                <div>
                    <button type="button" className="btn border"><Link to="/home"><span>Home</span></Link></button>
                </div>
                <div>
                    <button type="button" className="p-2 btn border"><Link to="/addprojectform"><span>Add Project</span></Link></button>
                </div>
                <div>
                    <button type="button" className="p-2 btn border"><Link to="/addfeatureform"><span>Add Feature</span></Link></button>
                </div>
                <div>
                    <button type="button" className="p-2 btn border"><Link to="/projectlist"><span>List Projects</span></Link></button>
                </div>
                <div>
                    <button type="button" className="p-2 btn border"><Link to="/featurelist"><span>List Features</span></Link></button>
                </div>
                <div>
                    <button type="button" className="p-2 btn border"><Link to="/search"><span>Search Features</span></Link></button>
                </div>
            </div>
        </>
    );
};

export default Buttons;