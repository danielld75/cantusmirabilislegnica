import React from "react";

const about = () => {
    return (
        <div className={'App-about'}>
            <h3>Jesteśmy zespołem wokalnym działającym przy Katedrze Legnickiej</h3>
            <a
                className="App-link"
                href="https://www.youtube.com/channel/UCew5gF2HiBoV8-okJI9H6dw/featured"
                target="_blank"
                rel="noopener noreferrer"
            > Posłuchaj nas na YT
            </a>
            <p> </p>
            <a
                className="App-link"
                href="https://www.facebook.com/cantusMirabilisLegnica/"
                target="_blank"
                rel="noopener noreferrer"
            > Facebook
            </a>
            <p>Spotykamy się we wtorki i czwartki o godz. 19<sup>20</sup> oraz w soboty o 19<sup>30</sup></p>
        </div>
    )
};

export default about;