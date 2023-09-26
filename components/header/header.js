import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
// import Navigation from "./navigation"
import Logo from "../logo"
import Link from "next/link"

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
					<button type="button" className={`${style.toggle} ${navActive ? style.active : ""}`} onClick={navToggleHandle}>
						<span></span>
					</button>
					{/* <Navigation navActive={navActive} /> */}
				</div>
				<Link href="/contact" className={`${style.site_btn} ${style.header_btn}`}>
					Let&lsquo;s talk
				</Link>
			</header>
		</>
	)
}
