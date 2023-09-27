import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import Link from "next/link"
import { SocialFacebook, SocialInstagram, SocialLinkedin, SocialTwitter } from "./images"
import Logo from "./logo"

export default function Footer() {
	return (
		<>
			<footer id={style.footer}>
				<div className={style.contain}>
					<div className={style.top_blk}>
						<h2>Subscribe to our newsletter</h2>
						<form action="" method="post">
							<input type="text" name="" id="" placeholder="Email Address" />
							<button type="submit" className={style.site_btn}></button>
						</form>
					</div>
					<div className={style.mid_blk}>
						<div className={style.wrapper}>
							<div className={style.column}>
								<Logo />
								<ul className={style.social_list}>
									<li>
										<a href="?" target="_blank">
											<Image width={100} height={100} src={SocialTwitter} alt="" />
										</a>
									</li>
									<li>
										<a href="?" target="_blank">
											<Image width={100} height={100} src={SocialFacebook} alt="" />
										</a>
									</li>
									<li>
										<a href="?" target="_blank">
											<Image width={100} height={100} src={SocialLinkedin} alt="" />
										</a>
									</li>
									<li>
										<a href="?" target="_blank">
											<Image width={100} height={100} src={SocialInstagram} alt="" />
										</a>
									</li>
								</ul>
							</div>
							<div className={style.column}>
								<h4>Quick Links</h4>
								<ul className={style.list}>
									<li>
										<a href="?">Terms of service</a>
									</li>
									<li>
										<a href="?">Privacy policy</a>
									</li>
									<li>
										<a href="?">Return and Refund Policy</a>
									</li>
									<li>
										<a href="?">Benefits</a>
									</li>
									<li>
										<a href="?">Contact us </a>
									</li>
								</ul>
							</div>
							<div className={style.column}>
								<h4>Customer Support</h4>
								<ul className={style.list}>
									<li>
										<a href="?">Search</a>
									</li>
									<li>
										<a href="?">Billing terms &amp; condition</a>
									</li>
									<li>
										<a href="?">FAQ</a>
									</li>
								</ul>
							</div>
							<div className={style.column}>
								<h4>Contact Info</h4>
								<ul className={style.list}>
									<li>
										<strong>A.</strong> <span>7 Bell Yard, London, WC2A 2JR, United Kingdom.</span>
									</li>
									<li>
										<strong>P.</strong> <a href="tel:0123 456 7890">0123 456 7890</a>
									</li>
									<li>
										<strong>E.</strong> <a href="mailto:info@wedevs.com">info@wedevs.com</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={style.copyright}>
						<p>
							© 2023 <Link href="/">Wedevs + &lt;/&gt;.</Link> All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
