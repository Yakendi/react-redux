import SImageWrapper from "./styles/SProductImageWrapper.styled";
import { ProductImage } from "../../../../shared/ProductImage/index";
import { ProductImageInterface } from "../../../../shared/ProductImage/ui/ProductImage";

const ProductImageWrapper = ({ src, alt }: ProductImageInterface) => {
    return (
        <SImageWrapper>
            <ProductImage src={src} alt={alt} />
        </SImageWrapper>
    );
}

export default ProductImageWrapper;