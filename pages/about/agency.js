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
									<h2>Bespoke Solutions.</h2>
									<p>We don&lsquo;t believe in one-size-fits-all. Our approach is tailored to your specific needs, crafting bespoke solutions that align with your business goals and aspirations.</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoChoose02} alt="" />
								</div>
								<div className={style.text}>
									<h2>Agile Adaptability!!</h2>
									<p>Our agile methodology isn&lsquo;t just a project management strategy; it&lsquo;s a mindset. We adapt to changes quickly, ensuring flexibility and responsiveness throughout the development journey.</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.image}>
									<Image width={800} height={800} src={PhotoChoose03} alt="" />
								</div>
								<div className={style.text}>
									<h2>Transparency as a Standard</h2>
									<p>Transparency is not an option; it&lsquo;s our standard. We provide clear communication, regular updates, and an open-door policy, fostering trust and collaboration throughout the project.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
