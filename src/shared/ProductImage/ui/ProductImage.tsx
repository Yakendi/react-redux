import SProductImage from "./styles/SProductImage.styled"

interface ProductImageInterface {
    src: string;
    alt: string;
}
const ProductImage = ({ src, alt }: ProductImageInterface) => {
    return (
        <SProductImage src={src} alt={alt}/>
    );
}

export default ProductImage;