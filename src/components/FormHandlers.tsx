import { useNavigate } from 'react-router-dom';
import FormSubmissionPage from './FormSubmissionPage';

let requestData: any = {};

let serviceConfig: any = { url: "", method: "" };

export const setServiceConfig = (serviceUrl: string, serviceMethod: string) => {
    serviceConfig.url = serviceUrl;
    serviceConfig.method = serviceMethod;
};

export const handleMultiSelectChange = (data: any) => {
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

export const handleChange = (event: any) => {
    const name: string = event.target.name;
    const value: string = event.target.value;
    requestData[name] = value;
};

export const handleSelectChange = (event: any) => {
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

export const handleCheckBoxInput = (event: any) => {
    const name: string = event.target.name;
    requestData[name] = name in requestData && requestData[name] ? false : true;
};

// const clearForm = (id: string) => {
//     const navigate = useNavigate();
//     // let ele: HTMLCollectionOf<Element> = document.getElementsByClassName("form-control")!;
//     // for (let i = 0; i < ele.length; i++) {
//     //     console.log(ele[i].nodeValue);
//     //     // ele.innerText = "";
//     // }
//     // <Route path="/redirect" element={<Navigate <FormSubmissionPage submissionText={id} /> /> } />
//     navigate("/submitted");
// };

export const onFormSubmit = (event: any) => {
    event.preventDefault();
    console.log("form submit");
    const navigate = useNavigate();
    navigate("/submitted");
    // clearForm("Kazi success");
    // fetch(serviceConfig.url, {
    //     method: serviceConfig.method,
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //     },
    //     body: JSON.stringify(requestData)
    // }).then(response => {
    //     return response.json();
    // }).then(data => {
    //     if (data) {
    //         alert(data.message);
    //         if (!data.error) {
    //             clearForm(event.target.id);
    //         }
    //     } else {
    //         alert("Server Connection problem!");
    //     }
    // }).catch(err => {
    //     console.log(err);
    //     alert("Server Error!");
    // });
};