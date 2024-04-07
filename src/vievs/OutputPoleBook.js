
import hundlerDellPosition from '../controller/hundlerDellPosition.js';

import './css/OutputPoleBook.css';

function OutputPoleBook(props)
{
    let clonWorkArray = props.clonWorkArray;
    const setWorkArray = props.setWorkArray;

    return <div>
               <ul>
                   {clonWorkArray.map((item, index) => {
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

                                   <div className="poleinfo-div--li">
                                       <li className='poleinfo-li'>
                                            {item[0]}
                                       </li>
                                   </div>           
                               </div>
                               )
                        }
                   })}
               </ul>
           </div>;
}

export default OutputPoleBook;
