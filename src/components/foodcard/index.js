
function AMFoodCard({ cardImage, cardLabel }) {
	return (
		<div className="foodcard">
			<div>
				<img alt="cardimage" src={cardImage} />
			</div>
			<div className="label">{cardLabel}</div>
		</div>
	)
}

export default AMFoodCard;