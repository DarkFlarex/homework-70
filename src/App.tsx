import './App.css'
import {Route, Routes} from "react-router-dom";
import ContactsList from './compontents/ContactsList/ContactsList';
import ContactForm from "./compontents/ContactForm/ContactForm";
import Toolbar from "./compontents/Toolbar/Toolbar";


const App = () => {

  return (
      <>
          <header>
              <Toolbar/>
          </header>
          <main className='container'>
              <Routes>
                  <Route path="/" element={<ContactsList/>}/>
                  <Route path="/new-contact" element={<ContactForm/>}/>
                  <Route path="*" element={<h1>Not found!</h1>}/>
              </Routes>
          </main>
      </>

  )
}

export default App
