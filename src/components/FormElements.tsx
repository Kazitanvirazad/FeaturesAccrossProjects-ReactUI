import Select from "react-select";

const FormElements = (formData: any) => {

    const options = formData.options;
    const formAttributeData = formData.formAttributeData;
    const formConfig = formData.formConfig;

    return (
        <>
            {formAttributeData.formAttributeData.map((item: any, index: number) => {
                if (item.isTextBox) {
                    return (
                        <>
                            <div className="mb-3" key={index}>
                                <label className="form-label" htmlFor={item.id}>{item.name}</label>
                                <input className="form-control" onChange={formConfig.handleChange} placeholder={"Enter " + item.name} type="text" name={item.id} defaultValue="" id={item.id} required={item.isRequired} />
                            </div>
                        </>
                    );
                }
                if (item.isSelectTag) {
                    return (
                        <>
                            <div className="mb-3" key={index}>
                                <label className="form-label" htmlFor={item.id}>{"Select " + item.name}</label>
                                <Select
                                    className="form-control"
                                    id={item.id}
                                    options={options[item.option]}
                                    onChange={item.isMulti ? formConfig.handleMultiSelectChange : formConfig.handleSelectChange}
                                    isMulti={item.isMulti}
                                    placeholder={"Choose " + item.name}
                                    required
                                />
                            </div>
                        </>
                    );
                }
                if (item.isCheckBox) {
                    return (
                        <>
                            <div className="mb-3 form-check" key={index}>
                                <label className="form-check-label" htmlFor={item.id}>{"Select " + item.name}</label>
                                <input onChange={formConfig.handleCheckBoxInput} className="form-check-input" type="checkbox" name={item.id} id={item.id} />
                            </div>
                        </>
                    );
                }
            })}
        </>
    );
};

export default FormElements;