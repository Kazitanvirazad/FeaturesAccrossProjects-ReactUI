
export const FeatureListTableBody = ({ featureprojectData }: any) => {
    return (
        <>
            <tbody>
                {featureprojectData.map((featureProject: any, index: number) => {
                    return (
                        <tr key={index}>
                            <td>
                                {featureProject.project.project_name}
                            </td>
                            <td>
                                {featureProject.feature.feature_name}
                            </td>
                            <td>
                                {featureProject.feature.category.category_name}
                            </td>
                            <td>
                                {featureProject.poc.displayName}
                            </td>
                            <td>
                                {featureProject.artifact_detail}
                            </td>
                            <td>
                                {featureProject.used_year}
                            </td>
                            <td>
                                {featureProject.feature_extended ? 'Yes' : 'No'}
                            </td>
                            <td>
                                {featureProject.alternate_poc.displayName}
                            </td>
                            <td>
                                {featureProject.feature.sub_category.subcategory_name}
                            </td>
                            <td>
                                {featureProject.feature.feature_type}
                            </td>
                            <td>
                                {featureProject.project.multi_brand ? 'Yes' : 'No'}
                            </td>
                            <td>
                                {featureProject.project.multi_site ? 'Yes' : 'No'}
                            </td>
                            <td>
                                {featureProject.project.sector.sector_name}
                            </td>
                            <td>
                                {featureProject.project.domain.domain_name}
                            </td>
                            <td>
                                {featureProject.project.clientLead.client_type}
                            </td>
                            <td>
                                {featureProject.project.regions.map((item: any, index: number) => {
                                    return (item.region_id + " ")
                                })}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </>
    );
};

export const ProjectListTableBody = ({ projectData }: any) => {
    return (
        <>
            <tbody>
                {projectData.map((project: any, index: number) => {
                    return (
                        <tr key={index}>
                            <td>
                                {project.project_name}
                            </td>
                            <td>
                                {project.sector.sector_name}
                            </td>
                            <td>
                                {project.project_contact_point.displayName}
                            </td>
                            <td>
                                {project.multi_brand ? 'Yes' : 'No'}
                            </td>
                            <td>
                                {project.brandnames}
                            </td>
                            <td>
                                {project.multi_site ? 'Yes' : 'No'}
                            </td>
                            <td>
                                {project.project_notes}
                            </td>
                            <td>
                                {project.last_served_year}
                            </td>
                            <td>
                                {project.clientLead.client_type}
                            </td>
                            <td>
                                {project.practice.practice_name}
                            </td>
                            <td>
                                {project.domain.domain_name}
                            </td>
                            <td>
                                {project.regions.map((item: any, index: number) => {
                                    return (item.region_id + " ")
                                })}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </>
    );
};