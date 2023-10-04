import React from "react"
import Head from "next/head"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import Terms from "./refundPolicy/terms"

export default function RefundPolicy() {
	return (
		<>
			<Head>
				<title>Return and Refund Policy — Wedevs + &lt;/&gt;</title>
				<meta name="description" content="Coding the future, today!" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Terms />
			<Footer />
		</>
	)
}
