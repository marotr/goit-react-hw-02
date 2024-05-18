
import { GiCoffeeBeans } from "react-icons/gi";
import Options from './components/Options/Options'
import './App.css'

const App = () => {

      return (
    <>
           <div>
            <h1 > <GiCoffeeBeans/> Sip Happens Café
          </h1>
          <p >Please leave your feedback about our service by selecting one of the options below.
</p>
          
      </div>
      
    
  
     <Options />
   
      
    </>
  );
};

export default App
