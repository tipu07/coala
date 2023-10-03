import React from "react"
import style from "@/styles/scss/web.module.scss"
import { PhotoShadow } from "@/components/images"

export default function Solution() {
	return (
		<>
			<section id={style.solution} style={{ backgroundImage: "url(" + PhotoShadow.src + ")" }}>
				<div className={style.contain}>
					<h1>WE BUILD A STABLE CODE USING IN-HOUSE SOLUTIONS</h1>
					<div className={style.content}>
						<p>Developing digital products since 2010. We help bring ideas to life and create digital products that work.</p>
					</div>
				</div>
			</section>
		</>
	)
}
