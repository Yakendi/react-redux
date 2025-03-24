import { ProductImageWrapper } from "../../../entities/ProductImageWrapper";
import useSingleProduct from "../../../features/useSingleProduct";
import { ProductDescription, ProductTitle, ProductPrice } from "../../../shared";
import SSingleCardWidget from "./styles/SSingleCardWidget.styled"

const SingleCardWidget = () => {
    const { item } = useSingleProduct()
    
    return (
        <SSingleCardWidget>
            <ProductImageWrapper src={item.image} alt={item.title} />
            <ProductTitle title={item.title} />
            <ProductDescription description={item.description} />
            <ProductPrice price={item.price} />
        </SSingleCardWidget>
    )
};

export default SingleCardWidget;