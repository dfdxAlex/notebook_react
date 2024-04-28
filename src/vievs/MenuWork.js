import './css/MenuWork.css';

import Hamburger from './HamburgerMenu';
import hundlerAddPosition from '../controller/hundlerAddPosition.js';

function MenuWork(props)
{
    function hundlerInputText(props)
    {
        console.log('re re');
    }

    return (<div>
        <form className="grid-container">
            <div className="text-container">
                <input 
                    className="text" 
                    type="text" 
                    id="input_text_add_string"
                    onChange={hundlerInputText}
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
