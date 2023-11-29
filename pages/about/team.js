import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoTeam_01, PhotoTeam_02, PhotoTeam_03, PhotoTeam_04, PhotoTeam_05, PhotoTeam_06, PhotoTeam_07, PhotoTeam_08, SocialInstagram, SocialLinkedin } from "@/components/images"

export default function Team() {
	return (
		<>
			<section id={style.team}>
				<div className={style.contain}>
					<div className={style.content}>
						<h2>
							<em>The</em> <span>Team</span>
						</h2>
						<p>Meet our dynamic team at Wedevs, where passion converges with expertise, crafting digital solutions that redefine innovation.</p>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.team_blk}>
								<div className={style.image}>
									<Image width={400} height={600} src={PhotoTeam_01} alt="" />
								</div>
								<div className={style.text}>
									<div className="h4">Alberto Philips</div>
									<p className="small">CEO</p>
									<ul className={style.social}>
										<li>
											<a href="?" aria-label="Linkedin">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?" aria-label="Instagram">
												<Image width={60} height={60} src={SocialInstagram} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.team_blk}>
								<div className={style.image}>
									<Image width={400} height={600} src={PhotoTeam_02} alt="" />
								</div>
								<div className={style.text}>
									<div className="h4">Alex Smith</div>
									<p className="small">LEAD MOBILE ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?" aria-label="Linkedin">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?" aria-label="Instagram">
												<Image width={60} height={60} src={SocialInstagram} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.team_blk}>
								<div className={style.image}>
									<Image width={400} height={600} src={PhotoTeam_03} alt="" />
								</div>
								<div className={style.text}>
									<div className="h4">Polina Jones</div>
									<p className="small">PRODUCT DESIGN LEAD</p>
									<ul className={style.social}>
										<li>
											<a href="?" aria-label="Linkedin">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?" aria-label="Instagram">
												<Image width={60} height={60} src={SocialInstagram} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.team_blk}>
								<div className={style.image}>
									<Image width={400} height={600} src={PhotoTeam_04} alt="" />
								</div>
								<div className={style.text}>
									<div className="h4">Chris Gayle</div>
									<p className="small">BACKEND ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?" aria-label="Linkedin">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?" aria-label="Instagram">
												<Image width={60} height={60} src={SocialInstagram} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.team_blk}>
								<div className={style.image}>
									<Image width={400} height={600} src={PhotoTeam_05} alt="" />
								</div>
								<div className={style.text}>
									<div className="h4">Delia Denia</div>
									<p className="small">HEAD OF PRODUCT</p>
									<ul className={style.social}>
										<li>
											<a href="?" aria-label="Linkedin">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?" aria-label="Instagram">
												<Image width={60} height={60} src={SocialInstagram} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.team_blk}>
								<div className={style.image}>
									<Image width={400} height={600} src={PhotoTeam_06} alt="" />
								</div>
								<div className={style.text}>
									<div className="h4">Radu Fikri</div>
									<p className="small">PRODUCT ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?" aria-label="Linkedin">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?" aria-label="Instagram">
												<Image width={60} height={60} src={SocialInstagram} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.team_blk}>
								<div className={style.image}>
									<Image width={400} height={600} src={PhotoTeam_07} alt="" />
								</div>
								<div className={style.text}>
									<div className="h4">Sandeep Chohan</div>
									<p className="small">LEAD ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?" aria-label="Linkedin">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?" aria-label="Instagram">
												<Image width={60} height={60} src={SocialInstagram} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.team_blk}>
								<div className={style.image}>
									<Image width={400} height={600} src={PhotoTeam_08} alt="" />
								</div>
								<div className={style.text}>
									<div className="h4">Shafia Yosafzai</div>
									<p className="small">PRODUCT ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?" aria-label="Linkedin">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?" aria-label="Instagram">
												<Image width={60} height={60} src={SocialInstagram} alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
