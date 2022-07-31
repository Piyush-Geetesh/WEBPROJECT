import React from 'react'
import classes from "./Train.css";
import image5 from '../../assets/trains.jpg';
export default function Train() {
    return (
        <div>
            <h1>Railway servies to some </h1>
            <div className={classes.image}>
						<img src={image5}></img>
			</div>
            <ul>
               <li>Instant booking</li>
               <li>Southern India
                   <ul>
                      <li>30 express trains</li>
                      <li>20 superfast express</li>
                    </ul>
                </li>
                <li>Central India
                   <ul>
                      <li>20 express trains</li>
                      <li>30 superfast express</li>
                    </ul>
                </li>
				<li>Northern India
                   <ul>
                      <li>10 express trains</li>
                      <li>10 superfast express</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
