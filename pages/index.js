import React from "react"
import Head from "next/head"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Banner from "./index/banner"
import Showcase from "./index/showcase"
import Serve from "./index/serve"
import Intro from "./index/intro"
import Reviews from "./index/reviews"
import Differ from "./index/differ"
import Choose from "./index/choose"
import Instagram from "./index/instagram"
import Studio from "./index/studio"

export default function Index() {
	return (
		<>
			<Head>
				<title>Home — Wedevs + &lt;/&gt;</title>
				<meta name="description" content="Coding the future, today!" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Banner />
			<Studio />
			<Serve />
			{/* <Intro /> */}
			<Showcase />
			<Reviews />
			<Differ />
			<Choose />
			<Instagram />
			<Footer />
		</>
	)
}
