import React from 'react'

const CardProgram = ({ title = 'Title', subtitle = 'Subtitle' }) => (
  <>
    <div className="program-block__card">
      <p className="program-block__card-title">Здесь будет текст</p>
      <button className="program-block__card-btn">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#ADFA00" />
          <path
            d="M18.3866 16.8267L23.5599 22L18.3866 27.1734C17.8666 27.6934 17.8666 28.5334 18.3866 29.0534C18.9066 29.5734 19.7466 29.5734 20.2666 29.0534L26.3866 22.9334C26.9066 22.4134 26.9066 21.5734 26.3866 21.0534L20.2666 14.9334C19.7466 14.4134 18.9066 14.4134 18.3866 14.9334C17.8799 15.4534 17.8666 16.3067 18.3866 16.8267Z"
            fill="#1C1C1E"
          />
        </svg>
      </button>
    </div>
  </>
)

export default CardProgram
