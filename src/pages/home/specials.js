import FoodCard from '../../components/foodcard';
import biriyaniImage from '../../img/specials/biriyani.jpeg';
import greeRiceImage from '../../img/food/gheerice.jpeg';

function AMSpecials() {
	return (
		<div className="row mb-5">
			<div className="col-md-4">
				<FoodCard
					cardLabel="കോഴിക്കോടൻ ബിരിയാണികൾ"
					cardImage={biriyaniImage}
				/>
			</div>
			<div className="col-md-4">
				<FoodCard
					cardLabel="നെയ്ച്ചോറും കോഴിയും"
					cardImage={greeRiceImage}
				/>
			</div>
			<div className="col-md-4">
				{/* <FoodCard
					cardLabel="കൈപത്തിരീം പോത്ത് കറിയും"
					cardImage={biriyaniImage}
				/> */}
			</div>
		</div>
	)
}

export default AMSpecials;
