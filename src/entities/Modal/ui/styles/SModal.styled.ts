import styled from "styled-components";

export const SModal = styled.div<{ hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ hidden }) => (hidden ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 40%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
`;

export const ModalCloseButton = styled.button`
  background-image: url("/images/x.svg");
  background-size: cover;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ModalTitleInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
`;

export const ModalDescriptionInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  resize: none;
`;

export const ModalSubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;
    transition: all 0.3s ease;
  }
`;