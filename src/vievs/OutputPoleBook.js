
import hundlerDellPosition from '../controller/hundlerDellPosition.js';

import './css/OutputPoleBook.css';

function OutputPoleBook(props)
{
    let clonWorkArray = props.props.clonWorkArray;
    const setWorkArray = props.props.setWorkArray;

    return <div>
               <ul>
                   {clonWorkArray.map((item, index) => {
                    // item[4] проверяет считается ли запись удаленной
                      if (item[4]) {
                        return ( 
                               <div className="ul-div" 
                                    key={index}
                                >
                                   <div className="poleinfo-div--button">
                                       <button
                                           type="button"
                                           className='poleinfo--button'
                                           onClick={() => hundlerDellPosition(index, setWorkArray)}
                                       >
                                           X
                                       </button>
                                   </div>           
                                       <li className='poleinfo-div--li poleinfo-li'>
                                            {item[0]}
                                       </li>
                               </div>
                               )
                        }
                        return null;
                   })}
               </ul>
           </div>;
}

export default OutputPoleBook;
