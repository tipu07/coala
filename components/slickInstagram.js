import React from "react"
import style from "@/styles/scss/web.module.scss"
import Slider from "react-slick"
import Image from "next/image"
import { PhotoShowcase01, PhotoShowcase02, PhotoShowcase03, PhotoShowcase04, PhotoShowcase05, PhotoShowcase06, PhotoShowcase07, PhotoShowcase08, PhotoShowcase09, SocialInstagram } from "@/components/images"
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
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	return (
		<>
			<Slider {...settings} className={`${style.slick_instagram} slick-instagram slick-carousel`}>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoShowcase01} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoShowcase02} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoShowcase03} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoShowcase04} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoShowcase05} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoShowcase06} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoShowcase07} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoShowcase08} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
				<div className={style.insta_blk}>
					<Image width={500} height={500} src={PhotoShowcase09} alt="" />
					<Link href="/" className={style.overlay}>
						<Image width={40} height={40} src={SocialInstagram} alt="" />
					</Link>
				</div>
			</Slider>
		</>
	)
}
