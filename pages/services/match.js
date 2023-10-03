import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoMainBanner, PhotoOurWork, PhotoShowcase07 } from "@/components/images"

export default function Match() {
	return (
		<>
			<section id={style.match}>
				<div className={style.block_01}>
					<div className={style.contain}>
						<div className={`${style.content} text-center`}>
							<h2>
								Build <span>More Trust</span>
							</h2>
							<h5>We&lsquo;ve done it before, and we&lsquo;ll do it again.</h5>
						</div>
						{/* <div className={style.image}>
							<Image width={1000} height={800} src={PhotoOurWork} alt="" />
						</div> */}
						<div className={style.video}>
							<video muted={true} loop={true} autoPlay={true} playsInline="playsinline" preload="metadata">
								<source src="https://cdn.cuberto.com/cb/projects/riyadh/cover.mp4" type="video/mp4" />
							</video>
						</div>
						<p>As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.</p>
					</div>
				</div>
				<div className={style.block_02}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<h2>Creative Design</h2>
							<div className={style.image}>
								<Image width={1000} height={800} src={PhotoShowcase07} alt="" />
							</div>
						</div>
						<div className={style.content}>
							<p>We don&lsquo;t do cookie-cutter solutions. Our user-centered design encourages productivity and boosts revenue.</p>
							<p>The only thing that matters in a brand is what you feel when interacting with a product. We assist established and emerging brands in creating identities that reflect the brand&lsquo;s true identity.</p>
						</div>
					</div>
				</div>
				<div className={style.block_03}>
					<div className={style.contain}>
						<h2>
							<em>Creativity</em>
							<span>meets technology</span>
						</h2>
						<div className={style.image_blk}>
							<div className={style.image}>
								<Image width={1000} height={800} src={PhotoMainBanner} alt="" />
							</div>
							<div className={style.image}>
								<Image width={1000} height={800} src={PhotoOurWork} alt="" />
							</div>
						</div>
						<p>From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses, creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience empowers us to develop products exactly as they should be.</p>
					</div>
				</div>
			</section>
		</>
	)
}
