import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import RatingStars from "./ratingStars"

export default function ReviewCard(props) {
	const { text, name, image } = props

	return (
		<>
			<div className={style.folio_blk}>
				<RatingStars value={4} />
				<div className={style.text}>
					<p>{text}</p>
				</div>
				<div className={style.title}>
					<div className={`${style.name} h5 mb-0`}>{name}</div>
					<div className={`${style.ico} ${style.fill} ${style.round}`}>
						<Image width={200} height={200} src={image} alt="" />
					</div>
				</div>
			</div>
		</>
	)
}
