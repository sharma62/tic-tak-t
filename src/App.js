
import './App.css';
import SquareComponent from './SquareComponent';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <label htmlFor="" className='App-link'>Developed : Code With Suraj</label>
        <h1>Tic Tac Toe</h1>
        <div className="jc-center row border-bottom" >
          <SquareComponent class='border-right' />
          <SquareComponent class='border-right' />
          <SquareComponent />
        </div>
        <div className="jc-center row  border-bottom">
          <SquareComponent class='border-right' />
          <SquareComponent class='border-right' />
          <SquareComponent />
        </div>
        <div className="jc-center row  ">
          <SquareComponent class='border-right' />
          <SquareComponent class='border-right' />
          <SquareComponent />
        </div>
        <br /><br /><br />
        <button type="reset">New Game </button>
      </header>
    </div>
    </>
  );
}

export default App;
