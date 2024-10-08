import React, { useState, useEffect, useContext } from "react";
import {contextdata} from "../../js/layout";
export const Navbar = ({getChosen}) => {
const data = useContext(contextdata);
	return (
	<>
	<div className="container"> 
				<nav className="navbar navbar-expand-lg navbar-light bg-light flex-container">
				<a className="navbar-brand" href="#"><img className="imglogo" src="https://static.wikia.nocookie.net/starwars/images/d/d9/StarWarsTales.png/revision/latest/scale-to-width-down/1200?cb=20210511023300"/></a>
				<div className="d-grid gap-2 d-md-flex justify-content-md-end ">
							<button className="btn btn-secondary btn-menu"  data-bs-toggle="dropdown" aria-expanded="false" type="button">
							<div ><b>Favorites</b> <b className="chosencounter">{data.chosen.length}</b></div>
							</button>  
							<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
							{
								data.chosen[0]!=undefined?	
								data.chosen.map((p,index)=>(
									<div key={index}>						
										<li className=""><a className="dropdown-item flex-container" href="#"><b>{p.name}</b>  <i className="fas fa-trash" onClick={()=>getChosen(p)}></i></a></li>
									</div>		
								))
								:	<li className=""><a className="dropdown-item flex-container" href="#"><b>(Empty)</b></a></li>
							}
							</ul>
				</div>
				</nav>
		</div>
	</>
	);
};
