import SProductCardListEntity from "./styles/SProductCardListEntity.styled";
import { ProductImageWrapper } from "../../ProductImageWrapper"
import { ProductInfoWrapper } from "../../ProductInfoWrapper";
import { ProductPriceWrapper } from "../../ProductPriceWrapper";
import { ProductCardInterface } from "../../../model/ProductModel";

const ProductCardListEntity = ({ product }: ProductCardInterface) => {
    return (
        <SProductCardListEntity>
            <ProductImageWrapper src={product.image} alt={product.title}/>
            <ProductInfoWrapper title={product.title} description={product.description}/>
            <ProductPriceWrapper price={product.price}/>
        </SProductCardListEntity>
    );
};

export default ProductCardListEntity;