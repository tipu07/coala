import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

export default function Banner() {
	return (
		<>
			<section id={style.banner}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.content}>
							{/* <h1>We craft beautifully useful marketing and digital products that grow businesses.</h1> */}
							<h1>
								We craft <span>digital & design</span> products that grow businesses.
							</h1>
							<p>High quality web design, seo and marketing services for all types of small businesses and corporations.</p>
							<div className={style.btn_blk}>
								<Link href="/contact" className={`${style.site_btn} ${style.round}`}>
									Get in Touch
								</Link>
							</div>
						</div>
						<div className={style.video}>
							<video muted={true} loop={true} autoPlay={true} playsInline="playsinline" preload="metadata">
								<source src="https://cdn.cuberto.com/cb/showreel/1.mp4" type="video/mp4" />
							</video>
							{/* <video muted={true} loop={true} autoPlay={true} playsInline="playsinline" preload="metadata">
								<source src="/videos/1.mp4" type="video/mp4" />
							</video> */}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
