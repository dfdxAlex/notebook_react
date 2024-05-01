import './css/MenuWork.css';

import Hamburger from './HamburgerMenu';
import hundlerAddPosition from '../controller/hundlerAddPosition.js';
import getLang from '../controller/getLang.js';

function MenuWork(props)
{
    // функция-обёртка помогает сократить дублирование кода
    function translateHelp(el)
    {
        return props.clonTranslateArray[el][getLang()];
    }

    return (<div>
        <form className="grid-container">
            <div className="text-container">
                <input 
                    className="text" 
                    type="text" 
                    id="input_text_add_string"
                    onChange={(event) => {props.setInputTextPozition(event.target.value)}}
                    value={props.clonInputTextPozition || ''}
                />
            </div>
            <div className="button-container">
                <button 
                    className="button" 
                    type="button"
                    onClick={() => {hundlerAddPosition(props)}}
                >
                    {/* Кнопка Добавить */}
                    {translateHelp(8)}
                </button>
            </div>
            <Hamburger 
                setTypeOfRegim = {props.setTypeOfRegim}
            />
            <br />
        </form>
    </div>);
}

export default MenuWork;
