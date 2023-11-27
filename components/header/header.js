import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
// import Navigation from "./navigation"
import Logo from "../logo"
import Link from "next/link"
import Navigation from "./navigation"

export default function Header(props) {
	// const { pageTitle } = props
	const [navActive, setNavActive] = useState(false)
	const navToggleHandle = () => {
		setNavActive(!navActive)
	}

	return (
		<>
			<header id={style.header}>
				<div className={style.contain}>
					<Logo />
					{/* <Navigation navActive={navActive} /> */}
				</div>
				<div className={style.header_btn}>
					<div className={style.toggle_btn}>
						<strong className="fw_600">Menu</strong>
						<button type="button" className={`${style.toggle} ${navActive ? style.active : ""}`} onClick={navToggleHandle}>
							<span></span>
						</button>
					</div>
					<Link href="/contact" className={style.site_btn}>
						Let&lsquo;s talk
					</Link>
				</div>
			</header>
			<Navigation navActive={navActive} toggleClick={navToggleHandle} />
		</>
	)
}
