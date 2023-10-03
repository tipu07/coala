import React from "react"
import Head from "next/head"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Choose from "./index/choose"
import Match from "./services/match"
import Solution from "./services/solution"
import Differ from "./index/differ"

export default function Work() {
	return (
		<>
			<Head>
				<title>Our Services — Wedevs + &lt;/&gt;</title>
				<meta name="description" content="Coding the future, today!" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Match />
			<Solution />
			<Choose />
			<Differ />
			<Footer />
		</>
	)
}
