import './css/Settings.css';
import getLang from '../controller/getLang.js';

// Функция управляет режимом настроек
function Settings(props)
{
    // let TrArr = props.clonTranslateArray;
    return (
        <div>
            <fieldset className='fieldset-lang'>
               <legend className='legend-lang'>Выбор языка</legend>
               <select 
                   className='select-lang' 
                   defaultValue={props.clonLang}
                   onChange={(event) => {
                        props.setLang(event.target.value);
                    }}
               >
                   <option value='en'>Английский</option>;
                   <option value='pl'>Польский</option>;
                   <option value='ua'>Украинский</option>;
                   <option value='ru'>Русский</option>;
               </select>
            </fieldset>

            <button 
                type="button"
                className='button-setting'
                onClick={() => {
                                 localStorage.setItem('lang',props.clonLang);
                                 const arr = props.clonTranslateArray;
                                 arr[0]['lang'] = props.clonLang;
                                 props.setClonTranslateArray([...arr]);
                                }}
            >
                {/* Кнопка Сохранить */}
                {props.clonTranslateArray[1][getLang()]}
            </button>

            <button 
                type="button"
                className='button-setting'
                onClick={() => {
                                 props.setTypeOfRegim(true);
                                }}
            >
                {/* Кнопка Выйти из настроек */}
                {props.clonTranslateArray[2][getLang()]}
            </button>
        </div>
    );
}

export default Settings;
