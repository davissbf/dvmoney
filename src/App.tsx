import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import {useState} from "react";
import {NewTransactionModal} from "./components/NewTransactionModel";

Modal.setAppElement('#root')

export function App() {
    const [isNewTransactionModelOpen, setIsNewTransactionModelOpen] = useState(false);

    function handleOpenNewTrasactionModel() {
        setIsNewTransactionModelOpen(true)
    }

    function handleCloseNewTrasactionModel() {
        setIsNewTransactionModelOpen(false)
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModel}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModelOpen}
        onRequestClose={handleCloseNewTrasactionModel}
      />
      <GlobalStyle />
    </>
  );
}
