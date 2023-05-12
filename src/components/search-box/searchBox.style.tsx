import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 8px;
  width: 200px;
  height: 32px;
  position: relative;

  input[type="search"] {
    flex: 1;
    border: none;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 16px;
    width: calc(100% - 24px);
    box-sizing: border-box;
    font-family: "Sedgwick Ave Display", cursive;
  }
`;
