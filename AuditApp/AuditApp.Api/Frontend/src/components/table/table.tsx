import React, { useState } from "react";
import { IUserCampAudits } from "../../types/IAudits";
import { DateToStringFormat } from "../../helpers/data-to-string";
import "./table.css"

interface TableProps {
    data: IUserCampAudits[];
    itemsPerPage: number;
}

export default function Table({ data, itemsPerPage }: TableProps) {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchText, setSearchText] = useState<string>("");

    const filteredData = data.filter((item) =>
        (typeof item.location === "string" &&
            item.location.toLowerCase().includes(searchText.toLowerCase())) ||
        (typeof item.title === "string" &&
            item.title.toLowerCase().includes(searchText.toLowerCase()))
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
                        <th>Название</th>
                        <th>Локация</th>
                        <th>Url сайта</th>
                        <th>Дата изменения</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.location}</td>
                            <td>{item.url}</td>
                            <td>{DateToStringFormat(item.modifiedOn)}</td>
                            <td>
                                <div>
                                    <img src="./images/editAudit.png" alt="Изменить аудит" />
                                    <img src="./images/deleteAudit.png" alt="Удалить аудит" />
                                </div>
                            </td>
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