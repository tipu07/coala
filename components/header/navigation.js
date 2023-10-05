import Link from "next/link"
import style from "@/styles/scss/web.module.scss"
import { useRouter } from "next/router"
import Image from "next/image"
import { SocialFacebook, SocialInstagram, SocialLinkedin, SocialTwitter } from "../images"

export default function Navigation(props) {
	const { navActive, toggleClick } = props
	const router = useRouter()
	return (
		<>
			{/* <nav id={style.nav}>
				<ul id={style.nav_list} className={`${navActive ? style.active : ""}`}>
					<li>
						<Link href="/" className={router.pathname === "/" ? style.active : ""}>
							Home
						</Link>
					</li>
					<li>
						<Link href="/about" className={router.pathname === "/about" ? style.active : ""}>
							About us
						</Link>
					</li>
					<li>
						<Link href="/work" className={router.pathname === "/work" ? style.active : ""}>
							Work
						</Link>
					</li>
					<li>
						<Link href="/services" className={router.pathname === "/services" ? style.active : ""}>
							Services
						</Link>
					</li>
					<li>
						<Link href="/contact" className={`${style.site_btn} ${style.round}`}>
							Contact us
						</Link>
					</li>
				</ul>
			</nav> */}
			<div id={style.navigation} className={`${navActive ? style.active : ""}`}>
				<button type="button" className={`${style.toggle} ${navActive ? style.active : ""}`} onClick={toggleClick}>
					<span></span>
				</button>
				<div id={style.wrapper}>
					<nav>
						<ul id={style.nav_list}>
							<li>
								<Link href="/" className={router.pathname === "/" ? style.active : ""} onClick={toggleClick}>
									Home
								</Link>
							</li>
							<li>
								<Link href="/about" className={router.pathname === "/about" ? style.active : ""} onClick={toggleClick}>
									About us
								</Link>
							</li>
							<li>
								<Link href="/work" className={router.pathname === "/work" ? style.active : ""} onClick={toggleClick}>
									Work
								</Link>
							</li>
							<li>
								<Link href="/services" className={router.pathname === "/services" ? style.active : ""} onClick={toggleClick}>
									Services
								</Link>
							</li>
							<li>
								<Link href="/contact" className={router.pathname === "/contact" ? style.active : ""} onClick={toggleClick}>
									Contact us
								</Link>
							</li>
						</ul>
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
					</nav>
				</div>
			</div>
		</>
	)
}
