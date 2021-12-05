import { Component } from 'react';
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
			<div className="row menu-item-title">
				<h3 className="col-9 title-text">{item["Title"]}</h3>
				<div className="col-3"></div>
			</div>
		)

		let items = item["Items"].map((menu_item) => {
			return (
				<div className="row menu-item">
					<div key={menu_item["Item"]} className="col-9">{menu_item["Item"]}</div>
					<div key={menu_item["Price"]} className="col-3 item-price">&#8377;{menu_item["Price"]}</div>
				</div>
			)
		})
		return [title, ...items]
	})
}


function Menu(menuItems) {
	return (
		<div className="container-fluid">
			<div className="row menu ampage mt-3">

				<div className="col-md-1">
				</div>
				<div className="col-md-4">
					{build_menu(sortMenuLeft(menuItems))}
				</div>

				<div className="col-md-2">
				</div>
				<div className="col-md-4">
					{build_menu(sortMenuRight(menuItems))}
				</div>
				<div className="col-md-1">
				</div>

			</div>
			<AMFooter />
		</div>
	)
}

// const parseCSV = (data) => {
// 	const csvData = [];
// 	const lines = data.split("\n");
// 	for (let i = 0; i < lines.length; i++) {
// 		csvData[i] = lines[i].split(",");
// 	}
// 	return csvData;
//   };


function csvJSON(csv) {
	console.log("CSV String", csv)
	var lines = csv.split("\n");
	var result = [];
	var headers = lines[0].split(",");
	console.log(headers);
	headers = headers.map(item => item.replace(/\r/g, ''))
	for (var i = 1; i < lines.length; i++) {
		var obj = {};
		var currentline = lines[i].split(",");
		for (var j = 0; j < headers.length; j++) {
			obj[headers[j]] = currentline[j];
		}
		result.push(obj);
	}
	return result; //JSON
}


function sortCategory(items) {
	let result = [];
	let groupedItems = {}
	for (let index = 0; index < items.length; index++) {
		let item = items[index];
		if (item["Category"] in groupedItems) {
			groupedItems[item["Category"]].push(item);
		} else {
			groupedItems[item["Category"]] = [item];
		}
	}
	for (let categoryKey in groupedItems) {
		let structured = {
			"Title": categoryKey,
			"Items": groupedItems[categoryKey]
		};
		result.push(structured);
	}
	return result;
}

function filterMenuItems(side, items) {
	return items.filter(item => {
		return item["Side"] === side
	})
}

const sortMenuLeft = (items) => {
	const leftMenuItems = filterMenuItems("Left", items);
	const leftCategorizedItems = sortCategory(leftMenuItems);
	return leftCategorizedItems;
}

const sortMenuRight = (items) => {
	const leftMenuItems = filterMenuItems("Right", items);
	const leftCategorizedItems = sortCategory(leftMenuItems);
	return leftCategorizedItems;
}

function Loading() {
	return (
		<div className="container-fluid">
			<div className="row menu ampage mt-3">

				<div className="col-md-1">

					<h3>
						Loading...
					</h3>
				</div>
			</div>
		</div>
	)
}

export default class SmartMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			MenuItems: []
		}
	}
	componentDidMount = () => {
		console.log("Hello");
		try {
			fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRd9lbq61O7bB9QllJChkZG_zM-xcPFe5WsfAa4rC0t1bOnIKebng_rXg3GEbC2QNid5zn33dYqJWu5/pub?gid=0&single=true&output=csv')
				.then(data => data.text())
				// .then(data => parseCSV(data))
				.then(data => csvJSON(data))
				.then(data => {
					// window.setTimeout(() => {
						this.setState({
							MenuItems: data
						});
					// }, 3000);
				})
				.catch(err => {
					console.log("data Failed", err)
				})
		} catch (err) {
			console.log("data Failed", err)
		}
	}

	render = () => {
		return this.state.MenuItems.length > 0 ? Menu(this.state.MenuItems) : Loading();
	}
}