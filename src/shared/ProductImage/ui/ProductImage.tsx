import SProductImage from "./styles/SProductImage.styled"

export interface ProductImageInterface {
    src: string;
    alt: string;
}
const ProductImage = ({ src, alt }: ProductImageInterface) => {
    return (
        <SProductImage src={src} alt={alt}/>
    );
}

export default ProductImage;