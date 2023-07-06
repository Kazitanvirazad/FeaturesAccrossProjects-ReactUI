import Sector from "./Sector";
import User from "./User";
import Practice from "./Practice";
import Domain from "./Domain";
import ClientLead from "./ClientLead";
import Region from "./Region";

interface Project {
    project_name: string;
    regions: Region[];
    sector: Sector;
    project_contact_point: User;
    multi_brand: boolean;
    brandnames: string;
    multi_site: true;
    project_notes: string;
    last_served_year: string;
    clientLead: ClientLead;
    practice: Practice;
    domain: Domain;
};

export default Project;