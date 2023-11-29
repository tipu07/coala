import React from "react"
import Head from "next/head"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Serve from "./index/serve"
import Reviews from "./index/reviews"
import Instagram from "./index/instagram"
import Core from "./about/core"
import Agency from "./about/agency"
import Team from "./about/team"

export default function About() {
	return (
		<>
			<Head>
				<title>About us — Wedevs + &lt;/&gt;</title>
				<meta name="description" content="Coding the future, today!" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<meta name="theme-color" content="#b4b4b3" />
				<link rel="icon" href="/images/favicon.png" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<Header />
			<Core />
			<Agency />
			<Team />
			<Serve />
			<Reviews />
			<Instagram />
			<Footer />
		</>
	)
}
