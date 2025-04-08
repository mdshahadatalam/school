import './App.css'
import { Banner } from './Component/Banner';
import { ClentMatter } from './Component/ClentMatter';
import { Navbar } from './Component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
      <>
        <Navbar/>
        <Banner/>
        <ClentMatter/>
      </>
  )
}

export default App
