import { useState } from "react";
import ServiceUriConfig from "../config/ServiceUriConfig.json";
import CommonHeader from "./CommonHeader";
import TableHeader from "./TableHeader";
import { FeatureListTableBody } from "./TableBodyRender";
import { featureProjectTableHeaderRowData } from "./TableHeaderRowData";

const FeatureList = () => {
    const url: string = import.meta.env.VITE_API_SERVICE_URL + ServiceUriConfig.FeatureList.uri;
    const method = ServiceUriConfig.FeatureList.method;
    const [featureprojectData, setfeatureProjectData] = useState([]);

    const tableHeaderArray: string[] = featureProjectTableHeaderRowData;

    const getFeatureProjectData = () => {
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
                setfeatureProjectData(data.data);
            } else if (data && data.error) {
                alert(data.message);
            }
        }).catch(err => {
            alert("Error connecting to the server!");
        });
    };

    document.title = 'Feature Project List';
    return (
        <>
            <div className="container">
                <CommonHeader heading="Feature List" />
                <button className="btn btn-primary" onClick={getFeatureProjectData}>Get Feature List</button>
                <div className="p-1">
                    {featureprojectData.length > 0 && <table className="table table-striped table-bordered">
                        <TableHeader tableHeader={tableHeaderArray} />
                        <FeatureListTableBody featureprojectData={featureprojectData} />
                    </table>}
                </div>
            </div>
        </>
    );
};

export default FeatureList;