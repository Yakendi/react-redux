import styled from "styled-components";

const SCreateProductButton = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  right: 30px;
  bottom: 30px;
  background: url("/images/plus.svg") center/cover no-repeat;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.07);
  }
`;

export default SCreateProductButton;
