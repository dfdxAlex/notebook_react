import './css/Settings.css';

function Settings(props)
{
    return (
        <div>
            <fieldset className='fieldset-lang'>
               <legend className='legend-lang'>Выбор языка</legend>
               <select 
                   className='select-lang' 
                   defaultValue={props.clonLang}
                   onChange={(event) => {props.setLang(event.target.value)}}
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
                                 props.setTypeOfRegim(true);
                                 localStorage.setItem('lang',props.clonLang);
                                }}
            >
                Сохранить
            </button>
        </div>
    );
}

export default Settings;
