import {
  SModal,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalTitle,
  ModalForm,
  ModalTitleInput,
  ModalDescriptionInput,
  ModalSubmitButton,
} from "./styles/SModal.styled";

interface ModalInterface {
  hidden: boolean;
  titleValue: string;
  descriptionValue: string;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string;
}

const Modal = ({ hidden, titleValue, descriptionValue, onClose, onSubmit, onChangeTitle, onChangeDescription, error }: ModalInterface) => {
  return (
    <SModal hidden={hidden} onClick={onClose}>

      <ModalContent onClick={(e) => e.stopPropagation()}>

        <ModalHeader>
          <ModalTitle>Create Product</ModalTitle>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>

        <ModalForm id="modal-form" onSubmit={onSubmit}>
          {error && <span style={{color: "red"}}>{error}</span>}
          <ModalTitleInput id="modal-title" value={titleValue} placeholder="Product Title" onChange={onChangeTitle}/>
          <ModalDescriptionInput id="modal-description" value={descriptionValue} placeholder="Product Description" onChange={onChangeDescription}/>
          <ModalSubmitButton type="submit">Submit</ModalSubmitButton>
        </ModalForm>

      </ModalContent>
      
    </SModal>
  );
};

export default Modal;
