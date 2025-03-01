import SProductPrice from "./styles/SProductPrice.styled"

export interface ProductPriceInterface {
    price: string;
}

const ProductPrice = ({ price }: ProductPriceInterface) => {
    return (
        <SProductPrice> 
            { price } 
        </SProductPrice>
    )
};

export default ProductPrice;