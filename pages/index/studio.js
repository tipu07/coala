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
						<p className="h2 mb-5">Elevate your brand with our tech studio's cutting-edge web solutions & development expertise.</p>
						<div className="row">
							<div className="col-md-6">
								<h4>User-Centric Approach</h4>
								<p>Every line of code is written with the end user in mind. Our commitment to a user-centric approach ensures that your digital experiences are not just functional but delightful.</p>
							</div>
							<div className="col-md-6">
								<h4>Transparent Communication</h4>
								<p>Transparency is the bedrock of our client relationships. We keep you informed at every stage, fostering trust and ensuring that your project stays on track.</p>
							</div>
						</div>
						<div className={`${style.btn_blk} mt-5`}>
							<Link href="/services" className={`${style.site_btn} ${style.simple} ${style.round}`}>
								Explore More Services
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
