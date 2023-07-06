import Home from "./components/Home";
import AddProjectFormPage from "./components/AddProjectFormPage";
import AddFeatureFormPage from "./components/AddFeatureFormPage";
import FeatureList from "./components/FeatureList";
import SearchFeatures from "./components/SearchFeatures";
import ProjectList from "./components/ProjectList";
import FormSubmissionPage from "./components/FormSubmissionPage";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

const Routers = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/addprojectform" element={<AddProjectFormPage />} />
                <Route path="/addfeatureform" element={<AddFeatureFormPage />} />
                <Route path="/featurelist" element={<FeatureList />} />
                <Route path="/search" element={<SearchFeatures />} />
                <Route path="/projectlist" element={<ProjectList />} />
                <Route path="/submitted" element={<FormSubmissionPage />} />
            </>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default Routers;