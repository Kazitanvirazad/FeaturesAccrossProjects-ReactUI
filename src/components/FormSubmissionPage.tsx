import Buttons from './Buttons';
import { useLocation } from 'react-router-dom';

const FormSubmissionPage = () => {
    const location = useLocation();
    document.title = 'Submitted';

    return (
        <>
            <div className="container">
                <div><p className="display-5 align-middle">{location.state.message}</p></div>
                <Buttons />
            </div>
        </>
    );
};

export default FormSubmissionPage;