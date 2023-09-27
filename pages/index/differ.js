import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoShowcase01, PhotoShowcase07, PhotoWork05 } from "@/components/images"

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
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales massa, ac congue lacus. Donec efficitur eu lacus et blandit. Phasellus ut eros in felis hendrerit luctus.</p>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.image_blk}>
								<div className={style.image}>
									<Image width={600} height={800} src={PhotoShowcase01} alt="" />
								</div>
								<ul className={style.list}>
									<li>
										<div className={style.inr}>
											<div className={style.num}>1</div>
											<div className={style.text}>x1 silica gel</div>
										</div>
									</li>
									<li>
										<div className={style.inr}>
											<div className={style.num}>2</div>
											<div className={style.text}>ear spoon</div>
										</div>
									</li>
									<li>
										<div className={style.inr}>
											<div className={style.num}>3</div>
											<div className={style.text}>3.5mm head</div>
										</div>
									</li>
									<li>
										<div className={style.inr}>
											<div className={style.num}>4</div>
											<div className={style.text}>widely applicable soft feeling</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.image}>
								<Image width={600} height={800} src={PhotoShowcase07} alt="" />
							</div>
							<div className={style.inner}>
								<div className={style.text}>
									<p>tear drop cotton swabs 4.5mm head not comfortable hurt eardrum</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.image}>
								<Image width={600} height={800} src={PhotoWork05} alt="" />
							</div>
							<div className={style.inner}>
								<div className={style.text}>
									<p>rubber head cotton swabs 4mm head not comfortable hurt eardrum</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
