import Add from "./components/Add"
import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import UpdateModal from "./components/UpdateModal"
import ContextProvider from "./context/Context"

function App() {
  return (
    <ContextProvider className="wrapper">
      <Navbar />
      <Notes />
      <Add />
      <Modal />
      <UpdateModal />
    </ContextProvider>
  )
}

export default App