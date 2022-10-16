import React, {useState} from "react";
import './Search.css'



const SearchbarDropdown = () => {
    const [setShow, show] = useState(false);
    
return (
    <div className="search-bar-dropdown">
        <input type="text" className="form-control" placeholder="Search"/>
        <ul className="list-group">
            <button type="button" onClick={ () => {
                   setShow(!show);
    }}
   className="list-group-item list-group-item-action">
               sdadsasfa
              </button>
        </ul>
    </div>
)
}
export default SearchbarDropdown


