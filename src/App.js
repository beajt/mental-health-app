import './App.css';
import Header from "./Components/Header";
import DarkMode from "./Components/DarkMode";
import Virtual from "./Components/Virtual";
import InPerson from "./Components/InPerson";
import StudentTherapist from './Components/StudentTherapist';
import SlidingScale from './Components/SlidingScale';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <DarkMode />
        <h3>Free Resources</h3>
      <div className="Main">
        <Virtual />
        <InPerson />
      </div>
        <h3>Low Cost Therapy - Student Therapist</h3>
        <StudentTherapist />
        <h3>Sliding Scale Therapy</h3>
        <SlidingScale />
        <Footer />
    </div>
  );
}

export default App;
