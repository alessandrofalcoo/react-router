import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Contacts from "./pages/Contacts"
import Products from "./pages/Products"
import defaultLayout from "./layout/defaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={defaultLayout}>
            <Route path="/" Component={Homepage} />
            <Route path="/products" Component={Products} />
            <Route path="/contacts" Component={Contacts} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
