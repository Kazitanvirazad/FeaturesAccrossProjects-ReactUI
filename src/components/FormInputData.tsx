import ServiceUriConfig from "../config/ServiceUriConfig.json";
import Region from "./Region";
import Category from "./Category";
import User from "./User";

const FormInputData = () => {
    let url = import.meta.env.VITE_API_SERVICE_URL;
    url += ServiceUriConfig.DropdownList.uri;
    let method = ServiceUriConfig.DropdownList.method;

    let options: any = {
        regions: [],
        clientType: [],
        practice: [],
        projectNames: [],
        sectorNames: [],
        categories: [],
        domainNames: [],
        subCategories: [],
        projectContactPoint: [],
        alternateContactPoint: []
    };

    let addOptions = (data: any) => {
        data.regions.map((region: Region) => {
            options.regions.push({ 'value': region.region_id, 'label': region.region_name, 'name': 'region_id', 'attribute': 'regions' });
        });
        data.clientType.map((client: string) => {
            options.clientType.push({ 'value': client, 'label': client, 'name': 'client_type', 'attribute': 'clientLead' });
        });
        data.practiceNames.map((practice: string) => {
            options.practice.push({ 'value': practice, 'label': practice, 'name': 'practice_name', 'attribute': 'practice' });
        });
        data.projectNames.map((project: string) => {
            options.projectNames.push({ 'value': project, 'label': project, 'attribute': 'project_name' });
        });
        data.sectorNames.map((sector: string) => {
            options.sectorNames.push({ 'value': sector, 'label': sector, 'name': 'sector_name', 'attribute': 'sector' });
        });
        data.categories.map((category: Category) => {
            options.categories.push({ 'value': category.category_name, 'label': category.category_name + (category.category_description != null ? " - " + category.category_description : ""), 'name': 'category_name', 'attribute': 'category' });
        });
        data.domainNames.map((domain: string) => {
            options.domainNames.push({ 'value': domain, 'label': domain, 'name': 'domain_name', 'attribute': 'domain' });
        });
        data.subCategories.map((subCategory: string) => {
            options.subCategories.push({ 'value': subCategory, 'label': subCategory, 'name': 'subcategory_name', 'attribute': 'sub_category' });
        });
        data.projectContactPoint.map((user: User) => {
            options.projectContactPoint.push({ 'value': user.user_id, 'label': user.displayName, 'name': 'user_id', 'attribute': 'project_contact_point' });
        });
        data.projectContactPoint.map((user: User) => {
            options.alternateContactPoint.push({ 'value': user.user_id, 'label': user.displayName, 'name': 'user_id', 'attribute': 'alternate_contact_point' });
        });
    };

    if (options.practice.length < 1) {
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
                addOptions(data.data);
                return options;
            } else {
                alert("Something went wrong!");
            }
        }).catch(err => {
            alert("Server Error!");
            console.log(err);
        });
    }

    return options;
};

export default FormInputData;