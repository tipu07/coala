import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

export default function Studio() {
	return (
		<>
			<section id={style.studio}>
				<div className={style.contain}>
					<div className={style.content}>
						<h1>
							Tech <span>Studio</span>
						</h1>
						<p className="h2 mb-5">We back exceptional founders and empower them to impact the world through technology</p>
						<div className="row">
							<div className="col-md-6">
								<h4>Structured remote program</h4>
								<p>Join our three-month deep tech incubation program and secure up to €500k starting capital for your idea.</p>
							</div>
							<div className="col-md-6">
								<h4>Your dream co-founder</h4>
								<p>We will help you navigate the idea maze, accelerate concept validation, and provide vast in-house expertise.</p>
							</div>
						</div>
						<div className={`${style.btn_blk} mt-5`}>
							<Link href="/services" className={`${style.site_btn} ${style.simple} ${style.round}`}>
								Explore More Visionaries
							</Link>
						</div>
					</div>
				</div>
				<div className={style.vid_blk}>
					<video muted={true} loop={true} autoPlay={true} playsInline="playsinline" preload="metadata">
						<source src="/videos/Squares_1440x1440.mp4" type="video/mp4" />
					</video>
				</div>
			</section>
		</>
	)
}
