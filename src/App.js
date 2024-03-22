
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Cards from './components/Cards';
function App() {
  return (
    <div className="App">

      <div className='main'>
        <div className='side'>
        <Sidebar/>
     
        </div>
        <div className='proj'>

        <Header/>
        <Cards/>
        </div>
      </div>
   
  
     
 
    </div>

  );
}

export default App;
