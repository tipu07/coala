import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoChoose01, PhotoChoose02, PhotoChoose03 } from "@/components/images"

export default function Agency() {
	return (
		<>
			<section id={style.agency}>
				<div className={style.contain}>
					<div className={style.content}>
						<h2>
							<span>We do things</span> <em>differently</em>
						</h2>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoChoose01} alt="" />
								</div>
								<div className={style.text}>
									<h2>Work you understand.</h2>
									<p>The average age of a business owner in the U.S. is 50 YO. Uncomfortable with tech, many are struggling to use modern tools to keep their business afloat. We will assign you a dedicated team specialist who will guide you every step of the way.</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoChoose02} alt="" />
								</div>
								<div className={style.text}>
									<h2>Expensive??</h2>
									<p>Google and YouTube&lsquo;s cost per one 1,000 views (CPM) up by 108%, Facebook ad costs saw a 89% increase, TikTok went up by 92% increase and Snapchat had “the lowest” 64% increase — and they show no signs of slowing down.</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoChoose03} alt="" />
								</div>
								<div className={style.text}>
									<h2>Transparency</h2>
									<p>In 2021, ad fraud cost advertisers $65 billion!</p>
									<p>Digital ad fraud is expected to reach $500 billion by 2025, which would make it the largest criminal enterprise after the drug trade. We help you make the most out of your advertising dollars by ensuring your ads are only shown to potential customers, not bots.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
