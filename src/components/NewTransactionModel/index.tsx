import Modal from "react-modal";

interface NewTransactionModelProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModelProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Criar Transação</h2>
        </Modal>
    )
}