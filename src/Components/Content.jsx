import React from "react";
import Items from "./Product";
import './Content.css'

function Container(){
    return(
        <>
            <div className="container">
                <h1>Brighten Your Desk</h1>
                <div className="sub-container">
                    <img src="/Blank NoteBook.png"/>
                    <button className="Button1">Quick Shop</button>
                </div>
                <div>
                <h1>Featured Categories</h1>
                    <div className="featured">
                        <Items image="/NOTEBOOK_COVER.png"
                               para="NoteBook Cover || SpiderMan Home Coming"
                               price="Rs.180"
                               btn2="Add to Cart"
                        />
                        <Items image="/SpiderMan_Cover.png"
                               para="NoteBook Cover || SpiderMan Far From Home"
                               price="Rs.180"
                               btn2="Add to Cart"
                        />
                        <Items image="/Spider_man-Cover.png"
                               para="NoteBook Cover || SpiderMan Home Combo"
                               price="Rs.350"
                               btn2="Add to Cart"
                        />
                    </div>
                <h1>Best Sellers</h1>
                    <div className="best-sellers">
                        <Items image="/NOTEBOOK_COVER.png"
                               para="NoteBook Cover || SpiderMan Home Coming"
                               price="Rs.180"
                               btn2="Add to Cart"
                        />
                        <Items image="/SpiderMan_Cover.png"
                               para="NoteBook Cover || SpiderMan Far From Home"
                               price="Rs.180"
                               btn2="Add to Cart"
                        />
                        <Items image="/Spider_man-Cover.png"
                               para="NoteBook Cover || SpiderMan Home Combo"
                               price="Rs.350"
                               btn2="Add to Cart"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Container;