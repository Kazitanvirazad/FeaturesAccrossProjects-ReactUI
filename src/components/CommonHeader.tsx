import Buttons from "./Buttons";
const CommonHeader = ({ heading, displayBttn }: any) => {
    return (
        <>
            <div>
                <p className="display-6 align-middle"><span>{heading}</span></p>
            </div>
            {displayBttn !== "false" && <Buttons />}
        </>
    );
};

export default CommonHeader;