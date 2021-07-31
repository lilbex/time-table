import logo from './logo.svg';
import './App.css';
import AllSubject from './components/timetable/days/AllSubject';
// import SingleClass from './components/timetable/singleclass/SingleClass';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <AllSubject />
      Welcome to automatic time-table generator website
      </header>
    </div>
  );
}

export default App;
