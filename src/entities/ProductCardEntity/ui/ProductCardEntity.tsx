import { ProductDescription, ProductImage, ProductTitle, ProductPrice } from "../../../shared";
import SProductCardEntity from "./styles/SProductCardEntity.styled";
import { ProductModel } from "../model/ProductModel";

interface ProductCardInterface {
    product: ProductModel
};

const ProductCardEntity = ({ product }: ProductCardInterface) => {
    return (
        <SProductCardEntity>
            <ProductImage src={product.image} alt={product.title}/>
            <ProductTitle title={product.title}/>
            <ProductDescription description={product.description}/>
            <ProductPrice price={product.price}/>
        </SProductCardEntity>
    );
};

export default ProductCardEntity;