import { ProductDescription, ProductTitle } from "../../../shared";
import SProductInfoWrapper from "./styles/SProductInfoWrapper.styled";
import { ProductModel } from "../../../model/ProductModel";

interface ProductInfoWrapperInterface {
    title: string;
    description: string;
    product: ProductModel;
    isExpanded: boolean;
    toggleExpanded: (id: number) => void;
}

const ProductInfoWrapper = ({ title, description, product, isExpanded, toggleExpanded }: ProductInfoWrapperInterface) => {
    return (
        <SProductInfoWrapper>
            <ProductTitle title={title} />
            <ProductDescription description={description} />
            {product.description.length > 150 && (
                <button style={{ backgroundColor: "lightGray", padding: "6px", borderRadius: "4px", fontSize: "12px" }} onClick={() => toggleExpanded(product.id)}>
                    {isExpanded ? "Hide Details" : "Show Details"}
                </button>
            )}
        </SProductInfoWrapper>
    );
}

export default ProductInfoWrapper;