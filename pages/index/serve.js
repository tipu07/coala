import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import Link from "next/link"
import { IconBlock, IconCreative, IconLayers, PhotoBrandBlk_google, PhotoBrandCoinbase, PhotoBrandGrandHyatt, PhotoBrandJohnDeere, PhotoBrandVisa, PhotoBrandZoom } from "@/components/images"

export default function Serve() {
	return (
		<>
			<section id={style.serve}>
				<div className={style.contain}>
					<div className={style.content}>
						<h1 className="mb-4">
							What <span>we&lsquo;ll do</span>
						</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eveniet aut deserunt perspiciatis corrupti repellendus vero repellat voluptatum facere minus aliquam, alias tenetur voluptate nihil rem consequatur possimus porro perferendis.</p>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.serve_blk}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconBlock} alt="" />
								</div>
								<h2>Strategy</h2>
								<p>By gathering and analyzing data on market trends, consumer behavior, and competition, we can help you make informed decisions about your ecommerce strategy.</p>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.serve_blk}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconLayers} alt="" />
								</div>
								<h2>Marketing</h2>
								<p>We specialize in creating custom eCommerce stores tailored to your specific needs - customized themes, app integrations, and all the bells and whistles to make your brand stand out.</p>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.serve_blk}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconCreative} alt="" />
								</div>
								<h2>Technology</h2>
								<p>If you really want to level up, our custom web design solutions are where it&lsquo;s at. Your brand is unique, so it goes without saying, your e-commerce experience should be too!</p>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.serve_blk}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconCreative} alt="" />
								</div>
								<h2>E-Commerce</h2>
								<p>Supercharge your online sales with our data-driven eCommerce marketing strategies. We make ecommerce marketing so easy, even your cat could do it (if they had opposable thumbs).</p>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.serve_blk}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconBlock} alt="" />
								</div>
								<h2>Branding</h2>
								<p>Boost the ranking of your website by appearing higher on search engines through top-quality natural SEO and algorithm-driven content built for long-term success.</p>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.serve_blk}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconLayers} alt="" />
								</div>
								<h2>SEO Identity</h2>
								<p>Equip your brand with content that will break through the digital noise and a personalised social media strategy to increase customer retention rates by 77%.</p>
							</div>
						</div>
					</div>
					<div className={`${style.join_brand} text-center`}>
						{/* <p>Join over 2,000,000 teams worldwide that are using SkipTheDealers to get more done.</p> */}
						<div className={style.ul_outer}>
							<ul>
								<li>
									<div className={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandCoinbase} alt="" />
									</div>
								</li>
								<li>
									<div className={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandJohnDeere} alt="" />
									</div>
								</li>
								<li>
									<div className={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandGrandHyatt} alt="" />
									</div>
								</li>
								<li>
									<div className={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandBlk_google} alt="" />
									</div>
								</li>
								<li>
									<div className={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandVisa} alt="" />
									</div>
								</li>
								<li>
									<div className={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandZoom} alt="" />
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-center mt-5`}>
						<Link href="/services" className={`${style.site_btn} ${style.round}`}>
							Learn More
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
