import logo from './logo.svg';
import './App.css';
import TimeDisplay from './TimeDisplay';



function MyButton() {
  return (
    <button>Short nap</button>
  );
}

function MyButton2() {
  return (
    <button>long nap</button>
  );
}

function MyButton3() {
  return (
    <button>Sleep</button>
  );
}

function App() {
  return (
      <div className="App">
        <h1>Optimal Sleep</h1>
        <TimeDisplay />
        <MyButton />
        <MyButton2 />
        <MyButton3 />
      </div>
    );
  }

export default App;
