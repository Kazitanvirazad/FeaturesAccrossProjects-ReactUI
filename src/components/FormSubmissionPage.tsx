import Buttons from './Buttons';
import { useSearchParams } from 'react-router-dom';

const FormSubmissionPage = () => {
    document.title = 'Submitted';

    const [searchParams] = useSearchParams();

    return (
        <>
            <div className="container">
                <div><p className="display-5 align-middle">{searchParams.get('message')}</p></div>
                <Buttons />
            </div>
        </>
    );
};

export default FormSubmissionPage;