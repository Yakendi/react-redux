import SCreateProductModalWidget from "./styles/SCreateProductModalWidget.styled"
import useForm from "../../../features/useForm";
import useSubmit from "../../../features/useSubmit";
import { Modal } from "../../../entities/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ModalWidget = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const { title, description, validate, resetForm, titleError, onChangeTitle, onChangeDescription } = useForm();
  const { handleSubmit, closeModal } = useSubmit({ title, description, validate, resetForm});

console.log(isOpen)
    return (
        <SCreateProductModalWidget>
            <Modal hidden={isOpen} 
            titleValue={title} 
            descriptionValue={description}
            onClose={closeModal}
            onSubmit={handleSubmit}
            onChangeTitle={onChangeTitle}
            onChangeDescription={onChangeDescription}
            error={titleError} />
        </SCreateProductModalWidget>
    )
}

export default ModalWidget;