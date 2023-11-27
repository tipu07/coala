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
						<p>At Wedevs, we are dedicated to transforming your digital vision into reality. As a leading provider of comprehensive web services and development solutions, we specialize in web design, development, hosting, and more. Our team of skilled professionals is committed to delivering cutting-edge solutions tailored to meet your unique business needs.</p>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.serve_blk}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconBlock} alt="" />
								</div>
								<h2>Web Design</h2>
								<p>Create a captivating online presence with our expert web design services. Our designs are not only visually stunning but also user-friendly and optimized for a seamless user experience.</p>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.serve_blk}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconLayers} alt="" />
								</div>
								<h2>Web Development</h2>
								<p>From simple websites to complex web applications, our development team has the skills to turn your ideas into functional and scalable digital solutions.</p>
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
								<h2>E-Commerce Solutions</h2>
								<p>Take your business to the next level with our e-commerce solutions. We design and develop secure and user-friendly online stores tailored to your products and target audience.</p>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.serve_blk}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconBlock} alt="" />
								</div>
								<h2>Hosting and Maintenance</h2>
								<p>Ensure the performance and security of your website with our reliable hosting and maintenance services. Focus on your business while we take care of the technical details.</p>
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
							Explore More
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
