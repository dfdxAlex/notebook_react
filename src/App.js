import './default.css';
import './App.css';
import MenuWork from './vievs/MenuWork.js';
import React, { useState } from 'react';
import {initArray} from "./model/WorkDataArray.js";

import WorkWithlocalStorage from './model/WorkWithlocalStorage.js';




function App() {

  let workArray = initArray();

  //состояние передается в транзитный компонент WorkWithlocalStorage
  //состояние передается в функцию OutputPoleBook
  //состояние передается в функцию MenuWork
  const [clonWorkArray, setWorkArray] = useState(workArray);

  return (
     <div>
        <MenuWork 
            clonWorkArray = {clonWorkArray}
            setWorkArray = {setWorkArray}
        />
        <WorkWithlocalStorage 
            info=''
            clonWorkArray = {clonWorkArray}
            setWorkArray = {setWorkArray}
         />
     </div>
  );
}

export default App;
