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
            <p>Plebania Katedry Legnickiej</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.6535240775215!2d16.161679215758923!3d51.207035679586944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f129b269e37e9%3A0x51d4a1353cae042d!2s%C5%9Awi%C4%99tego%20Piotra%202a%2C%2059-200%20Legnica!5e0!3m2!1spl!2spl!4v1576421942246!5m2!1spl!2spl" title={"Mapa Plebania"} width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
        </div>
    )
};

export default about;