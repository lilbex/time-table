import logo from './logo.svg';
import './App.css';
import AllSubject from './components/timetable/days/AllSubject';
import SingleClass from './components/timetable/singleclass/SingleClass';
import Navigation from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header"> 
      
      Welcome to automatic time-table generator website
      </header>
    </div>
  );
}

export default App;
