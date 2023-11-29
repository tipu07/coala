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
						<div className={`h2 ${style.h2}`}>
							Subscribe to <span>our newsletter</span>
						</div>
						<form action="" method="post">
							<input type="text" name="" id="" placeholder="Email Address" />
							<button type="submit" className={style.site_btn} aria-label="Submit"></button>
						</form>
					</div>
					<div className={style.mid_blk}>
						<div className={style.wrapper}>
							<div className={style.column}>
								<Logo />
								<ul className={style.social_list}>
									<li>
										<a href="?" target="_blank" aria-label="Twitter">
											<Image width={100} height={100} src={SocialTwitter} alt="" />
										</a>
									</li>
									<li>
										<a href="?" target="_blank" aria-label="Facebook">
											<Image width={100} height={100} src={SocialFacebook} alt="" />
										</a>
									</li>
									<li>
										<a href="?" target="_blank" aria-label="Linkedin">
											<Image width={100} height={100} src={SocialLinkedin} alt="" />
										</a>
									</li>
									<li>
										<a href="?" target="_blank" aria-label="Instagram">
											<Image width={100} height={100} src={SocialInstagram} alt="" />
										</a>
									</li>
								</ul>
							</div>
							<div className={style.column}>
								<div className={`h4 ${style.h4}`}>Quick Links</div>
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
								<div className={`h4 ${style.h4}`}>Customer Support</div>
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
								<div className={`h4 ${style.h4}`}>Contact Info</div>
								<ul className={style.list}>
									<li>
										<strong>A.</strong>{" "}
										<span>
											7 Bell Yard, London, <br /> WC2A 2JR, United Kingdom.
										</span>
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
