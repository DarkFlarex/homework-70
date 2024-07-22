import './App.css'
import {Route, Routes} from "react-router-dom";
import ContactsList from './compontents/ContactsList/ContactsList';
import Toolbar from "./compontents/Toolbar/Toolbar";
import NewContact from "./containers/NewConctact/NewContact";


const App = () => {

  return (
      <>
          <header>
              <Toolbar/>
          </header>
          <main className='container'>
              <Routes>
                  <Route path="/" element={<ContactsList/>}/>
                  <Route path="/new-contact" element={<NewContact/>}/>
                  <Route path="*" element={<h1>Not found!</h1>}/>
              </Routes>
          </main>
      </>

  )
}

export default App
