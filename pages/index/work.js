import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoWork01, PhotoWork02, PhotoWork03, PhotoWork04, PhotoWork05, PhotoWork06 } from "@/components/images"
import Link from "next/link"

export default function Work() {
	return (
		<>
			<section id={style.work}>
				<div className={style.contain}>
					<div className={`${style.content} text-center`}>
						<h1>Latest Work</h1>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.work_blk}>
								<div className={style.front}>
									<Image width={800} height={800} src={PhotoWork01} alt="" />
								</div>
								<div className={style.back}>
									<div className={style.text}>
										<p>Duis volutpat ante ut quam egestas imperdiet. Aenean vitae lectus vitae orci vulputate accumsan.</p>
										<Link href="/work" className={style.link_btn}>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.work_blk}>
								<div className={style.front}>
									<Image width={800} height={800} src={PhotoWork02} alt="" />
								</div>
								<div className={style.back}>
									<div className={style.text}>
										<p>Duis volutpat ante ut quam egestas imperdiet. Aenean vitae lectus vitae orci vulputate accumsan.</p>
										<Link href="/work" className={style.link_btn}>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.work_blk}>
								<div className={style.front}>
									<Image width={800} height={800} src={PhotoWork03} alt="" />
								</div>
								<div className={style.back}>
									<div className={style.text}>
										<p>Duis volutpat ante ut quam egestas imperdiet. Aenean vitae lectus vitae orci vulputate accumsan.</p>
										<Link href="/work" className={style.link_btn}>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.work_blk}>
								<div className={style.front}>
									<Image width={800} height={800} src={PhotoWork04} alt="" />
								</div>
								<div className={style.back}>
									<div className={style.text}>
										<p>Duis volutpat ante ut quam egestas imperdiet. Aenean vitae lectus vitae orci vulputate accumsan.</p>
										<Link href="/work" className={style.link_btn}>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.work_blk}>
								<div className={style.front}>
									<Image width={800} height={800} src={PhotoWork05} alt="" />
								</div>
								<div className={style.back}>
									<div className={style.text}>
										<p>Duis volutpat ante ut quam egestas imperdiet. Aenean vitae lectus vitae orci vulputate accumsan.</p>
										<Link href="/work" className={style.link_btn}>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.work_blk}>
								<div className={style.front}>
									<Image width={800} height={800} src={PhotoWork06} alt="" />
								</div>
								<div className={style.back}>
									<div className={style.text}>
										<p>Duis volutpat ante ut quam egestas imperdiet. Aenean vitae lectus vitae orci vulputate accumsan.</p>
										<Link href="/work" className={style.link_btn}>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-center mt-5`}>
						<Link href="/work" className={`${style.site_btn} ${style.black} ${style.round}`}>
							Learn More
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
