
function AMFoodCard({ cardImage, cardLabel }) {
	return (
		<div className="foodcard">
			<img alt="cardimage" src={cardImage} />
			<span>{cardLabel}</span>
		</div>
	)
}

export default AMFoodCard;