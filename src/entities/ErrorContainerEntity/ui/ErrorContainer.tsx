import SErrorContainer from "./styles/SErrorContainer.styled";

const ErrorContainer = ({errorText}: {errorText: string}) => {
    return (
        <SErrorContainer>
            { errorText }
        </SErrorContainer>
    );
}

export default ErrorContainer;