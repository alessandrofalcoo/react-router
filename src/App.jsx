import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Contacts from "./pages/Contacts"
import Products from "./pages/Products"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route Component={Contacts} />
          <Route Component={Products} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
