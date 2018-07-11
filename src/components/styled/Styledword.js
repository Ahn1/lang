import styled from "styled-components";

export default styled.div`
  margin-top: 5px;
  font-size: 1.4em;
  cursor: pointer;
  padding: 10px 15px;
  background-color: #dcf7cf;
  :nth-of-type(2n) {
    background-color: #9fe080;
  }
  &.active {
    background-color: #ffde92;
  }
  > .tl {
    font-weight: bold;
  }

`;
