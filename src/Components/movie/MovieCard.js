import "../styles.css";
import React from "react";
import {Link} from 'react-router-dom';


export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                        <Link to={`/info/${ele.id}`} >
                            <div className="card text-white"><img className="poster" src={ele.img} alt="Poster" />
                                <div className="card-img-overlay card-text">
                                    <h2 className="title">{ele.title}</h2>
                                    <p className="genre">{ele.year} - {ele.genre}</p>
                                    <p className="spanRate">{ele.rating} ⭐</p>                               
                                </div>
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}