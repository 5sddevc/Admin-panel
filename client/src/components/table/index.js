import React from "react"
import { Table, Divider, Tag } from 'antd';
import styled from "styled-components";

const StyledTable = styled(Table)`
  && td {
    border-left: 1px solid ${props => props.theme[props.theme.mode].border};
    border-bottom: 1px solid ${props => props.theme[props.theme.mode].border};
  }

  && td:last-child {
    border-right: 1px solid ${props => props.theme[props.theme.mode].border};
  }

  && th {
    background: ${props => props.theme[props.theme.mode].background.tertiary};
    border-left: 1px solid ${props => props.theme[props.theme.mode].border};
    border-top: 1px solid ${props => props.theme[props.theme.mode].border};
    border-bottom: 1px solid ${props => props.theme[props.theme.mode].border};
  }

  && th:last-child {
    border-right: 1px solid ${props => props.theme[props.theme.mode].border};
  }

  && th.ant-table-column-has-sorters:hover:nth-child(n), th.ant-table-column-has-filters:nth-child(n) i:hover:nth-child(n) {
    background: ${props => props.theme[props.theme.mode].primary.light};
  }

  && th.ant-table-column-sort:nth-child(n), th.ant-table-column-has-filters:nth-child(n) i:active:nth-child(n) {
    background: ${props => props.theme[props.theme.mode].primary.light};
  }

  && tbody tr:hover:nth-child(n) td {
    background: ${props => props.theme[props.theme.mode].primary.light};
  }

  && .ant-pagination li, .ant-pagination a {
    background: ${props => props.theme[props.theme.mode].background.tertiary};
  }

  && .ant-pagination li a {
    border-radius: 4px;
    transition: background 0s;
  }

  && .ant-pagination li.ant-pagination-item:not(.ant-pagination-item-active) a {
    color: ${props => props.theme[props.theme.mode].textColor.primary};
  }

  && .ant-pagination li.ant-pagination-item:not(.ant-pagination-item-active) {
    border: 1px solid ${props => props.theme[props.theme.mode].border};
  }

  && .ant-pagination li.ant-pagination-prev a, .ant-pagination li.ant-pagination-next a {
    color: ${props => props.theme[props.theme.mode].textColor.primary};
    border: 1px solid ${props => props.theme[props.theme.mode].border};
  } 
`;

const TableWrapper =(props)=>{
  return(<StyledTable {...props}></StyledTable>);
}
export default TableWrapper;


