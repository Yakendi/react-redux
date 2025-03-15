import SProductCardWidget from "./styles/SProductCardWidget.styled";
import { ProductCardListEntity } from "../../../entities";
import useProducts from "../../../shared/lib/hooks/useProducts.hook";
import { ErrorContainer } from "../../../entities/ErrorContainerEntity";
import { LoadingSpinner } from "../../../entities/LoadingSpinnerEntity";
import { CreateProductButton } from "../../../shared/CreateProductButton";

const ProductCardWidget = () => {
    const { items, status, error } = useProducts();

    if (status === "loading") return <LoadingSpinner />;
    if (error) return <ErrorContainer errorText={error} />;

    return (
        <SProductCardWidget>
            {items?.map((item) => (
                <ProductCardListEntity key={item.id} product={item} />
            ))}
            <CreateProductButton />
        </SProductCardWidget>
    );
};

export default ProductCardWidget;