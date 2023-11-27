import React from "react"
import style from "@/styles/scss/web.module.scss"
import SlickInstagram from "@/components/slickInstagram"

export default function Instagram() {
	return (
		<>
			<section id={style.instagram}>
				<div className={style.contain}>
					<div className={style.content}>
						<h2>
							Follow us on <em>Instagram</em>
						</h2>
						<p>
							Behind every pixel is a story. Swipe left to explore the journey of crafting seamless and stunning web experiences. 💻✨ <u>#WebDevelopment</u> <u>#DigitalCraftsmanship</u>
						</p>
					</div>
				</div>
				<div className={style.wrapper}>
					<SlickInstagram />
				</div>
			</section>
		</>
	)
}
