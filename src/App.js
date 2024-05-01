import './default.css';
import './App.css';
import MenuWork from './vievs/MenuWork.js';
import React, { useState } from 'react';
import {initArray} from "./model/WorkDataArray.js";
import getLang from './controller/getLang.js';
import {translateArray} from './model/translateArray.js';

import OutputPoleBook from './vievs/OutputPoleBook.js';
import Settings from './vievs/Settings.js';

function App() {

  let workArray = initArray();
  let inputTextPozition = '';
  let typeOfRegim = true;
  let lang = getLang();

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

  //Состояние определяет язык интерфейса
  const [clonLang, setLang] = useState(lang);

  //Состояние хранит массив с переводами
  const [clonTranslateArray, setClonTranslateArray] = useState(translateArray);

  return (
     <div>
        {/* тег создает разметку главного меню */}
        {clonTypeOfRegim && // если clonTypeOfRegim == true то показать
            <MenuWork 
                clonWorkArray         = {clonWorkArray}
                setWorkArray          = {setWorkArray}
                clonInputTextPozition = {clonInputTextPozition}
                setInputTextPozition  = {setInputTextPozition}
                setTypeOfRegim        = {setTypeOfRegim}
        />}

        {/* тег работает с локальным хранилищем */}
        {clonTypeOfRegim && // если clonTypeOfRegim == true то показать
            <OutputPoleBook 
                info=''
                clonWorkArray = {clonWorkArray}
                setWorkArray  = {setWorkArray}
             />
        }

        {/* тег работает с настройками */}
        {!clonTypeOfRegim && // если clonTypeOfRegim == false то показать
            <Settings 
                setTypeOfRegim        = {setTypeOfRegim}
                clonLang              = {clonLang}
                setLang               = {setLang}
                clonTranslateArray    = {clonTranslateArray}
                setClonTranslateArray = {setClonTranslateArray}
            />
        }      

     </div>
  );
}

export default App;
