import styled from "styled-components";

const SLoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  margin: auto;
  border: 4px solid lightgray;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default SLoadingSpinner;
