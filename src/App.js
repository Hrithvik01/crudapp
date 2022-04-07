import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route} from "react-router-dom"
import { useSelector } from "react-redux";
import ListUser from "./components/user/ListUser";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser"
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
function App() {
  const {isLogged}=useSelector((state)=>state);
  const localData=localStorage.getItem("token")
  return (
    <div className="container">
      {localData?<Header />:""}
      <h2>This is crud app</h2>
      {/* {!isLogged?<Login />:""} */}
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/list" element={<ListUser/>}/>
        <Route path="/create" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
