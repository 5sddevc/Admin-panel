import React from "react";
import ReactTable from "react-table";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import "react-table/react-table.css";
import styled from "styled-components";
import Style from "./Style"

const StyledTable = styled(ReactTable)`
    ${Style}
`;


//Have to implement sorting, avatars, actions and column sizes through props
const TableWrapper = props => {
  //console.log("ALALALA", props.content[0].render())
  return (
    <StyledTable
      data={props.data}
      noDataText="No users found"
      showPageSizeOptions={false}
      columns={
        //[
        props.content.map((val) => (
        {
          Header: val.sortable ? ( 
            <div style={{display: "flex", alignItems: "center", flexGrow: 1}}>
              <div className="sortingHeader" style={{display: "flex", fontSize: "1.3rem", flexDirection: "column", marginRight: 10}}>
                <div className="ascending"><FiChevronUp /></div>
                <div className="descending"><FiChevronDown /></div>
              </div>
              {val.name}
            </div>
            ) : val.name,
          id: val.id,
          //accessor: d => {console.log(d.user_name); return d.user_name;}
          sortable: val.sortable || false,
          Cell: val.render ? val.render : (r) => r.original[val.id]
        }))}
      //   {
      //     Header: "Name",
      //     id: "name",
      //     sortable: false,
      //     accessor: (d) => d["username"]
      //   },
      //   {
      //     Header: "Email",
      //     id: "email",
      //     sortable: false,
      //     accessor: (d) => d["email"]
      //   },
      //   {
      //     Header: "Status",
      //     id: "status",
      //     sortable: false,
      //     accessor: (d) => d["status"],
      //     //Cell: row => <p>row.original[whatever]</p>
      //   },
      //   {
      //     Header: "Actions",
      //     id: "actions",
      //     sortable: false,
      //     Cell: row => <p>{row.original["actions"]}</p>
      //   }
      // ]}
      defaultPageSize={10}
      resizable={false}
      pageText={""}
      previousText={"‹"}
      nextText={"›"}
      {...props}
    />
  )
}

export default TableWrapper;