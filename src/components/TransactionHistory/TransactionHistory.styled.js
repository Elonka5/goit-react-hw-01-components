import styled from 'styled-components';

export const StyledHistoryTable = styled.table`
  width: 25%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;
  margin: 20px auto;
  padding: 10px;
  table-layout: fixed;
  font-size: 14px;
  line-height: 50px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  box-shadow: 7px 7px 11px 0px rgba(0, 0, 0, 0.75);

  & thead {
    background-color: #0163a0;
    border: 2px solid #ecfdff;
  }

  & td {
    border: 2px solid #ecfdff;
  }

  & tr:nth-child(even) {
    background-color: #f0f0f0;
  }
`;
