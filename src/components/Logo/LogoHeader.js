import React from 'react'
import Logo from '../../assets/logo.webp'
import { LogoHeaderStyled } from './LogoHeader.styles'
import { Link } from 'react-router-dom'


const LogoHeader = () => {
	return (
		<LogoHeaderStyled>
			<Link to='/'><img src={Logo} alt='logo halloween' />
			</Link>
			
		</LogoHeaderStyled>
	)
}

export default LogoHeader
