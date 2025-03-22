import { useState } from "react";

const useForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setTitleError("");
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const validate = () => {
    if (!title.trim()) {
      setTitleError("Title is required");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setTitleError("");
  };

  return {
    title,
    description,
    titleError,
    onChangeTitle,
    onChangeDescription,
    validate,
    resetForm,
  };
};

export default useForm;