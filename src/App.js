import './default.css';
import './App.css';
import MenuWork from './vievs/MenuWork.js';
import React, { useState } from 'react';
import {initArray} from "./model/WorkDataArray.js";

import WorkWithlocalStorage from './model/WorkWithlocalStorage.js';




function App() {

  let workArray = initArray();
  let inputTextPozition = '';

  //состояние контролирует главный массив с информацией
  //состояние передается в транзитный компонент WorkWithlocalStorage
  //состояние передается в функцию OutputPoleBook
  //состояние передается в функцию MenuWork
  const [clonWorkArray, setWorkArray] = useState(workArray);

  //Содержимое поля ввода добавление позиции
  const [clonInputTextPozition, setInputTextPozition] = useState(inputTextPozition);

  return (
     <div>
        {/* тег создает разметку главного меню */}
        <MenuWork 
            clonWorkArray = {clonWorkArray}
            setWorkArray = {setWorkArray}
            clonInputTextPozition = {clonInputTextPozition}
            setInputTextPozition = {setInputTextPozition}
        />
        {/* тег работает с локальным хранилищем */}
        <WorkWithlocalStorage 
            info=''
            clonWorkArray = {clonWorkArray}
            setWorkArray = {setWorkArray}
         />
     </div>
  );
}

export default App;
