
const TableHeader = (tableHeader: any) => {
    return (
        <>
            <thead className="table-primary">
                <tr>
                    {
                        tableHeader.tableHeader.map((item: string, index: number) => {
                            return (
                                <>
                                    <th key={index}><span>{item}</span></th>
                                </>
                            )
                        })
                    }
                </tr>
            </thead>
        </>
    );
};

export default TableHeader;