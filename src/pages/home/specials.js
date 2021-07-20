import FoodCard from '../../components/foodcard';
import biriyaniImage from '../../img/specials/biriyani.jpeg';

function AMSpecials({ cardImage }) {
	return (
		<div className="row">
			<div className="col-md-4">
				<FoodCard
					cardLabel="കോഴിക്കോടൻ ബിരിയാണികൾ"
					cardImage={biriyaniImage}
				/>
			</div>
			<div className="col-md-4">
				<FoodCard
					cardLabel="കൈപത്തിരീം പോത്ത് കറിയും"
					cardImage={biriyaniImage}
				/>
			</div>
			<div className="col-md-4">
				<FoodCard
					cardLabel="നെയ്ച്ചോറും കോഴിയും"
					cardImage={biriyaniImage}
				/>
			</div>
		</div>
	)
}

export default AMSpecials;
