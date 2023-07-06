import { useState } from "react";
import ServiceUriConfig from "../config/ServiceUriConfig.json";
import CommonHeader from "./CommonHeader";
import TableHeader from "./TableHeader";
import { ProjectListTableBody } from "./TableBodyRender";
import { projectTableHeaderRowData } from "./TableHeaderRowData";

const ProjectList = () => {
    const url: string = import.meta.env.VITE_API_SERVICE_URL + ServiceUriConfig.ProjectList.uri;
    const method = ServiceUriConfig.ProjectList.method;
    const [projectData, setProjectData] = useState([]);

    const tableHeaderArray: string[] = projectTableHeaderRowData;

    const getProjectData = () => {
        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            if (data && !data.error) {
                setProjectData(data.data);
            } else if (data && data.error) {
                alert(data.message);
            }
        }).catch(err => {
            alert("Error connecting to the server!");
        });
    };

    document.title = 'Project List';
    return (
        <>
            <div className="container">
                <CommonHeader heading="Project List" />
                <button className="btn btn-primary" onClick={getProjectData}>Get Project List</button>
                <div className="p-1">
                    {projectData.length > 0 && <table className="table table-striped table-bordered">
                        <TableHeader tableHeader={tableHeaderArray} />
                        <ProjectListTableBody projectData={projectData} />
                    </table>}
                </div>
            </div>
        </>
    );
};

export default ProjectList;