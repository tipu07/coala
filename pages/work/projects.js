import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoShowcase01, PhotoShowcase02, PhotoShowcase03, PhotoShowcase04, PhotoShowcase05, PhotoShowcase06, PhotoShowcase07, PhotoShowcase08, PhotoShowcase09, PhotoShowcase10, PhotoShowcase11, PhotoShowcase12, PhotoShowcase13 } from "@/components/images"
import Link from "next/link"

export default function Projects() {
	return (
		<>
			<section id={style.projects}>
				<div className={style.contain}>
					<h2>
						All <span>Projects</span>
					</h2>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase01} alt="" />
									<div className={style.overlay}>
										<Link href="https://axiomtechnology.io/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Axiom Technology</h4>
									<p>Sleep app helps millions fall asleep every night</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase02} alt="" />
									<div className={style.overlay}>
										<Link href="https://blootopia.com/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Blootopia</h4>
									<p>The First Super-App in Latin America</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase03} alt="" />
									<div className={style.overlay}>
										<Link href="https://bridge-axis.vercel.app/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Bridge Axis</h4>
									<p>The best tool for stop-motion animation</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase04} alt="" />
									<div className={style.overlay}>
										<Link href="https://campvine.com/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Campvine</h4>
									<p>Official website of Riyadh, Saudi Arabia&lsquo;s capital</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase05} alt="" />
									<div className={style.overlay}>
										<Link href="https://www.crainly.com/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Crainly</h4>
									<p>Sales tool for increasing conversions</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase06} alt="" />
									<div className={style.overlay}>
										<Link href="http://cultural-candy.herokuapp.com/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Cultural Candy</h4>
									<p>Cloud based network management</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase07} alt="" />
									<div className={style.overlay}>
										<Link href="https://modiglianiantiquites.com/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Modigliani Antiquités</h4>
									<p>Wine marketplace with interactive learning</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase08} alt="" />
									<div className={style.overlay}>
										<Link href="https://www.herosolutions.com.pk/metoo/orow/index.php" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Orow Construction</h4>
									<p>Galvanized steel metal frame manufacturer</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase09} alt="" />
									<div className={style.overlay}>
										<Link href="https://steveparkrealtor.com/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Steve Park Realtor</h4>
									<p>Online platform for distance learning</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase10} alt="" />
									<div className={style.overlay}>
										<Link href="https://tastehub.com.au/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>Taste Hub</h4>
									<p>The First Super-App in Latin America</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase11} alt="" />
									<div className={style.overlay}>
										<Link href="https://theethicalchoice.com/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>The Ethical Choice</h4>
									<p>Wine marketplace with interactive learning</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase12} alt="" />
									<div className={style.overlay}>
										<Link href="https://thegeneva-collection.com/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>The Geneva Collection</h4>
									<p>Wine marketplace with interactive learning</p>
								</div>
							</div>
							<div className={style.showcase_blk}>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoShowcase13} alt="" />
									<div className={style.overlay}>
										<Link href="https://unitedcitymortgage.com/" className={`${style.site_btn} ${style.simple} ${style.round}`}>
											Explore
										</Link>
									</div>
								</div>
								<div className={style.text}>
									<h4>UC Mortgage</h4>
									<p>Wine marketplace with interactive learning</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
