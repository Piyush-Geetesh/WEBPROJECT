import React from "react";
import classes from "./Flight.css";
import image4 from '../../assets/aeroplane.jpg';
export default function Flight() {

	return (
		<div>
			<h1>Our Flight details</h1>
			<div className={classes.image}>
						<img src={image4}></img>
			</div>
			<ul>
               <li>Instant booking</li>
               <li>Domestic
                   <ul>
                      <li>30 express trains</li>
                      <li>20 superfast express</li>
                    </ul>
                </li>
                <li>International flights
                   <ul>
                      <li>20 express trains</li>
                      <li>30 superfast express</li>
                    </ul>
                </li>
            </ul>
		</div>
	);
}
