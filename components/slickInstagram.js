import React from "react"
import style from "@/styles/scss/web.module.scss"
import Slider from "react-slick"
import Image from "next/image"
import { PhotoInsta01, PhotoInsta02, PhotoInsta03, PhotoInsta04, PhotoInsta05, PhotoInsta06, PhotoInsta07, PhotoInsta08, PhotoInsta09, SocialInstagram } from "@/components/images"
import Link from "next/link"

export default function SlickInstagram() {
	var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	}
	return (
		<>
			<Slider {...settings} className={`${style.slick_instagram} slick-instagram slick-carousel`}>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoInsta01} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoInsta02} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoInsta03} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoInsta04} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoInsta05} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoInsta06} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoInsta07} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoInsta08} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoInsta09} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
			</Slider>
		</>
	)
}
