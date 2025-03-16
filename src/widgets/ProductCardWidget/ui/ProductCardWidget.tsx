import SProductCardWidget from "./styles/SProductCardWidget.styled";
import { ProductCardListEntity } from "../../../entities";
import useProducts from "../../../shared/lib/hooks/useProducts.hook";
import { useDescription } from "../../../features/useDescription";
import { ErrorContainer } from "../../../entities/ErrorContainerEntity";
import { LoadingSpinner } from "../../../entities/LoadingSpinnerEntity";
import { CreateProductButton } from "../../../shared/CreateProductButton";

const ProductCardWidget = () => {
    const { items, status, error } = useProducts();
    const { modifiedItems, expandedItems, toggleExpanded } = useDescription(items);

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
            <CreateProductButton />
        </SProductCardWidget>
    );
};

export default ProductCardWidget;