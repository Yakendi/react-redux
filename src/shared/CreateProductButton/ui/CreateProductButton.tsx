import SCreateProductButton from "./styles/SCreateProductButton.styled"

const CreateProductButton = ({onClick}: {onClick: () => void}) => {
    return (
        <SCreateProductButton onClick={onClick}/>
    )
};

export default CreateProductButton;