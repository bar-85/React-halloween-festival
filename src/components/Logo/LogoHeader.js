import React from 'react'
import Logo from '../../assets/logo.png'
import { LogoHeaderStyled } from './LogoHeader.styles'

const LogoHeader = () => {
	return (
		<LogoHeaderStyled>
			<img src={Logo} alt='logo halloween' />
		</LogoHeaderStyled>
	)
}

export default LogoHeader
