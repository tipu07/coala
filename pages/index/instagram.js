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
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nunc ex nunc, semper ut tincidunt ut, aliquam sit amet magna.</p>
					</div>
				</div>
				<div className={style.wrapper}>
					<SlickInstagram />
				</div>
			</section>
		</>
	)
}
