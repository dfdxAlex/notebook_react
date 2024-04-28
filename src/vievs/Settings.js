import './css/Settings.css';

import getLang from '../controller/getLang';


function Settings(props)
{
    return (
        <div>
            <fieldset className='fieldset-lang'>
               <legend className='legend-lang'>Выбор языка</legend>
               <select className='select-lang' value={getLang()}>
                   <option value='en'>Английский</option>;
                   <option value='pl'>Польский</option>;
                   <option value='ua'>Украинский</option>;
                   <option value='ru'>Русский</option>;
               </select>
            </fieldset>

            <button 
                type="button"
                className='button-setting'
                onClick={() => {props.setTypeOfRegim(true)}}
            >
                Сохранить
            </button>
        </div>
    );
}

export default Settings;
