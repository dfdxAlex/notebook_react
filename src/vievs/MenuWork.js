import './css/MenuWork.css';

import Hamburger from './HamburgerMenu';
import hundlerAddPosition from '../controller/hundlerAddPosition.js';

function MenuWork(props)
{
    function hundlerInputText(event)
    {
        props.setInputTextPozition(event.target.value);
    }

    return (<div>
        <form className="grid-container">
            <div className="text-container">
                <input 
                    className="text" 
                    type="text" 
                    id="input_text_add_string"
                    onChange={hundlerInputText}
                    value={props.clonInputTextPozition || ''}
                />
            </div>
            <div className="button-container">
                <button 
                    className="button" 
                    type="button"
                    onClick={() => {hundlerAddPosition(props)}}
                >
                    Добавить
                </button>
            </div>
            <Hamburger />
            <br />
            
        </form>
    </div>);
}

export default MenuWork;
