import '../default.css';
import './css/MenuWork.css';

import Hamburger from './HamburgerMenu';

function MenuWork()
{
    return (<div>
        <form className="grid-container">
            <input className="text" type="text" />
            <button 
                className="button" 
                type="button"
            >
                Добавить
            </button>
            <Hamburger />
        </form>
    </div>);
}

export default MenuWork;
