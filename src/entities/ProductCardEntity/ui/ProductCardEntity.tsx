import { ProductDescription, ProductImage, ProductTitle, ProductPrice } from "../../../shared";
import SProductCardEntity from "./styles/SProductCardEntity.styled";

const ProductCardEntity = () => {
    return (
        <SProductCardEntity>
            <ProductImage />
            <ProductTitle />
            <ProductDescription />
            <ProductPrice />
        </SProductCardEntity>
    );
};

export default ProductCardEntity;