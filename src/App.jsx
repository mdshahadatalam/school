import './App.css'
import { Banner } from './Component/Banner';
import { ClentMatter } from './Component/ClentMatter';
import { Navbar } from './Component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Teacher } from './Component/Teacher';
import { MyClient } from './Component/MyClient';
import { PopulerCourse } from './Component/PopulerCourse';
import { Subcripe } from './Component/Subcripe';
import { Futter } from './Component/Futter';

function App() {

  return (
      <>
        <Navbar/>
        <Banner/>
        <ClentMatter/>
        <Teacher/>
        <MyClient/>
        <PopulerCourse/>
        <Subcripe/>
        <Futter/>
      </>
  )
}

export default App
