import React from "react"
import style from "@/styles/scss/web.module.scss"
import SlickReviews from "@/components/slickReviews"
import Image from "next/image"
import { PhotoReview } from "@/components/images"

export default function Reviews() {
	return (
		<>
			<section id={style.reviews}>
				<div className={style.image}>
					<Image width={1000} height={1000} src={PhotoReview} alt="" />
				</div>
				{/* <div className={style.video}>
					<video muted={true} loop={true} autoPlay={true} playsInline="playsinline" preload="metadata">
						<source src="https://cdn.cuberto.com/cb/projects/riyadh/cover.mp4" type="video/mp4" />
					</video>
				</div> */}
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.content}>
							<h2>
								What our <em>participants</em> say
							</h2>
						</div>
						<SlickReviews />
					</div>
				</div>
			</section>
		</>
	)
}
