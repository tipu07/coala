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
					slidesToShow: 2,
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
						<h3>Innovative Solutions Tailored to You</h3>
						<p>Collaborate with us to transform your ideas into innovative and customized digital solutions</p>
					</div>
				</div>
				<div className={style.choose_blk}>
					<div className={style.image}>
						<Image width={600} height={600} src={PhotoChoose02} alt="" />
					</div>
					<div className={style.text}>
						<h3>Transparent and Collaborative Process</h3>
						<p>Experience a transparent and collaborative development process, keeping you informed and involved every step of the way</p>
					</div>
				</div>
				<div className={style.choose_blk}>
					<div className={style.image}>
						<Image width={600} height={600} src={PhotoChoose03} alt="" />
					</div>
					<div className={style.text}>
						<h3>Continuous Learning and Improvement</h3>
						<p>Benefit from a team dedicated to continuous learning and improvement, staying ahead of industry trends for your advantage</p>
					</div>
				</div>
			</Slider>
		</>
	)
}
