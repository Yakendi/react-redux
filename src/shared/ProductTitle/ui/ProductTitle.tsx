import SProductTitle from "./styles/SProductTitle.styled";

export interface ProductTitleInterface {    
    title: string;
}

const ProductTitle = ({ title }: ProductTitleInterface) => {
    return (
        <SProductTitle>
            { title }
        </SProductTitle>
    );
};

export default ProductTitle;