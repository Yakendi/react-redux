import SProductCardListEntity from "./styles/SProductCardListEntity.styled";
import { ProductImageWrapper } from "../../ProductImageWrapper"
import { ProductInfoWrapper } from "../../ProductInfoWrapper";
import { ProductPriceWrapper } from "../../ProductPriceWrapper";
import { ProductModel } from "../../../model/ProductModel";

interface ProductCardListInterface {
    onClick: () => void;
    product: ProductModel & {shortDescription: string};
    isExpanded: boolean;
    toggleExpanded: (id: number) => void;
}

const ProductCardListEntity = ({ onClick, product, isExpanded, toggleExpanded }: ProductCardListInterface) => {
    console.log(1)
    return (
        <SProductCardListEntity onClick={onClick}>
            <ProductImageWrapper src={product.image ? product.image : "/images/placeholder.jpg"} alt={product.title} />
            <ProductInfoWrapper 
                title={product.title} 
                description={isExpanded ? product.description : product.shortDescription}
                product={product}
                isExpanded={isExpanded}
                toggleExpanded={toggleExpanded}
            />
            <ProductPriceWrapper price={product.price} />
        </SProductCardListEntity>
    );
};

export default ProductCardListEntity;