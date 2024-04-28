import './css/Settings.css';


function Settings(props)
{
    return (
        <div>
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
