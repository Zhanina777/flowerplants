import plants1 from '../assets/plants1.jpg';
import plants2 from '../assets/plants2.jpg';
import plants3 from '../assets/plants3.jpg';

export default function About() {
  return (
		<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '2rem', paddingTop: '11rem', margin: '0 auto', textAlign: 'center' }}>
			<div style={{ width: '100%', maxWidth: '900px', textAlign: 'center' }}>
			<h1>About FlowerPlant</h1>

			{/* Mission: text left, image right */}
			<div style={{ display: 'flex', alignItems: 'center', marginBottom: 32, gap: 24, flexWrap: 'wrap' }}>
				<div style={{ flex: 1, minWidth: 220, textAlign: 'center' }}>
					<h2> Our Mission</h2>
					<p>
						At FlowerPlant, our mission is to make plant care simple, accessible, and enjoyable for everyone. We aim to empower plant enthusiasts, gardeners, and beginners with clear, reliable, and practical guidance so they can confidently care for their plants and build thriving green spaces. Through well-structured plant care guides and an easy-to-use platform, we help our community grow healthier plants and stronger connections with nature.
					</p>
				</div>
				<img src={plants1} alt="Our Mission" style={{ width: 220, borderRadius: 12, marginLeft: 'auto' }} />
			</div>

			{/* Vision: image left, text right */}
			<div style={{ display: 'flex', alignItems: 'center', marginBottom: 32, gap: 24, flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
				<div style={{ flex: 1, minWidth: 220, textAlign: 'center' }}>
					<h2> Our Vision</h2>
					<p>
						Our vision is to become a leading digital community for plant lovers — a trusted platform where people from all experience levels can learn, share, and manage their plant collections in one place. We strive to create a world where plant care knowledge is easy to understand, beautifully presented, and available to anyone who wants to bring more greenery into their life.
					</p>
					<p>
						We envision FlowerPlant as not only an information hub but also a supportive ecosystem that inspires sustainable living and deeper appreciation for nature.
					</p>
				</div>
				<img src={plants2} alt="Our Vision" style={{ width: 220, borderRadius: 12, marginRight: 'auto' }} />
			</div>

			{/* Purpose: text left, image right */}
			<div style={{ display: 'flex', alignItems: 'center', marginBottom: 32, gap: 24, flexWrap: 'wrap' }}>
				<div style={{ flex: 1, minWidth: 220, textAlign: 'center' }}>
					<h2> Our Purpose</h2>
					<p>
						The purpose of FlowerPlant is to bridge the gap between curiosity and confidence in plant care. Many people want to keep plants but feel overwhelmed by inconsistent advice or complicated instructions. FlowerPlant exists to simplify this process by providing:
					</p>
					<ul>
						<li>Structured and easy-to-follow plant care guides</li>
						<li>Clear details on light, watering, soil, and difficulty levels</li>
						<li>A user-friendly system for managing personal plant collections</li>
						<li>A welcoming space for both beginners and experienced plant enthusiasts</li>
					</ul>
					<p>
						Ultimately, our purpose is to help every user feel capable, informed, and inspired — turning plant care from a challenge into a rewarding experience. 
					</p>
				</div>
				<img src={plants3} alt="Our Purpose" style={{ width: 220, borderRadius: 12, marginLeft: 'auto' }} />
			</div>
			</div>
		</div>
	);
}
