import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function Terms() {
	return (
		<>
			<section id={style.terms}>
				<div className={style.contain}>
					<div className={style.text}>
						<h2>
							Privacy <span>Policy</span>
						</h2>
						<p>Your privacy matters. We safeguard your data, using it solely to enhance our services securely.</p>
					</div>
					<div className={style.content}>
						<p>At Wedevs, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or engage with our web services and development offerings.</p>

						<h3>1. Information We Collect:</h3>
						<p>We may collect personal information, such as names, email addresses, and contact details, when voluntarily provided by users during inquiries, registrations, or other interactions with our website and services. Additionally, we may automatically collect non-personal information, such as IP addresses, browser types, and device information, for analytical purposes.</p>
						<h3>2. How We Use Your Information:</h3>
						<p>We use the collected information to provide and improve our web services, respond to inquiries, personalize user experiences, and send relevant communications. Your data may also be used for internal analytics to enhance the functionality and performance of our website.</p>
						<h3>3. Information Sharing:</h3>
						<p>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or for essential service providers assisting in our operations. We ensure any third parties adhere to strict confidentiality and data protection standards.</p>
						<h3>4. Data Security:</h3>
						<p>We employ industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
						<h3>5. Cookies and Tracking:</h3>
						<p>Our website may use cookies and similar tracking technologies to enhance user experience and gather information about how our site is used. Users can control cookie preferences through browser settings; however, disabling cookies may impact certain features of the website.</p>
						<h3>6. Your Choices:</h3>
						<p>
							You have the right to access, correct, or delete your personal information. You may also choose to opt-out of receiving communications from us. To exercise these rights or for any privacy-related inquiries, please contact us at <a href="mailto:contact@wedevs.com">contact@wedevs.com</a>.
						</p>
						<h3>7. Changes to the Privacy Policy:</h3>
						<p>We may update this Privacy Policy periodically to reflect changes in our practices or for legal compliance. We encourage users to review this page for the latest information on how we handle and protect personal information.</p>
						<p>&nbsp;</p>
						<p>By using our website and services, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please refrain from using our website and services.</p>
						<p>Thank you for trusting Wedevs. Your privacy is our priority.</p>
					</div>
				</div>
			</section>
		</>
	)
}
