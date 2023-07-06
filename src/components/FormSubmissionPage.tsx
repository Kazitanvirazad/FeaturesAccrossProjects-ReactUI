import Buttons from './Buttons';

const FormSubmissionPage = () => {
    document.title = 'Submitted';

    return (
        <>
            <div className="container">
                <div><p className="display-5 align-middle">Form Submitted Successfully!</p></div>
                <Buttons />
            </div>
        </>
    );
};

export default FormSubmissionPage;