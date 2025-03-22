import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import createProductThunk from "../redux/createProduct/createProductAsyncThunk";

interface UseSubmitInterface {
  title: string;
  description: string;
  validate: () => boolean;
  resetForm: () => void;
  hideModal: () => void;
}

const useSubmit = ({title, description, validate, resetForm, hideModal}: UseSubmitInterface) => {
  const dispatch = useDispatch<AppDispatch>();

  const closeModal = () => {
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

  return { handleSubmit, closeModal };
};

export default useSubmit;