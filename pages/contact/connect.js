import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEnvelopeFill, IconMapMarker, IconPhone } from "@/components/images"

export default function Connect() {
	return (
		<>
			<section id={style.connect}>
				<div className={style.contain}>
					<div className={style.content}>
						<h2>
							<span>How can</span> we help?
						</h2>
						<p>You are welcome to ask questions by phone or contact us using our contact form. Your message will be sent directly to our team to be in touch with you shortly.</p>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconMapMarker} alt="" />
								</div>
								<div className={style.txt}>
									<span>
										13656 N 12th St <br />
										Tampa, FL 33613 New York
									</span>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconPhone} alt="" />
								</div>
								<div className={style.txt}>
									<a href="tel:813-523-8165">813-523-8165</a>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner}>
								<div className={style.ico}>
									<Image width={100} height={100} src={IconEnvelopeFill} alt="" />
								</div>
								<div className={style.txt}>
									<a href="mailto:sample1122@gmail.com">sample1122@gmail.com</a>
								</div>
							</div>
						</div>
					</div>
					<div className={style.form_wrapper}>
						<h3 className="text-center">
							Let&lsquo;s Start <br /> <span>The Conversation</span>
						</h3>
						<form action="" method="post">
							<div className="row">
								<div className="col-sm-6 col-12">
									<div className={style.form_blk}>
										<label htmlFor="">Name</label>
										<input type="text" name="" id="" placeholder="eg: John Wick" className={style.input} />
									</div>
								</div>
								<div className="col-sm-6 col-12">
									<div className={style.form_blk}>
										<label htmlFor="">Phone</label>
										<input type="text" name="" id="" placeholder="eg: 813-523-8165" className={style.input} />
									</div>
								</div>
								<div className="col-sm-6 col-12">
									<div className={style.form_blk}>
										<label htmlFor="">Subject</label>
										<input type="text" name="" id="" placeholder="eg: Lorem Ipsum Dollar" className={style.input} />
									</div>
								</div>
								<div className="col-sm-6 col-12">
									<div className={style.form_blk}>
										<label htmlFor="">Email Address</label>
										<input type="text" name="" id="" placeholder="eg: sample@gmail.com" className={style.input} />
									</div>
								</div>
								<div className="col-sm-12 col-12">
									<div className={style.form_blk}>
										<label htmlFor="">Comments</label>
										<textarea name="" id="" rows={6} placeholder="Type something here..." className={style.input}></textarea>
									</div>
								</div>
							</div>
							<div className={`${style.btn_blk} justify-content-center mt-5`}>
								<button type="submit" className={`${style.site_btn} ${style.simple} ${style.round}`}>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}
