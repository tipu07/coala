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
						<h2>
							Subscribe to <span>our newsletter</span>
						</h2>
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
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About us</Link>
									</li>
									<li>
										<Link href="/work">Work</Link>
									</li>
									<li>
										<Link href="/services">Our Services</Link>
									</li>
									<li>
										<Link href="/faq">FAQ&lsquo;s</Link>
									</li>
									<li>
										<Link href="/contact">Contact us </Link>
									</li>
								</ul>
							</div>
							<div className={style.column}>
								<h4>Customer Support</h4>
								<ul className={style.list}>
									<li>
										<Link href="/terms-conditions">Terms and conditions</Link>
									</li>
									<li>
										<Link href="/privacy-policy">Privacy policy</Link>
									</li>
									<li>
										<Link href="/refund-policy">Return and Refund Policy</Link>
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
