import FormInputData from "./FormInputData";
import FormElements from "./FormElements";
import { handleMultiSelectChange, handleChange, handleSelectChange, handleCheckBoxInput, onFormSubmit, setServiceConfig } from "./FormHandlers";

const AddProjectForm = (formAttributeData: any) => {
    let options = FormInputData();

    setServiceConfig(formAttributeData.serviceCnnfig.url, formAttributeData.serviceCnnfig.method);

    let formConfig = {
        handleMultiSelectChange: handleMultiSelectChange,
        handleChange: handleChange,
        handleSelectChange: handleSelectChange,
        handleCheckBoxInput: handleCheckBoxInput
    };

    return (
        <>
            <div>
                <form id={formAttributeData.serviceCnnfig.formId} onSubmit={onFormSubmit} action={formAttributeData.serviceCnnfig.uri} method={formAttributeData.serviceCnnfig.method}>

                    <FormElements options={options} formAttributeData={formAttributeData} formConfig={formConfig} />

                    <div>
                        <input className="btn btn-primary" type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProjectForm;