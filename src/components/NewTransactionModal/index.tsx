import Modal from "react-modal";

export interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
 return (
    <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        >
          <h2>Cadastrar transactions</h2>
        </Modal>
 )
}