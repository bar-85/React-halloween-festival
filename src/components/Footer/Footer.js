import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Strona Główna</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Bilety</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Quiz</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Kontakt</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>© 2022 Halloween Festiwal | Wszelkie prawa zastrzeżone</p>
                </div>
            </div>
        </div>
    )
}

export default Footer