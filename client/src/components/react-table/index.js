import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import styled from "styled-components";
import Style from "./Style"

const StyledTable = styled(ReactTable)`
    ${Style}
`;



const TableWrapper = props => {
    return (
        <StyledTable
                    data={[{"profile": "abc", "name": "abc", "email": "abc", "status": "abc","actions": "abc"},
                        {"profile": "abc", "name": "abc", "email": "abc", "status": "abc","actions": "abc"}]}
                    noDataText="No users found"
                    showPageSizeOptions={false}
                    columns={[
                        {
                            Header: "",
                            id: "profilePic",
                            //accessor: d => {console.log(d.user_name); return d.user_name;}
                            sortable: false,
                            Cell: row => 
                                {
                                //console.log(row);
                                    let rowData = row.original;
                                    return <p>rowData[profile]</p>
                                }
                        },
                        {
                            Header: "Name",
                            id: "name",
                            sortable: false,
                            accessor: (d) => d["name"]
                        },
                        {
                            Header: "Email",
                            id: "email",
                            sortable: false,
                            accessor: (d) => d["email"]
                        },
                        {
                            Header: "Status",
                            id: "status",
                            sortable: false,
                            accessor: (d) => d["status"],
                            //Cell: row => <p>row.original[whatever]</p>
                        },
                        {
                            Header: "Actions",
                            id: "actions",
                            sortable: false,
                            Cell: row => <p>{row["actions"]}</p>
                        }
                    ]}
                    defaultPageSize={10}
                    resizable={false}
                    pageText={""}
                    previousText={"‹"}
                    nextText={"›"}
                />
    )
}

export default TableWrapper;