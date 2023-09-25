import Link from "next/link"
import style from "@/styles/scss/web.module.scss"
import { useRouter } from "next/router"

export default function Navigation(props) {
	const { navActive } = props
	const router = useRouter()
	return (
		<>
			<nav id={style.nav}>
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
						<Link href="/contact" className={`${style.site_btn} ${style.md} ${style.round}`}>
							Contact us
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
