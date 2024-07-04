import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Skill from './components/Skill/skill';
import Education from './components/Eduction/education';
import Qulification from './components/Qualification/Qulification';

function App() {
  return (
    <>
    <Navbar/>
    <main className='main'>
      <Home/>
      <About/>
      <Skill/>
      <Education/>
      <Qulification/>
    </main>
    </>
  );
}

export default App;
