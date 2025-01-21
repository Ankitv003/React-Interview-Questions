	export default function ColorCard({color,index}) {
		return (
			<div className="color-card" style={{ background:color }}>
				<p>
					<span>{index}.</span> {color}
				</p>
			</div>
		)
	}
