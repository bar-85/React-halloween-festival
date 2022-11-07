import React from 'react'
import { SocialIconStyles } from '../SocialIcon/SocialIcon.Styles'
import navIcon1 from '../../assets/nav-icon1.svg'
import navIcon2 from '../../assets/nav-icon2.svg'
import navIcon3 from '../../assets/nav-icon3.svg'

const SocialIcon = () => {
	return (
		<SocialIconStyles>
			<a href='/'>
				<img src={navIcon1} alt='linkedin logo' />
			</a>
			<a href='/'>
				<img src={navIcon2} alt='facebook logo' />
			</a>
			<a href='/'>
				<img src={navIcon3} alt='instagram logo' />
			</a>
		</SocialIconStyles>
	)
}

export default SocialIcon
