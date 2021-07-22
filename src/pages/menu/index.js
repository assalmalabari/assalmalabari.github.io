import AMFooter from '../../components/amfooter';
import menudata from '../../factory/menu.json';



function build_menu_right() {
	let menu = menudata.slice(3, 5);
	return build_menu(menu);
}


function build_menu_left() {
	let menu = menudata.slice(0, 3);
	return build_menu(menu);
}


function build_menu(menu) {
	return menu.map((item) => {
		let title = (
			<div class="row menu-item-title">
				<h3 class="col-9 title-text">{item["Title"]}</h3>
				<div class="col-3"></div>
			</div>
		)

		let items = item["Items"].map((menu_item) => {
			return (
				<div class="row menu-item">
					<div class="col-9">{menu_item["Item"]}</div>
					<div class="col-3 item-price">&#8377;{menu_item["Price"]}</div>
				</div>
			)
		})
		return [title, ...items]
	})
}


export default function Menu() {
	return (
		<div className="container-fluid">
			<div class="row menu ampage mt-3">

				<div class="col-md-1">
				</div>
				<div class="col-md-4">
					{build_menu_left()}
				</div>

				<div class="col-md-2">
				</div>
				<div class="col-md-4">
					{build_menu_right()}
				</div>
				<div class="col-md-1">
				</div>

			</div>
			<AMFooter/>
		</div>
	)
}