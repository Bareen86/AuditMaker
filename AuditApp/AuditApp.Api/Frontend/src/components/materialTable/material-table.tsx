import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Menu,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Tooltip,
    TooltipProps,
    Typography,
    styled,
    tooltipClasses,
    useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { IUserCampAudits } from "../../types/IAudits";
import { DateToStringFormat } from "../../helpers/data-to-string";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MenuIcon from "@mui/icons-material/Menu";
import "./material-table.css";

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === "rtl" ? (
                    <LastPageIcon />
                ) : (
                    <FirstPageIcon />
                )}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === "rtl" ? (
                    <FirstPageIcon />
                ) : (
                    <LastPageIcon />
                )}
            </IconButton>
        </Box>
    );
}

interface Column {
    id: "Название" | "Локация" | "Url сайта" | "Дата изменения" | "Действия";
    label: string;
    minWidth?: number;
    align?: "right" | "left" | "center";
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: "Название", label: "Название", minWidth: 150, align: "left" },
    { id: "Локация", label: "Локация", minWidth: 150, align: "left" },
    {
        id: "Url сайта",
        label: "Url сайта",
        minWidth: 150,
        align: "left",
        format: (value: number) => value.toLocaleString("en-US"),
    },
    {
        id: "Дата изменения",
        label: "Дата изменения",
        minWidth: 150,
        align: "left",
        format: (value: number) => value.toLocaleString("en-US"),
    },
    {
        id: "Действия",
        label: "Действия",
        minWidth: 150,
        align: "center",
        format: (value: number) => value.toFixed(2),
    },
];

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

interface CustomPaginationActionsTableProps {
    rows: IUserCampAudits[];
}

export default function CustomPaginationActionsTable({
    rows,
}: CustomPaginationActionsTableProps) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [show, setShow] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [url, setUrl] = useState<string>("");

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseForTable = () => {
        setAnchorEl(null);
    };

    const handleDialogClose = () => {
        setShow(false);
        setTitle("");
        setLocation("");
        setUrl("");
    };

    function handleEdit(id: number) {
        setAnchorEl(null);
        navigate("/editcampaudit/" + id);
    }

    function handleDelete(id: number) {
        setAnchorEl(null);
        axios.delete("/api/audits/" + id);
    }

    const [searchText, setSearchText] = useState<string>("");

    const filteredRows = rows.filter(
        (item) =>
            (typeof item.location === "string" &&
                item.location
                    .toLowerCase()
                    .includes(searchText.toLowerCase())) ||
            (typeof item.title === "string" &&
                item.title.toLowerCase().includes(searchText.toLowerCase()))
    );

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleAuditAdd = () => {
        setShow(false);
        const auditData = createCampAuditData(title, location, url, 1);
        localStorage.setItem("auditData", JSON.stringify(auditData));
        //navigate("/addcampaudit")
    };

    const openDialog = () => {
        setShow(true);
    };

    interface HotelAuditData {
        title: string;
        location: string;
        url: string;
        auditType: number;
    }

    function createCampAuditData(
        title: string,
        location: string,
        url: string,
        auditType: number
    ): HotelAuditData {
        return {
            title: title,
            location: location,
            url: url,
            auditType: 1,
        };
    }

    return (
        <>
            <div className="container">
                <TextField
                    placeholder="Поиск..."
                    autoComplete="off"
                    type="text"
                    value={searchText}
                    onChange={handleSearch}
                    size="small"
                    variant="outlined"
                />
                <Button onClick={openDialog} variant="outlined">
                    Перейти к созданию аудита {"->"}
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
                                        fontWeight: "bolder",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? filteredRows.slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                            : filteredRows
                        ).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell
                                    style={{ maxWidth: "200px" }}
                                    align="left"
                                >
                                    {row.title}
                                </TableCell>
                                <TableCell
                                    style={{ maxWidth: "200px" }}
                                    align="left"
                                >
                                    {row.location}
                                </TableCell>
                                <TableCell
                                    className="ellipsis"
                                    style={{
                                        maxWidth: "200px",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                    }}
                                    align="left"
                                >
                                    <LightTooltip
                                        placement="top"
                                        title={
                                            <a
                                                className="link-text"
                                                href={row.url}
                                            >
                                                {row.url}
                                            </a>
                                        }
                                    >
                                        <span>{row.url}</span>
                                    </LightTooltip>
                                </TableCell>
                                <TableCell
                                    style={{ maxWidth: "200px" }}
                                    align="left"
                                >
                                    {DateToStringFormat(row.modifiedOn)}
                                </TableCell>
                                <TableCell
                                    style={{
                                        maxWidth: "200px",
                                        display: "block",
                                    }}
                                    align="center"
                                >
                                    <IconButton
                                        aria-label="more"
                                        id="menu-button"
                                        aria-controls={
                                            open ? "basic-menu" : undefined
                                        }
                                        aria-expanded={
                                            open ? "true" : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MenuIcon fontSize="large" />
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleCloseForTable}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                    >
                                        <MenuItem
                                            onClick={() => handleEdit(row.id)}
                                        >
                                            Изменить
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => handleDelete(row.id)}
                                        >
                                            Удалить
                                        </MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[
                                    5,
                                    10,
                                    25,
                                    { label: "Все", value: -1 },
                                ]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        "aria-label": "rows per page",
                                    },
                                    native: true,
                                }}
                                labelRowsPerPage="Записей на странице:"
                                labelDisplayedRows={({ from, to, count }) => {
                                    return (
                                        "" + from + "-" + to + " из " + count
                                    );
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <Dialog open={show} onClose={handleDialogClose}>
                <DialogTitle variant="h4">Создание аудита лагеря</DialogTitle>
                <DialogContent>
                    <Typography
                        style={{ width: "500px" }}
                        id="audit-title"
                        variant="h6"
                    >
                        Название Объекта аудита
                    </Typography>
                    <TextField
                        placeholder="Пример: лагерь Дубинина..."
                        onChange={(t) => setTitle(t.target.value)}
                        margin="dense"
                        style={{ margin: "8px 0px 10px" }}
                        id="audit-title-field"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <Typography id="audit-location" variant="h6">
                        Место расположения объекта
                    </Typography>
                    <TextField
                        placeholder="Пример: Россия, Москва..."
                        onChange={(l) => setLocation(l.target.value)}
                        margin="dense"
                        style={{ margin: "8px 0px 10px" }}
                        id="audit-location-field"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <Typography id="audit-url" variant="h6">
                        Url сайта
                    </Typography>
                    <TextField
                        placeholder="Пример: https://www.google.com/"
                        onChange={(u) => setUrl(u.target.value)}
                        margin="dense"
                        style={{ margin: "8px 0px 10px" }}
                        id="audit-url-field"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>
                        Вурнуться к аудитам
                    </Button>
                    <Button onClick={handleAuditAdd}>Продолжить</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
