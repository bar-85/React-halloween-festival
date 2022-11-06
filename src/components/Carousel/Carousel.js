import React from 'react'
import { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CarouselData } from '../../data/carouselData'
import { CarouselStyled, CarouselHeader } from './Carousel.styles'
import 'swiper/css'

const Carousel = () => {
	return (
		<div>
			<CarouselHeader>
				<h2>
				<span>Tegoroczne</span> wydarzenia
				</h2>
			</CarouselHeader>
			<CarouselStyled className={css.carousel}>
				<Swiper
					slidesPerView={3}
					breakpoints={{
						856: {
							slidesPerView: 3,
						},
						640: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					}}
					slidesPerGroup={1}
					spaceBetween={20}
					className='tCarousel'>
					{CarouselData.map((caro, i) => (
						<SwiperSlide >
							<div className='caro' key={i}>							
								<img src={caro.img} alt=''  />
								<span >{caro.name}</span>
								<hr />
								<span>{caro.comment}</span>								
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</CarouselStyled>
		</div>
	)
}

export default Carousel
