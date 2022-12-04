import "../styles.css";
import React,{useRef} from "react";

export default function Filtring({filter}) {
    let searchRef = useRef();
    function submitted(ev){
        ev.preventDefault();
        filter(searchRef.current.value);
    }
    function refreshPage() {
        window.location.reload(true);
      }

    return (
        <div>
            <form className="Filterform" onChange={submitted}>
                <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="Search for film..." />
                <button onclick="{refreshPage}" className="btn btn-primary" type="submit" style={{width:"80px"}}>Reset</button>  
            </form> 
        </div>
        );
    }