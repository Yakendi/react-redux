import SProductCardWidget from "./styles/SProductCardWidget.styled";
import { ProductCardListEntity } from "../../../entities";
import { useDescription } from "../../../features/useDescription";
import { ErrorContainer } from "../../../entities/ErrorContainerEntity";
import { LoadingSpinner } from "../../../entities/LoadingSpinnerEntity";
import { CreateProductButton } from "../../../shared/CreateProductButton";
import { Modal } from "../../../entities/Modal";
import useProducts from "../../../shared/lib/hooks/useProducts.hook";
import useSubmit from "../../../features/useSubmit";

const ProductCardWidget = () => {
  const { items, status, error } = useProducts();
  const { modifiedItems, expandedItems, toggleExpanded } =
    useDescription(items);
  const {
    title,
    description,
    handleSubmit,
    onChangeTitle,
    onChangeDescription,
    titleError,
    isActive,
    showModal,
    hideModal,
  } = useSubmit();

  if (status === "loading") return <LoadingSpinner />;
  if (error) return <ErrorContainer errorText={error} />;

  return (
    <SProductCardWidget>
      {modifiedItems.map((item) => (
        <ProductCardListEntity
          key={item.id}
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
        onClose={hideModal}
        onSubmit={handleSubmit}
        onChangeTitle={onChangeTitle}
        onChangeDescription={onChangeDescription}
        error={titleError}
      />
    </SProductCardWidget>
  );
};

export default ProductCardWidget;
