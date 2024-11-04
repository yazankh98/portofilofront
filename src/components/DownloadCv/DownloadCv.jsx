import React from 'react'
import './DownloadCv.css'
const downloadCv = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/yazanCv(ATS).pdf'; // Path to your PDF in the public folder
        link.download = 'yazan cv.pdf'; // Name for the downloaded file
        link.click();
    }
    return (
        <div>
            <button onClick={handleDownload} class="botao">
                <svg
                    class="mysvg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24px"
                    width="24px"
                >
                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                    <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="Interface / Download">
                            <path
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="2"
                                stroke="#f1f1f1"
                                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                                id="Vector"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span class="texto">Download CV</span>
            </button>

        </div>
    )
}

export default downloadCv