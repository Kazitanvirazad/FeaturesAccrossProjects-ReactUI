import FormInputData from "./FormInputData";
import FormElements from "./FormElements";
import { useNavigate } from "react-router-dom";

const AddProjectForm = (formAttributeData: any) => {
    let options = FormInputData();
    const navigate = useNavigate();
    let requestData: any = {};

    let serviceConfig: any = { url: formAttributeData.serviceConfig.url, method: formAttributeData.serviceConfig.method };

    const handleMultiSelectChange = (data: any) => {
        if (data.length > 0) {
            let dataList: any = [];
            for (let obj of data) {
                let objItem: any = {};
                objItem[obj.name] = obj.value;
                dataList.push(objItem);
            }
            requestData[data[0].attribute] = dataList;
        }
    };

    const handleChange = (event: any) => {
        const name: string = event.target.name;
        const value: string = event.target.value;
        requestData[name] = value;
    };

    const handleSelectChange = (event: any) => {
        const name: string = event?.name;
        const value: string = event?.value;
        const attribute: string = event?.attribute;
        if (name) {
            let prop: any = {};
            prop[name] = value;
            requestData[attribute] = prop;
        } else {
            requestData[attribute] = value;
        }
    };

    const handleCheckBoxInput = (event: any) => {
        const name: string = event.target.name;
        requestData[name] = name in requestData && requestData[name] ? false : true;
    };

    const onFormSubmit = (event: any) => {
        event.preventDefault();

        fetch(serviceConfig.url, {
            method: serviceConfig.method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(requestData)
        }).then(response => {
            return response.json();
        }).then(data => {
            if (data) {
                if (!data.error) {
                    navigate("/submitted", { state: { message: data.message } });
                } else {
                    alert(data.message);
                }
            } else {
                alert("Server Connection problem!");
            }
        }).catch(err => {
            console.log(err);
            alert("Server Error!");
        });
    };

    let formConfig = {
        handleMultiSelectChange: handleMultiSelectChange,
        handleChange: handleChange,
        handleSelectChange: handleSelectChange,
        handleCheckBoxInput: handleCheckBoxInput
    };

    return (
        <>
            <div>
                <form id={serviceConfig.formId} onSubmit={onFormSubmit} action={serviceConfig.uri} method={serviceConfig.method}>

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