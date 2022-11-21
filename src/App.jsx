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
import Clients from "./Page/Clients/Clients";
import Suppliers from "./Page/Suppliers/Suppliers";
import Stock from "./Page/Stock/Stock";
import Buys from "./Page/Buys/Buys"
import Sells from "./Page/Sells/Sells";
import Statics from "./Page/Statics/Statics";
import About from "./Page/About/About"


function App() {
 
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/">
             <Route index element={<Home/>}/>
             <Route path="login" element={<Login/>}/>
             <Route path="stock" element={<Stock/>}/>
             <Route path="buys" element={<Buys/>}/>
             <Route path="sells" element={<Sells/>}/>
             <Route path="statics" element={<Statics/>}/>
             <Route path="about" element={<About/>}/>
          </Route>
          <Route path="/clients">
             <Route index element={<Clients/>}/>
             <Route path="new" element={<Login/>}/>
          </Route>
          <Route path="/products">
             <Route index element={<Clients/>}/>
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
