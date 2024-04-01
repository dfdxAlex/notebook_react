import './default.css';
import './App.css';
import MenuWork from './vievs/MenuWork.js';
import WorkWithlocalStorage from './model/WorkWithlocalStorage.js';

function App() {

  return (
     <div>
        <WorkWithlocalStorage info="hello"/>
        <MenuWork />
     </div>
  );
}

export default App;
