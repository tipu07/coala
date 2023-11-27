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
									<h4>Alberto Philips</h4>
									<p className="small">CEO</p>
									<ul className={style.social}>
										<li>
											<a href="?">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?">
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
									<h4>Alex Smith</h4>
									<p className="small">LEAD MOBILE ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?">
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
									<h4>Polina Jones</h4>
									<p className="small">PRODUCT DESIGN LEAD</p>
									<ul className={style.social}>
										<li>
											<a href="?">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?">
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
									<h4>Chris Gayle</h4>
									<p className="small">BACKEND ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?">
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
									<h4>Delia Denia</h4>
									<p className="small">HEAD OF PRODUCT</p>
									<ul className={style.social}>
										<li>
											<a href="?">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?">
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
									<h4>Radu Fikri</h4>
									<p className="small">PRODUCT ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?">
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
									<h4>Sandeep Chohan</h4>
									<p className="small">LEAD ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?">
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
									<h4>Shafia Yosafzai</h4>
									<p className="small">PRODUCT ENGINEER</p>
									<ul className={style.social}>
										<li>
											<a href="?">
												<Image width={60} height={60} src={SocialLinkedin} alt="" />
											</a>
										</li>
										<li>
											<a href="?">
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
