import './default.css';
import './App.css';
import MenuWork from './vievs/MenuWork.js';
import WorkWithlocalStorage from './model/WorkWithlocalStorage.js';

function App() {

  return (
     <div>
        <MenuWork />
        <WorkWithlocalStorage info=""/>
     </div>
  );
}

export default App;
