import {
	Link
  } from "react-router-dom";
  


function AMFooter() {
	return (
		<div className="row globalfooter">
			<div className="col-md-4 footercard sitelinks">
				<div>
				<Link to="/about">About</Link> . . . . . . . . . . . . . . . . . {"->"}
				</div>
				<div>
				<Link to="/menu">Menu</Link>  . . . . . . . . . . . . . . . . . {"->"}
				</div>
			</div>
			<div className="col-md-4 footercard">
				<h3>Contact</h3>
				<div>
					<h4>Location</h4>
					<h3>Koratty, Thrissur 68363</h3>
				</div>
				<div>
					<h5>Call Us/whatsapp</h5>
					<h4>998363937398</h4>
				</div>
			</div>
			<div className="col-md-4 footercard">
				<div>
					<h3>Follow</h3>
					<h4>Call Us/whatsapp</h4>
					<h4>998363937398</h4>
				</div>
			</div>
		</div>
	)
}

export default AMFooter;