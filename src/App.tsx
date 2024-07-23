import './App.css'
import {Route, Routes} from "react-router-dom";
import Toolbar from "./compontents/Toolbar/Toolbar";
import NewContact from "./containers/NewConctact/NewContact";
import ContactList from "./compontents/ContactList/ContactList";
import EditContact from "./containers/EditContact/EditContact";


const App = () => {

  return (
      <>
          <header>
              <Toolbar/>
          </header>
          <main className='container container-main bg-secondary pt-5'>
              <Routes>
                  <Route path="/" element={<ContactList/>}/>
                  <Route path="/new-contact" element={<NewContact/>}/>
                  <Route path="/edit-contact/:id" element={<EditContact/>}/>
                  <Route path="*" element={<h1>Not found!</h1>}/>
              </Routes>
          </main>
      </>

  )
}

export default App
