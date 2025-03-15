import React from "react";
import './Product.css'
function Items(props){
    return(
        <>
        <div className="frame">
            <div>
                <img src={props.image}/>
            </div>
            <div>
                <p>{props.para}</p>
                <p>{props.price}</p>
            </div>
            <div className="baton">
                <button className="Button2">{props.btn2}</button>
            </div>
        </div>
        </>
    );
}
export default Items;