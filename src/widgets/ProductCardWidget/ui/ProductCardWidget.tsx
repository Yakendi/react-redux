import SProductCardWidget from "./styles/SProductCardWidget.styled";
import { ProductCardListEntity } from "../../../entities";
import useProducts from "../../../shared/lib/hooks/useProducts.hook";
import { ErrorContainer } from "../../../entities/ErrorContainerEntity";
import { LoadingSpinner } from "../../../entities/LoadingSpinnerEntity";
import { CreateProductButton } from "../../../shared/CreateProductButton";

const ProductCardWidget = () => {
    const { products, error } = useProducts();
		
    if (error) {
        return (
            <ErrorContainer errorText={error} />
        )
    }

    if (!products) {
        return (
            <LoadingSpinner />
        )
    }

    return (
        <SProductCardWidget>
            {products.map((product) => (
                <ProductCardListEntity key={product.id} product={product} />
            ))}
            <CreateProductButton />
        </SProductCardWidget>
    );
};

export default ProductCardWidget;