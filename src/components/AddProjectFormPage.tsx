import AddProjectForm from "./AddForm";
import CommonHeader from "./CommonHeader";
import ServiceUriConfig from "../config/ServiceUriConfig.json";

const AddProjectFormPage = () => {

    let formData: any = [
        { isTextBox: true, isRequired: true, name: "Project Name", id: "project_name" },
        { isTextBox: true, isRequired: false, name: "Brand Names", id: "brandnames" },
        { isTextBox: true, isRequired: false, name: "Project Notes", id: "project_notes" },
        { isTextBox: true, isRequired: false, name: "Last Served Year", id: "last_served_year" },
        { isCheckBox: true, name: "Multi Brand", id: "multi_brand" },
        { isCheckBox: true, name: "Multi Site", id: "multi_site" },
        { isSelectTag: true, isMulti: false, name: "Client Type", option: "clientType", id: "clientType" },
        { isSelectTag: true, isMulti: false, name: "Practice", option: "practice", id: "practice_name" },
        { isSelectTag: true, isMulti: false, name: "Domain", option: "domainNames", id: "domain_name" },
        { isSelectTag: true, isMulti: true, name: "Regions", option: "regions", id: "regions" },
        { isSelectTag: true, isMulti: false, name: "Sector", option: "sectorNames", id: "sector_name" },
        { isSelectTag: true, isMulti: false, name: "Project Contact Point", option: "projectContactPoint", id: "project_contact_point" }
    ];

    let serviceCnnfig = {
        uri: ServiceUriConfig.AddProject.uri,
        url: import.meta.env.VITE_API_SERVICE_URL + ServiceUriConfig.AddProject.uri,
        method: ServiceUriConfig.AddProject.method,
        formId: "add-project-form"
    };

    document.title = 'Add Project Form';
    return (
        <>
            <div className="container">
                <CommonHeader heading="Add Project Form" />
                <AddProjectForm formAttributeData={formData} serviceCnnfig={serviceCnnfig} />
            </div>
        </>
    );
};

export default AddProjectFormPage;