import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoMainBanner, PhotoOurWork, PhotoShowcase07 } from "@/components/images"

export default function Match() {
	return (
		<>
			<section id={style.match}>
				<div className={style.block_01}>
					<div className={style.contain}>
						<div className={`${style.content} text-center`}>
							<h2>
								Build <span>More Trust</span>
							</h2>
							<h5>We&lsquo;ve done it before, and we&lsquo;ll do it again.</h5>
						</div>
						{/* <div className={style.image}>
							<Image width={1000} height={800} src={PhotoOurWork} alt="" />
						</div> */}
						<div className={style.video}>
							<video muted={true} loop={true} autoPlay={true} playsInline="playsinline" preload="metadata">
								<source src="https://cdn.cuberto.com/cb/projects/riyadh/cover.mp4" type="video/mp4" />
							</video>
						</div>
						<p>As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.</p>
					</div>
				</div>
				<div className={style.block_02}>
					<div className={style.contain}>
						<div className={style.wrapper}>
							<h2>Creative Design</h2>
							<div className={style.image}>
								<Image width={1000} height={800} src={PhotoShowcase07} alt="" />
							</div>
						</div>
						<div className={style.content}>
							<p>Immerse your brand in a world of captivating aesthetics with our creative design expertise.</p>
							<p>Elevate your digital presence with our creative design prowess. From sleek interfaces to immersive experiences, we blend aesthetics with functionality, ensuring your brand stands out in the online landscape.</p>
						</div>
					</div>
				</div>
				<div className={style.block_03}>
					<div className={style.contain}>
						<h2>
							<em>Creativity</em>
							<span>meets technology</span>
						</h2>
						<div className={style.image_blk}>
							<div className={style.image}>
								<Image width={1000} height={800} src={PhotoMainBanner} alt="" />
							</div>
							<div className={style.image}>
								<Image width={1000} height={800} src={PhotoOurWork} alt="" />
							</div>
						</div>
						<p>Embark on a digital journey where creativity meets technology at Wedevs. Our team seamlessly integrates innovative design with cutting-edge development, crafting solutions that redefine the digital experience.</p>
					</div>
				</div>
			</section>
		</>
	)
}
