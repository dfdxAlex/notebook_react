import './css/Settings.css';
import getLang from '../controller/getLang.js';

// Функция управляет режимом настроек
function Settings(props)
{

    // функция-обёртка помогает сократить дублирование кода
    function translateHelp(el)
    {
        return props.clonTranslateArray[el][getLang()];
    }

    return (
        <div>
            <fieldset className='fieldset-lang'>
               <legend className='legend-lang'>{translateHelp(7)}</legend>
               <select 
                   className='select-lang' 
                   defaultValue={props.clonLang}
                   onChange={(event) => {
                        props.setLang(event.target.value);
                    }}
               >
                   <option value='en'>{translateHelp(3)}</option>;
                   <option value='pl'>{translateHelp(4)}</option>;
                   <option value='ua'>{translateHelp(5)}</option>;
                   <option value='ru'>{translateHelp(6)}</option>;
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
                {translateHelp(1)}
            </button>

            <button 
                type="button"
                className='button-setting'
                onClick={() => {
                                 props.setTypeOfRegim(true);
                                }}
            >
                {/* Кнопка Выйти из настроек */}
                {translateHelp(2)}
            </button>
        </div>
    );
}

export default Settings;
