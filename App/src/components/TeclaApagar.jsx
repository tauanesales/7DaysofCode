import React from "react";

function Tecla(props) {
    return <button type="button" className="tecla">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 0H7C6.31 0 5.77 0.35 5.41 0.88L0 9L5.41 17.11C5.77 17.64 6.31 18 7 18H22C23.1 18 24 17.1 24 16V2C24 0.9 23.1 0 22 0ZM22 16H7.07L2.4 9L7.06 2H22V16ZM10.41 14L14 10.41L17.59 14L19 12.59L15.41 9L19 5.41L17.59 4L14 7.59L10.41 4L9 5.41L12.59 9L9 12.59L10.41 14Z" fill="white" />
        </svg>
    </button>;
}

export default Tecla;