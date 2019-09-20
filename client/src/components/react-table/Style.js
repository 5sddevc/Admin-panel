import { css } from "styled-components"

const style = css`
//Should make global variables in theme for row height, box-shadows, borders and others, also have to take into account sorting through simple props
& {
    width: 100%;
    overflow: auto;
    border: none !important;
    border-radius: 15px;
    box-shadow: 0 2px 32px -10px rgba(0,0,0,0.15) !important;
}

.rt-table {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

//min-width will depend on number of columns and their widths
.rt-thead {
    min-width: 500px !important;
    font-weight: bold;
    font-size: 1.1rem;
    position: relative;
    /* z-index: 100; */
    box-shadow: none !important;
}

.rt-th {
    word-break: initial !important;
}

//Row height must be read from theme
.rt-tr {
    background-color: white;
    height: 65px;
}

.rt-th, .rt-td {
    display: flex;
    align-items: center;
    white-space: normal !important;
    word-break: break-all;
    padding: 10px !important;
    border: none !important;
}




//The following should be app-specific as well

.rt-th:first-child, .rt-td:first-child {
    flex: 30 0 auto !important;
    justify-content: center;
}

// .rt-th:last-child, .rt-td:last-child {
//     min-width: 150px !important;
// }

.rt-tbody {
    min-width: 500px !important;
    background-color: rgb(249, 249, 249, 1);
}

// .rt-tr-group {
//     border: none !important;
//     margin-bottom: 5px;
// }

.rt-tr-group:last-child {
    margin-bottom: 0px;
}






.pagination-bottom {
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}

.-pagination {
    height: 65px !important;
    justify-content: center !important;
    align-items: center !important;
    border: none !important;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    box-shadow: none !important;
    background-color: ${props => props.theme[props.theme.mode].background.primary};
}

.-previous, .-center, .-next {
    flex: unset !important;
}

.-previous button, .-next button {
    display: inline-flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 40px !important;
    width: 40px !important;
    font-size: 1.1rem !important;
    line-height: 0 !important;
    text-align: center !important;
    color: ${props => props.theme["dark"].textColor.primary} !important;
    padding: 0 !important;
    border-radius: 30px !important;
    background-color: ${props => props.theme[props.theme.mode].primary.main} !important;
}

.-center input {
    height: 40px !important;
    width: 60px !important;
    padding: 0 !important;
    background: ${props => props.theme[props.theme.mode].background.primary} !important;
    color: ${props => props.theme[props.theme.mode].textColor.primary} !important;
    margin: 0 !important;
    border: 1px solid ${props => props.theme[props.theme.mode].primary.main} !important;
    border-radius: 30px !important;
}

.-center input[type='number'] {
    -moz-appearance:textfield;
}

.-center input::-webkit-outer-spin-button, .-center input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;

export default style;