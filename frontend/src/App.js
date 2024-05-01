import "./App.css";
// import Home from "./pages/Home";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import { Route } from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <Route path ="/"component={Home} exact/>
      <Route path ="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
