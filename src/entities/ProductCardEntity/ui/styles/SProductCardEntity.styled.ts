import styled from "styled-components";

const SProductCardEntity = styled.li`
    position: relative;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    column-gap: 20px;

    :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 40%;
    height: 1px;
    background-color: black;
    transform: translateX(-50%);
  }
`;

export default SProductCardEntity;