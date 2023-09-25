import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoMainBanner } from "@/components/images"
import Link from "next/link"

export default function Banner() {
	return (
		<>
			<section id={style.banner} style={{ backgroundImage: "url(" + PhotoMainBanner.src + ")" }}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={`${style.content} text-center`}>
							{/* <h1>We craft beautifully useful marketing and digital products that grow businesses.</h1> */}
							<h1>We craft digital & design products that grow businesses.</h1>
							<p>High quality web design, seo and marketing services for all types of small businesses and corporations.</p>
							<div className={`${style.btn_blk} justify-content-center`}>
								<Link href="/contact" className={`${style.site_btn} ${style.simple} ${style.round}`}>
									Get in Touch
								</Link>
							</div>
						</div>
						<div className={style.image}>
							<Image width={1900} height={1000} src={PhotoMainBanner} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
