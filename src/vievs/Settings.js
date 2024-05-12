import './css/Settings.css';
import TranslationByWord from './TranslationByWord.js';

// Функция управляет режимом настроек
function Settings(props)
{

    return (
        <div>
            <fieldset className='fieldset-lang'>
               <legend className='legend-lang'>
                   <TranslationByWord 
                       clonTranslateArray = {props.clonTranslateArray}
                       str = 'Выбор языка'
                   />
               </legend> 
               <select 
                   className='select-lang' 
                   defaultValue={props.clonLang}
                   onChange={(event) => {
                        props.setLang(event.target.value);
                    }}
               >
                   <option value='en'>
                        <TranslationByWord 
                            clonTranslateArray = {props.clonTranslateArray}
                            str = 'Английский'
                        />
                   </option>;
                   <option value='pl'>
                        <TranslationByWord 
                            clonTranslateArray = {props.clonTranslateArray}
                            str = 'Польский'
                        />
                   </option>;
                   <option value='ua'>
                        <TranslationByWord 
                            clonTranslateArray = {props.clonTranslateArray}
                            str = 'Украинский'
                        />
                   </option>;
                   <option value='ru'>
                        <TranslationByWord 
                            clonTranslateArray = {props.clonTranslateArray}
                            str = 'Русский'
                        /> 
                   </option>;
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
                <TranslationByWord 
                    clonTranslateArray = {props.clonTranslateArray}
                    str = 'Сохранить'
                /> 
            </button>

            <button 
                type="button"
                className='button-setting'
                onClick={() => {
                                 props.setTypeOfRegim(true);
                                }}
            >
                <TranslationByWord 
                    clonTranslateArray = {props.clonTranslateArray}
                    str = 'Выйти'
                /> 
            </button>
        </div>
    );
}

export default Settings;
