import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import Link from "next/link"
import { PhotoIntro } from "@/components/images"

export default function Intro() {
	return (
		<>
			<section id={style.intro}>
				<div className={style.contain}>
					<h1>
						wedevs <span class="fw_500">+ &lt;/&gt;</span>
					</h1>
					<div className={style.content}>
						<p>We&lsquo;re not your average eCommerce agency - we&lsquo;re tech and marketing geeks who love helping our clients kick a**. Based in Surrey but always on the move, we&lsquo;re rebels at heart with a drive to do better every day.</p>
						<p>Whether it&lsquo;s website design, marketing campaigns, or brand transformation, we thrive on a good challenge. You bring the desire to grow your business, and we&lsquo;ll take care of the rest.</p>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.image}>
								<Image width={1000} height={1000} src={PhotoIntro} alt="" />
							</div>
						</div>
						<div className={style.column}>
							<div className={style.text}>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure ducimus, a ad ab earum aperiam dolorum fugit sunt tempora excepturi itaque libero dolorem porro distinctio vitae cum. Reprehenderit, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos molestiae deserunt, amet molestias, voluptatem cupiditate, magni aliquid sapiente adipisci velit. Eligendi facere id optio aliquam et, dicta dolores unde.</p>
								<div className={`${style.btn_blk} mt-5`}>
									<Link href="/contact" className={`${style.site_btn} ${style.simple} ${style.round}`}>
										Let&lsquo;s talk
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
