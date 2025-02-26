import SProductPrice from "./styles/SProductPrice.styled"

interface ProductPriceInterface {
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