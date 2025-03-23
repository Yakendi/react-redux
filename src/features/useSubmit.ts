import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import createProductThunk from "../redux/createProduct/createProductAsyncThunk";
import { hideModal } from "../redux/modal/createModalSlice";

interface UseSubmitInterface {
  title: string;
  description: string;
  validate: () => boolean;
  resetForm: () => void;
}

const useSubmit = ({title, description, validate, resetForm}: UseSubmitInterface) => {
  const dispatch = useDispatch<AppDispatch>();

  const closeModal = () => {
    resetForm();
    dispatch(hideModal());
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    const newProduct = { title, description };
    await dispatch(createProductThunk(newProduct));

    closeModal();
  };

  return { handleSubmit, closeModal };
};

export default useSubmit;