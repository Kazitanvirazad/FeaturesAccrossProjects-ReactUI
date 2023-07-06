import AddProjectForm from "./AddForm";
import CommonHeader from "./CommonHeader";
import ServiceUriConfig from "../config/ServiceUriConfig.json";

const AddFeatureFormPage = () => {

    let formData: any = [
        { isTextBox: true, isRequired: true, name: "Feature Reference", id: "feature_ref" },
        { isTextBox: true, isRequired: true, name: "Feature Name", id: "feature_name" },
        { isTextBox: true, isRequired: false, name: "Description", id: "desc" },
        { isTextBox: true, isRequired: false, name: "Feature Type", id: "feature_type" },
        { isTextBox: true, isRequired: false, name: "Artifact Detail", id: "artifact_detail" },
        { isTextBox: true, isRequired: false, name: "Used Year", id: "used_year" },
        { isCheckBox: true, name: "Feature Extended", id: "feature_extended" },
        { isSelectTag: true, isMulti: false, name: "Project", option: "projectNames", id: "project_name" },
        { isSelectTag: true, isMulti: false, name: "Category", option: "categories", id: "category_name" },
        { isSelectTag: true, isMulti: false, name: "Sub Category", option: "subCategories", id: "subcategory_name" },
        { isSelectTag: true, isMulti: false, name: "Project Contact Point", option: "projectContactPoint", id: "project_contact_point" },
        { isSelectTag: true, isMulti: false, name: "Alternate Contact Point", option: "alternateContactPoint", id: "alternate_contact_point" }
    ];

    let serviceCnnfig = {
        uri: ServiceUriConfig.AddFeature.uri,
        url: import.meta.env.VITE_API_SERVICE_URL + ServiceUriConfig.AddFeature.uri,
        method: ServiceUriConfig.AddFeature.method,
        formId: "add-feature-form"
    };

    document.title = 'Add Feature Form';
    return (
        <>
            <div className="container">
                <CommonHeader heading="Add Feature Form" />
                <AddProjectForm formAttributeData={formData} serviceCnnfig={serviceCnnfig} />
            </div>
        </>
    );
};

export default AddFeatureFormPage;