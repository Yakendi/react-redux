import { ProductImageWrapper } from "../../ProductImageWrapper";
import { ProductInfoWrapper } from "../../ProductInfoWrapper";
import { ProductPriceWrapper } from "../../ProductPriceWrapper";
import SProductCard from "./styles/SProductCardEntity.styled"
import { ProductCardInterface } from "../../../model/ProductModel";

const ProductCardEntity = ({ product }: ProductCardInterface) => {
    return (
        <SProductCard>
            <ProductImageWrapper src={product.image} alt={product.title}/>
            <ProductInfoWrapper title={product.title} description={product.description}/>
            <ProductPriceWrapper price={product.price}/>
        </SProductCard>
    )
}

export default ProductCardEntity;