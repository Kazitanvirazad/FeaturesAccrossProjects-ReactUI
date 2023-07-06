import Buttons from './Buttons';
import ProjectBenefitContent from './ProjectBenefitContent';
import CommonHeader from "./CommonHeader";

const Home = () => {
    document.title = 'Welcome | Features Accross Projects';

    return (
        <>
            <div className="container">
                <div><p className="display-5 align-middle">Welcome to Features Accross Projects</p></div>
                <Buttons />
                <CommonHeader heading="Technology Used: SpringBoot, ReactJS, postgreSql Database" displayBttn={"false"} />
                <ProjectBenefitContent />
            </div>

        </>
    );
};

export default Home;