import video from '../assets/5635-183850259_medium.mp4';

export default function DefaultPage() {
   return (
	   <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0, textAlign: 'center', paddingTop: '8rem' }}>
		   <div style={{ maxWidth: 600, width: '100%', margin: '0 auto' }}>
			   <h1 style={{ marginBottom: 16 }}>Welcome to FlowerPlant</h1>
			   <video src={video} loop autoPlay muted style={{ width: 320, maxWidth: '90vw', borderRadius: 16, boxShadow: '0 2px 12px rgba(60,120,60,0.12)', margin: '0 auto 24px auto', display: 'block' }} />
			   <p>
				   At FlowerPlant, we believe every home deserves a touch of green. Whether you’re a passionate gardener, a curious beginner, or someone who just bought their very first plant, our community is here to help you grow with confidence.
			   </p>
			   <p>
				   FlowerPlant is more than just a website — it’s a welcoming space where plant lovers can explore detailed plant care guides, discover new species, and manage their personal plant collections in one easy-to-use platform. Our goal is to make plant care simple, accessible, and enjoyable for everyone.
			   </p>
			   <p>
				   From understanding light requirements to mastering watering routines, we guide you step-by-step so your plants can thrive.
			   </p>
			   <div style={{ marginTop: 40, textAlign: 'center' }}>
				   <h2>Basic Plant Care Information</h2>
				   <p>Taking care of plants doesn’t have to be complicated. Here are the fundamental principles every plant parent should know:</p>
				   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
					   <div style={{ maxWidth: 500 }}>
						   <h3>Light</h3>
						   <ul style={{ textAlign: 'left', display: 'inline-block' }}>
							   <li>Most houseplants prefer bright, indirect light.</li>
							   <li>Low light means a space away from windows.</li>
							   <li>Indirect light means near a window but not in direct sun.</li>
							   <li>Too much direct sunlight can burn leaves.</li>
						   </ul>
						   <h3>Watering</h3>
						   <ul style={{ textAlign: 'left', display: 'inline-block' }}>
							   <li>Overwatering is the most common mistake.</li>
							   <li>Always check if the soil is dry before watering.</li>
							   <li>Ensure pots have drainage holes.</li>
							   <li>Different plants require different watering frequencies.</li>
						   </ul>
						   <h3>Soil</h3>
						   <ul style={{ textAlign: 'left', display: 'inline-block' }}>
							   <li>Well-draining soil is essential for healthy roots.</li>
							   <li>Cactus and succulent plants need sandy, fast-draining soil.</li>
							   <li>Tropical plants often prefer peat-based mixes with added perlite.</li>
						   </ul>
						   <h3>Environment</h3>
						   <ul style={{ textAlign: 'left', display: 'inline-block' }}>
							   <li>Most indoor plants thrive in:</li>
							   <ul>
								   <li>Temperatures between 18–25°C</li>
								   <li>Moderate humidity</li>
								   <li>Stable conditions (avoid cold drafts)</li>
							   </ul>
						   </ul>
						   <h3>Difficulty Levels</h3>
						   <ul style={{ textAlign: 'left', display: 'inline-block' }}>
							   <li><strong>Beginner</strong> – Easy to care for and forgiving</li>
							   <li><strong>Intermediate</strong> – Requires some attention</li>
							   <li><strong>Expert</strong> – Needs consistent monitoring and specific conditions</li>
						   </ul>
					   </div>
				   </div>
			   </div>
		   </div>
	   </div>
	   );
	}
