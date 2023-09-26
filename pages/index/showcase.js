import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { PhotoShowcase01, PhotoShowcase02, PhotoShowcase03, PhotoShowcase04, PhotoShowcase05, PhotoShowcase06, PhotoShowcase07, PhotoShowcase08, PhotoShowcase09 } from "@/components/images"

export default function Showcase() {
	return (
		<>
			<section id={style.showcase}>
				<div className={style.contain}>
					<div className={style.content}>
						<h2 className="mb-0">
							Featured <em>Projects</em>
						</h2>
						<div className={style.btn_blk}>
							<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
								Explore More
							</Link>
						</div>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase01} alt="" />
									<div className={style.overlay}>
										<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<h4>Website Development</h4>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase02} alt="" />
									<div className={style.overlay}>
										<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<h4>Organic Social</h4>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase03} alt="" />
									<div className={style.overlay}>
										<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<h4>Pre-Launch Strategy</h4>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase04} alt="" />
									<div className={style.overlay}>
										<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<h4>Shopify Design & Development</h4>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase05} alt="" />
									<div className={style.overlay}>
										<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<h4>eCommerce Marketing</h4>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase06} alt="" />
									<div className={style.overlay}>
										<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<h4>Email Marketing</h4>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase07} alt="" />
									<div className={style.overlay}>
										<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<h4>Growth Strategy</h4>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase08} alt="" />
									<div className={style.overlay}>
										<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<h4>Conversion Rate Optimization</h4>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase09} alt="" />
									<div className={style.overlay}>
										<Link href="/work" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<h4>Brand Positioning</h4>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
