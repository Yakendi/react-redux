import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import createProductThunk from "../redux/createProduct/createProductAsyncThunk";
import useForm from "./useForm";
import useModal from "./useModal";

const useSubmit = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { title, description, titleError, onChangeTitle, onChangeDescription, validate, resetForm } = useForm();
  const { isActive, showModal, hideModal: closeModal } = useModal();

  const hideModal = () => {
    resetForm();
    closeModal();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    const newProduct = { title, description };
    await dispatch(createProductThunk(newProduct));

    hideModal();
  };

  return {
    title,
    description,
    titleError,
    onChangeTitle,
    onChangeDescription,
    handleSubmit,
    isActive,
    showModal,
    hideModal,
  };
};

export default useSubmit;