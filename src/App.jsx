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


function App() {
 
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/">
             <Route index element={<Home/>}/>
             <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
