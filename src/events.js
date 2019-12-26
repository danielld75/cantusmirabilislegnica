import React from "react";

const events = () => {
    return (
        <div className={'App-events'}>
            <h3>Wydarzenia:</h3>
            <ul>
                <li>29 XII 2019 godz. 10<sup>00</sup> - msza święta w Niedzielę św. Rodziny, Katedra Legnicka</li>
                <div style={{color:'#777'}}>
                    <li>22 XII 2019 godz. 17<sup>00</sup> - Adoracja Najświętszego Sakramentu, Katedra Legnicka</li>
                    <li>14 XII 2019 godz. 18<sup>00</sup> - Msza święta (Peregrynacja Matki Bożej Kodeńskiej) w parafii św. Józefa w Legnicy</li>
                </div>
            </ul>
        </div>
    )
};

export default events;