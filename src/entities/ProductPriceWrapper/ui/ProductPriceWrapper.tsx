import { ProductPrice } from "../../../shared"
import SProductPriceWrapper from "./styles/SProductPriceWrapper.styled"
import { ProductPriceInterface } from "../../../shared/ProductPrice/ui/ProductPrice"


const ProductPriceWrapper = ({ price }: ProductPriceInterface) => {
    return (
        <SProductPriceWrapper>
            <ProductPrice price={`${price}$`} />
        </SProductPriceWrapper>
    )
}

export default ProductPriceWrapper;