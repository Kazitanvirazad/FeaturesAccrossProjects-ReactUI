import { useState } from "react";
import ServiceUriConfig from "../config/ServiceUriConfig.json";
import CommonHeader from "./CommonHeader";
import TableHeader from "./TableHeader";
import { FeatureListTableBody } from "./TableBodyRender";
import SearchForm from "./SearchForm";
import { featureProjectTableHeaderRowData } from "./TableHeaderRowData";

const SearchFeatures = () => {
    const method = ServiceUriConfig.SearchFeature.method;

    const [featureprojectData, setfeatureProjectData] = useState([]);

    const [searchKey, setSearchKey] = useState("");

    const tableHeaderArray: string[] = featureProjectTableHeaderRowData;

    const handleChange = (event: any) => {
        setSearchKey(event.target.value);
    };

    const onFormSubmitHandler = (event: any) => {
        event.preventDefault();
        fetch(import.meta.env.VITE_API_SERVICE_URL + ServiceUriConfig.SearchFeature.uri + "?keyword=" + searchKey, {
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
            console.log(err);
        });
    };

    document.title = 'Search Features';
    return (
        <>
            <div className="container">
                <CommonHeader heading="Search Features" />
                <SearchForm onFormSubmitHandler={onFormSubmitHandler} handleChange={handleChange} uri={ServiceUriConfig.SearchFeature.uri} method={method} />
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

export default SearchFeatures;