
import DellPosition from '../model/DellPosition.js';
import {workArray} from '../model/WorkDataArray.js';

import './css/OutputPoleBook.css';

function OutputPoleBook()
{
    return <div>
               <ul>
                   {workArray.map((item, index) => {
                      if (item[4]) {
                        return ( 
                               <div className="ul-div" 
                                    key={index}
                                >
                                   <div className="poleinfo-div--button">
                                       <button
                                           type="button"
                                           className='poleinfo--button'
                                           onClick={() => DellPosition(index)}
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
