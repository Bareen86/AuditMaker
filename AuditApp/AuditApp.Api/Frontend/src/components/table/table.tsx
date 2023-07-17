import React, { useState } from "react";

interface TableProps {
    data: any[];
    itemsPerPage: number;
}

export default function Table({ data, itemsPerPage }: TableProps) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchText, setSearchText] = useState<string>("");

    const filteredData = data.filter((item) =>
        (typeof item.property1 === "string" &&
            item.property1.toLowerCase().includes(searchText.toLowerCase())) ||
        (typeof item.property2 === "string" &&
            item.property2.toLowerCase().includes(searchText.toLowerCase()))
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = filteredData.slice(startIndex, endIndex);

    return (
        <div>
            <input type="text" value={searchText} onChange={handleSearch} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {Array.from(
                    { length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        disabled={pageNumber === currentPage}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
}