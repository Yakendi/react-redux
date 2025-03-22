import SProductCardWidget from "./styles/SProductCardWidget.styled";
import { ProductCardListEntity } from "../../../entities";
import { useDescription } from "../../../features/useDescription";
import { ErrorContainer } from "../../../entities/ErrorContainerEntity";
import { LoadingSpinner } from "../../../entities/LoadingSpinnerEntity";
import { CreateProductButton } from "../../../shared/CreateProductButton";
import { Modal } from "../../../entities/Modal";
import useProducts from "../../../shared/lib/hooks/useProducts";
import useSubmit from "../../../features/useSubmit";
import useForm from "../../../features/useForm";
import useModal from "../../../features/useModal";
import { getSingleProductByID } from "../../../services/getProducts";

const ProductCardWidget = () => {
  const { items, status, error } = useProducts();
  const { modifiedItems, expandedItems, toggleExpanded } = useDescription(items);
  const { title, description, validate, resetForm, titleError, onChangeTitle, onChangeDescription } = useForm();
  const { isActive, showModal, hideModal } = useModal();
  const { handleSubmit, closeModal} = useSubmit({ title, description, validate, resetForm, hideModal});

  if (status === "loading") return <LoadingSpinner />;
  if (error) return <ErrorContainer errorText={error} />;

  return (
    <SProductCardWidget>
      {modifiedItems.map((item) => (
        <ProductCardListEntity
          key={item.id}
          onClick={() => getSingleProductByID(item.id)}
          product={item}
          isExpanded={expandedItems[item.id] || false}
          toggleExpanded={toggleExpanded}
        />
      ))}
      <CreateProductButton onClick={showModal} />
      <Modal
        hidden={isActive}
        titleValue={title}
        descriptionValue={description}
        onClose={closeModal}
        onSubmit={handleSubmit}
        onChangeTitle={onChangeTitle}
        onChangeDescription={onChangeDescription}
        error={titleError}
      />
    </SProductCardWidget>
  );
};

export default ProductCardWidget;
