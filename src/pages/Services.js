import React from 'react';
import Logos from '../components/Logos';
import Navigation from '../components/Navigation';

const Services = () => {
    return (
        <div className='main'>
            <div className="header">
                <Logos />
                <Navigation />
            </div>
            <div className="list-service">
                <h1>Mes prestations</h1>
                <br />
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur ea repellendus corrupti explicabo eum iure sequi ut adipisci, maiores dolor beatae, amet, pariatur veritatis praesentium! Earum iste, pariatur corrupti minima voluptatem exercitationem ullam hic consequatur reprehenderit necessitatibus vitae eligendi reiciendis recusandae dolorem consectetur ipsum? Ratione tenetur dolorem architecto vitae?
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur ea repellendus corrupti explicabo eum iure sequi ut adipisci, maiores dolor beatae, amet, pariatur veritatis praesentium! Earum iste, pariatur corrupti minima voluptatem exercitationem ullam hic consequatur reprehenderit necessitatibus vitae eligendi reiciendis recusandae dolorem consectetur ipsum? Ratione tenetur dolorem architecto vitae?
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur ea repellendus corrupti explicabo eum iure sequi ut adipisci, maiores dolor beatae, amet, pariatur veritatis praesentium! Earum iste, pariatur corrupti minima voluptatem exercitationem ullam hic consequatur reprehenderit necessitatibus vitae eligendi reiciendis recusandae dolorem consectetur ipsum? Ratione tenetur dolorem architecto vitae?
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Services;