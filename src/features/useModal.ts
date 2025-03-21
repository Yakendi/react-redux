import { useState } from "react";

const useModal = () => {
    const [isActive, setIsActive] = useState(false);

    const showModal = () => setIsActive(true);
    
    const hideModal = () => setIsActive(false);

    return { isActive, showModal, hideModal };
}

export default useModal;