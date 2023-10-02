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
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis sint possimus dolores in provident rem quas laboriosam libero, obcaecati eum perferendis animi facere blanditiis iste corrupti. Voluptates, aliquam illo.</p>
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
