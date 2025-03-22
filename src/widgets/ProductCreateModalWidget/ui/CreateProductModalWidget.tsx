import SCreateProductModalWidget from "./styles/SCreateProductModalWidget.styled"
import useForm from "../../../features/useForm";
import useModal from "../../../features/useModal";
import useSubmit from "../../../features/useSubmit";
import { Modal } from "../../../entities/Modal";

const CreateProductModalWidget = () => {
  const { title, description, validate, resetForm, titleError, onChangeTitle, onChangeDescription } = useForm();
  const { isActive, hideModal } = useModal();
  const { handleSubmit, closeModal} = useSubmit({ title, description, validate, resetForm, hideModal});

    return (
        <SCreateProductModalWidget>
            <Modal hidden={!isActive} 
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

export default CreateProductModalWidget;