import React from "react"
import style from "@/styles/scss/web.module.scss"
import Slider from "react-slick"
import Image from "next/image"
import { PhotoChoose01, PhotoChoose02, PhotoChoose03 } from "./images"

export default function SlickChoose() {
	var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	return (
		<>
			<Slider {...settings} className={`${style.slick_choose} slick-choose slick-carousel`}>
				<div className={style.choose_blk}>
					<div className={style.image}>
						<Image width={600} height={600} src={PhotoChoose01} alt="" />
					</div>
					<div className={style.text}>
						<h3>Raiffeisen Bank – Developing a sleek design for ATM interfaces</h3>
						<p>Scale yourself through videos tailored for each lead</p>
					</div>
				</div>
				<div className={style.choose_blk}>
					<div className={style.image}>
						<Image width={600} height={600} src={PhotoChoose02} alt="" />
					</div>
					<div className={style.text}>
						<h3>DataLight – Instrument for detailed cryptocurrency market analysis</h3>
						<p>Create outreach campaigns that truly stand out</p>
					</div>
				</div>
				<div className={style.choose_blk}>
					<div className={style.image}>
						<Image width={600} height={600} src={PhotoChoose03} alt="" />
					</div>
					<div className={style.text}>
						<h3>Genesis Vision – Private trust management and trading platform</h3>
						<p>Effectively engage with qualified prospects</p>
					</div>
				</div>
			</Slider>
		</>
	)
}
