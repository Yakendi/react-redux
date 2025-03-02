import SProductCardWidget from "./styles/SProductCardWidget.styled";
import { ProductCardEntity } from "../../../entities";
import useProducts from "../../../shared/lib/hooks/useProducts.hook";
import { ErrorContainer } from "../../../entities/ErrorContainerEntity";

const ProductCardWidget = () => {
    const { products, error } = useProducts();

    if (error) {
        return (
            <ErrorContainer errorText={error} />
        )
    }

    return (
        <SProductCardWidget>
            {products.map((product) => (
                <ProductCardEntity key={product.id} product={product} />
            ))}
        </SProductCardWidget>
    );
};

export default ProductCardWidget;