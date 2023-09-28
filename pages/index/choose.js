import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import SlickChoose from "@/components/slickChoose"

export default function Choose() {
	return (
		<>
			<section id={style.choose}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.content}>
							<h2>
								<em>Why work</em>
								<span>with us??</span>
							</h2>
							<div className={style.btn_blk}>
								<Link href="/contact" className={`${style.site_btn} ${style.simple} ${style.round}`}>
									Let&lsquo;s talk
								</Link>
							</div>
						</div>
						<div className={style.outer}>
							<SlickChoose />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
