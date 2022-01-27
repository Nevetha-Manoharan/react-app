import Counter from "./components/classComponents/Counter";
import './App.css'
import Search from "./components/functionalComponents/Search";
import Toggle from "./components/classComponents/Toggle";
function App() {
  return (
    <div className="main">
     <h1 className="heading">COUNTER</h1>
     <Counter/>
     <h1 className="heading">SEARCH</h1>
     <Search/>
     <h1 className="heading">TOGGLE</h1>
     <Toggle/>
     </div>
  );
}

export default App;
