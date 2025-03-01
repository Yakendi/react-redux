import SProductCardEntity from "./styles/SProductCardEntity.styled";
import { ProductModel } from "../model/ProductModel";
import { ProductImageWrapper } from "../ProductImageWrapper"
import { ProductInfoWrapper } from "../ProductInfoWrapper";
import { ProductPriceWrapper } from "../ProductPriceWrapper";

interface ProductCardInterface {
    product: ProductModel
};

const ProductCardEntity = ({ product }: ProductCardInterface) => {
    return (
        <SProductCardEntity>
            <ProductImageWrapper src={product.image} alt={product.title}/>
            <ProductInfoWrapper title={product.title} description={product.description}/>
            <ProductPriceWrapper price={product.price}/>
        </SProductCardEntity>
    );
};

export default ProductCardEntity;