import { Link } from "react-router-dom";


function AMHomeMenuButton() {
	return (
		<Link
			className="am-home-menu-button"
			to="/menu"
		>
			Menu <span className="am-link-arrow"> &#8594; </span>
		</Link>
	)
}

export default AMHomeMenuButton;