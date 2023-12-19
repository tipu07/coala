import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoInsta01, PhotoInsta07, PhotoWork05 } from "@/components/images"

export default function Differ() {
	return (
		<>
			<section id={style.differ}>
				<div className={style.contain}>
					<div className={style.content}>
						<h2>
							<span>
								Our <em>philosophy</em>
							</span>{" "}
							is better than others??
						</h2>
						<p>At Wedevs, we believe in more than just lines of code; we believe in crafting digital experiences that leave a lasting impact. Our philosophy is rooted in a commitment to innovation, collaboration, and the relentless pursuit of excellence.</p>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.image_blk}>
								<div className={style.image}>
									<Image width={600} height={800} src={PhotoInsta01} alt="" />
								</div>
								<ul className={style.list}>
									<li>
										<div className={style.inr}>
											<div className={style.num}>1</div>
											<div className={style.text}>Innovation as a Guiding Light</div>
										</div>
									</li>
									<li>
										<div className={style.inr}>
											<div className={style.num}>2</div>
											<div className={style.text}>Collaboration for Success</div>
										</div>
									</li>
									<li>
										<div className={style.inr}>
											<div className={style.num}>3</div>
											<div className={style.text}>Excellence in Every Line of Code</div>
										</div>
									</li>
									<li>
										<div className={style.inr}>
											<div className={style.num}>4</div>
											<div className={style.text}>User-Centric Approach</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.image}>
								<Image width={600} height={800} src={PhotoInsta07} alt="" />
							</div>
							<div className={style.inner}>
								<div className={style.text}>
									<p>Trust is the cornerstone of every successful partnership</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.image}>
								<Image width={600} height={800} src={PhotoWork05} alt="" />
							</div>
							<div className={style.inner}>
								<div className={style.text}>
									<p>In the dynamic world of web services and development, stagnation is not an option</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
