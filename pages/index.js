import React from "react"
import Head from "next/head"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Banner from "./index/banner"
import Serve from "./index/serve"
import Work from "./index/work"

export default function Index() {
	return (
		<>
			<Head>
				<title>Home — CoalaStudio</title>
				<meta name="description" content="We&#x27;re CoalaStudio, the go-to website development agency in Surrey, BC. We&#x27;re all about creating amazing websites that not only look incredible but also work like a charm. Let&#x27;s chat and take your website to the next level!" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Banner />
			<Serve />
			<Work />
			<Footer />
		</>
	)
}
