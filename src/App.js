import './App.css';
import Links from './Components/Links/Links';
import Cards from './Components/Cards/Cards';

function App() {
  return (
    <div className='App'>
      <div>
        <Links /> 

      </div>

      <div className='app_bg'>

       {/* <div className='discover'>
           <div>
              Discover            
           </div>
           <div>
              +
           </div>
       </div>  */}

        <Cards />

      </div>
    </div>
  );
}

export default App;
