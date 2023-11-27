import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function Terms() {
	return (
		<>
			<section id={style.terms}>
				<div className={style.contain}>
					<div className={style.text}>
						<h2>
							Terms <span>and conditions</span>
						</h2>
						<p>By using our services, you agree to our terms and conditions. Explore innovation with us.</p>
					</div>
					<div className={style.content}>
						<h4>1. Acceptance of Terms:</h4>
						<p>By accessing or using the services provided by Wedevs, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.</p>
						<h4>2. Service Description:</h4>
						<p>Wedevs provides web services and development solutions. The specifics of the services, including features, pricing, and terms, are outlined on our website. We reserve the right to modify or discontinue services at our discretion.</p>
						<h4>3. User Responsibilities:</h4>
						<p>Users are responsible for providing accurate information and complying with applicable laws. Any content submitted must not violate intellectual property rights or engage in illegal activities.</p>
						<h4>4. Payments and Billing:</h4>
						<p>Payment terms, including fees and billing cycles, are detailed on our website. Failure to pay may result in the suspension or termination of services.</p>
						<h4>5. Privacy and Data Security:</h4>
						<p>We prioritize the security and privacy of user data. Our Privacy Policy outlines the collection, use, and protection of personal information. By using our services, you consent to these practices.</p>
						<h4>6. Intellectual Property:</h4>
						<p>All content and intellectual property associated with our services are owned by Wedevs. Users are prohibited from reproducing or distributing our content without permission.</p>
						<h4>7. Termination:</h4>
						<p>Either party may terminate the agreement at any time with or without cause. Upon termination, users are responsible for outstanding fees, and certain provisions, such as intellectual property rights, will survive termination.</p>
						<h4>8. Limitation of Liability:</h4>
						<p>Wedevs is not liable for any indirect, consequential, or incidental damages. Our liability is limited to the amount paid for the specific service giving rise to the claim.</p>
						<h4>9. Changes to Terms:</h4>
						<p>We reserve the right to update or modify these terms at any time. Users are responsible for regularly reviewing the terms. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
						<h4>10. Governing Law:</h4>
						<p>These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through arbitration in accordance with the rules of the [Arbitration Association].</p>
						<p>&nbsp;</p>
						<p>By using Wedevs's web services and development solutions, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>
					</div>
				</div>
			</section>
		</>
	)
}
