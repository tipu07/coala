import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoMainBanner } from "@/components/images"

export default function Core() {
	return (
		<>
			<section id={style.core}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.content}>
							<h2>
								Our <span>Core Values</span>
							</h2>
							<p>Our customer-centric approach places your satisfaction at the forefront, turning your digital vision into a collaborative reality. Welcome to a space where our core values drive every keystroke, transforming ideas into extraordinary digital experiences.</p>
						</div>
						<div className={style.image}>
							<Image width={800} height={800} src={PhotoMainBanner} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
