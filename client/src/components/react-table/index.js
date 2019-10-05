import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import "react-table/react-table.css";
import styled from "styled-components";
import Style from "./Style"
import { DEFAULT_TABLE_PAGE_SIZE } from "../../configurations/Constants"

const StyledTable = styled(ReactTable)`
    ${Style}
`;


//Have to implement large column sizes, could store table data locally too
const TableWrapper = props => {
  const [pageSize, setPageSize] = useState(props.pageSize || DEFAULT_TABLE_PAGE_SIZE);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(props.tableData ? Math.ceil(props.tableData.length/pageSize) - 
  0 : //1 : 
  0);//0);
  //const [dataCount, setDataCount] = useState(props.dataCount ? props.dataCount : props.dataCount === 0 ? props.dataCount : props.tableData.length);
  let dataCount = props.dataCount !== undefined && props.dataCount !== null ? props.dataCount : props.tableData ? props.tableData.length > 0 ? props.tableData.length : 1 : 1;
  const [pages, setPages] = useState(Math.ceil(dataCount/pageSize));
  const [minRows, setMinRows] = useState(dataCount % pageSize || pageSize);
    //dataCount > pageSize ? pageSize : dataCount < 1 ? 1 : dataCount);
  const [loading, setLoading] = useState(false);

  //console.log("TABLE", page, lastPage, pageSize, minRows);
  console.log("TABLE", page, lastPage, minRows, props);

  useEffect(() => {
    console.log("HERE")
    let isData = props.tableData ? props.tableData.length > 0 : false;

    setPages(Math.ceil(dataCount/pageSize));//A seperate effect can be made for this and it should happen here only if !prop.getData

    if(props.getData && isData) {
      console.log("HERE TOO", Math.ceil(props.tableData.length/pageSize) - 0)
      setLastPage(props.tableData ? Math.ceil(props.tableData.length/pageSize) - 
      0 : //1 : 
      0);
      setMinRows(dataCount % pageSize || pageSize);//This can be done with modulus and possibly moved outside the if
    }
    
    if(props.enableReInit) {//In case, table needs to be reset on new data, Could be replaced with enableReinitialize prop - done
      if((props.getData && !isData) || !props.getData) {
        console.log("HERE THREE!")
        setPage(0);
        setLastPage(0);//Probably only when props.getData
        setMinRows(dataCount % pageSize || pageSize);//Should minRows be reset here for the first page? I think so. Probably only when !props.getData
      }
    }
  }, [props.tableData]);

  useEffect(() => {
    if(((page === 0 && lastPage === 0) || page > lastPage) && (props.getData)) {
      setLoading(true);
      setLastPage(page);//May not be neccessary here
      //will pass callback into action which will be called in saga after data is fetched, api params will also be passed here
      props.getData(12 ,51, 12, 23, (res) => {
        setLoading(false);
      });
    }
  }, [page]);

  //console.log("ALALALA", props)
  return (
    <StyledTable
    {...props}
    data={props.tableData || []}
    noDataText="No data found"
    showPageSizeOptions={false}
    loading={loading}
    columns={
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
        sortable: val.sortable || false,
        Cell: val.render ? val.render : (r) => r.original[val.id]
      }))}
    defaultPageSize={DEFAULT_TABLE_PAGE_SIZE}
    page={page}
    pageSize={pageSize}
    pages={pages}
    onPageChange={(nextPage) => { 
      if(nextPage <= lastPage || !props.getData) {
        let rowsToShow = dataCount - ((nextPage) * pageSize);
        setMinRows(rowsToShow > pageSize ? pageSize : rowsToShow < 1 ? 1 : rowsToShow);//Less than one check may not be necessary
      }
      setPage(nextPage);
    }}
    minRows={props.adjustRows === false ? pageSize : minRows }
    resizable={false}
    pageText={""}
    previousText={"‹"}
    nextText={"›"}
    />
  )
}

export default TableWrapper;