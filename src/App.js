import './default.css';
import './App.css';
import MenuWork from './vievs/MenuWork.js';
import React, { useState } from 'react';
import {initArray} from "./model/WorkDataArray.js";

import OutputPoleBook from './vievs/OutputPoleBook.js';

function App() {

  let workArray = initArray();
  let inputTextPozition = '';
  let typeOfRegim = true;

  //состояние контролирует главный массив с информацией
  //состояние передается в транзитный компонент WorkWithlocalStorage
  //состояние передается в функцию OutputPoleBook
  //состояние передается в функцию MenuWork
  const [clonWorkArray, setWorkArray] = useState(workArray);

  //Содержимое поля ввода добавление позиции
  const [clonInputTextPozition, setInputTextPozition] = useState(inputTextPozition);

  //Состояние определяет показывать ли рабочее поле
  //или поле с настройками
  const [clonTypeOfRegim, setTypeOfRegim] = useState(typeOfRegim);

  return (
     <div>
        {/* тег создает разметку главного меню */}
        {clonTypeOfRegim && 
        <MenuWork 
            clonWorkArray = {clonWorkArray}
            setWorkArray = {setWorkArray}
            clonInputTextPozition = {clonInputTextPozition}
            setInputTextPozition = {setInputTextPozition}
            setTypeOfRegim = {setTypeOfRegim}
        />}

        {/* тег работает с локальным хранилищем */}
        {clonTypeOfRegim && 
        <OutputPoleBook 
            info=''
            clonWorkArray = {clonWorkArray}
            setWorkArray = {setWorkArray}
         />
        }
        
     </div>
  );
}

export default App;
