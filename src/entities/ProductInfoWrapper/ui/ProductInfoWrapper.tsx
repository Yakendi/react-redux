import { ProductDescription, ProductTitle } from "../../../shared";
import SProductInfo from "./styles/SProductInfo.styled";

interface ProductInfoWrapperInterface {
    title: string;
    description: string;
}

const ProductInfoWrapper = ({ title, description }: ProductInfoWrapperInterface) => {
    return (
        <SProductInfo>
            <ProductTitle title={title} />
            <ProductDescription description={description} />
        </SProductInfo>
    );
}

export default ProductInfoWrapper;