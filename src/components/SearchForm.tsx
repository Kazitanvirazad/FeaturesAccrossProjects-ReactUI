
const SearchForm = ({ onFormSubmitHandler, handleChange, uri, method }: any) => {
    return (
        <>
            <div>
                <form id="feature-search-form" onSubmit={onFormSubmitHandler} action={uri} method={method}>
                    <div className="d-flex w-50 p-3 mx-auto gap-3">
                        <input placeholder="Enter Search Keyword" onChange={handleChange} className="form-control" type="text" required />
                        <input className="btn btn-primary" type="submit" value="Search" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default SearchForm;