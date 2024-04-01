import './css/MenuWork.css';

import Hamburger from './HamburgerMenu';

function MenuWork()
{
    return (<div>
        <form className="grid-container">
            <div className="text-container">
                <input className="text" type="text" />
            </div>
            <div className="button-container">
                <button 
                    className="button" 
                    type="button"
                >
                    Добавить
                </button>
            </div>
            <Hamburger />
        </form>
    </div>);
}

export default MenuWork;
