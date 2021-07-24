import logo from './logo.svg';
import './App.css';
import Avatar from "./Avatar/Avatar";
let link = 'https://cdn.hiconsumption.com/wp-content/uploads/2020/04/Best-Fixed-Gear-Bicvcles-00-Hero.jpg';
function App() {
  return (
    <div className="App">

      <Avatar address={link} />
    </div>
  );
}

export default App;
