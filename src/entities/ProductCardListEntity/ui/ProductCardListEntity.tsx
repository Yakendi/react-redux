import SProductCardListEntity from "./styles/SProductCardListEntity.styled";
import { ProductImageWrapper } from "../../ProductImageWrapper"
import { ProductInfoWrapper } from "../../ProductInfoWrapper";
import { ProductPriceWrapper } from "../../ProductPriceWrapper";
import { ProductModel } from "../../../model/ProductModel";

interface ProductCardListInterface {
    product: ProductModel & {shortDescription: string};
    isExpanded: boolean;
    toggleExpanded: (id: number) => void;
}

const ProductCardListEntity = ({ product, isExpanded, toggleExpanded }: ProductCardListInterface) => {
    
    return (
        <SProductCardListEntity>
            <ProductImageWrapper src={product.image} alt={product.title} />
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