import React from 'react'
import './DownloadCv.css'

const DownloadCv = () => {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/M.yazan cv.pdf'
        link.download = 'Yazan-Khairi-CV.pdf'
        link.click()
    }

    return (
        <button onClick={handleDownload} className="downloadCvButton" type="button">
            <svg
                className="downloadCvIcon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"
                />
            </svg>

            <span>Download CV</span>
        </button>
    )
}

export default DownloadCv