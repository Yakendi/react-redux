import SProductDescription from "./styles/SProductDescription.styled";

interface ProductDescriptionInterface {
    description: string;
}

const ProductDescription = ({ description }: ProductDescriptionInterface) => {
    return (
        <SProductDescription>
            { description }
        </SProductDescription>
    );
};

export default ProductDescription;