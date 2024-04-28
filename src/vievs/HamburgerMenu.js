import './css/Hamburger.css';

function Hamburger(props)
{
    return (<div 
               className="hamburger"
               onClick={() => {props.setTypeOfRegim(false)}}
            >
            <hr className='hamburger-hr'/>
            <hr className='hamburger-hr'/>
            <hr className='hamburger-hr'/>
    </div>);
}

export default Hamburger;
