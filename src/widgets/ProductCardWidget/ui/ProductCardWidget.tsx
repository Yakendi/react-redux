import SProductCardWidget from "./styles/SProductCardWidget.styled";
import { ProductCardListEntity } from "../../../entities";
import { useDescription } from "../../../features/useDescription";
import { ErrorContainer } from "../../../entities/ErrorContainerEntity";
import { LoadingSpinner } from "../../../entities/LoadingSpinnerEntity";
import { CreateProductButton } from "../../../shared/CreateProductButton";
import useProducts from "../../../shared/lib/hooks/useProducts";
import { getSingleProductByID } from "../../../services/getProducts";
import { ModalWidget } from "../../ModalWidget";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { showModal } from "../../../redux/modal/createModalSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";


const ProductCardWidget = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const { items, status, error } = useProducts();
  const { modifiedItems, expandedItems, toggleExpanded } = useDescription(items);

  if (status === "loading") return <LoadingSpinner />;
  if (error) return <ErrorContainer errorText={error} />;
  
  const renderProductList = () =>
    modifiedItems.map((item) => (
      <ProductCardListEntity
        key={item.id}
        onClick={() => getSingleProductByID(item.id)}
        product={item}
        isExpanded={expandedItems[item.id] || false}
        toggleExpanded={toggleExpanded}
      />
    ));

  return (
    <SProductCardWidget>
      {renderProductList()}
      <CreateProductButton onClick={() => dispatch(showModal("showModal"))} />
      {isOpen && <ModalWidget />}
    </SProductCardWidget>
  );
};

export default ProductCardWidget;
