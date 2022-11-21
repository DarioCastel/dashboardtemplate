import Home from "./Page/Home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Router,
  Routes,
} from "react-router-dom";
import Login from "./Page/Login/Login";
import Clients from "./Page/Clients/Clients"
import Products from "./Page/Products/Products";
import Suppliers from "./Page/Suppliers/Suppliers";


function App() {
 
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/">
             <Route index element={<Home/>}/>
             <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="/clients">
             <Route index element={<Clients/>}/>
             <Route path="new" element={<Login/>}/>
          </Route>
          <Route path="/products">
             <Route index element={<Products/>}/>
             <Route path="new" element={<Login/>}/>
          </Route>
          <Route path="/suppliers">
             <Route index element={<Suppliers/>}/>
             <Route path="new" element={<Login/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
