import {
	Link
} from "react-router-dom";
import AMLogo from "../amlogo";



function AMFooter() {
	return (
		<div className="row globalfooter">
			<div className="col-md-4 footercard sitelinks">
				<div>
					<Link className="menulink" to="/about">About . . . . . . . . . . . . . . . . . &#8594;</Link>
				</div>
				<div>
					<Link className="menulink" to="/menu">Menu  . . . . . . . . . . . . . . . . . &#8594;</Link>
				</div>
				<AMLogo />
			</div>
			<div className="col-md-4 footercard">
				<h3>Contact</h3>
				<div>
					<h4>Location</h4>
					<h3>
						Koratty,
						<br/>
						Thrissur 68363
					</h3>
				</div>
				<div className="mt-5">
					<h5>Call Us/whatsapp</h5>
					<a href="https://wa.me/9400459911" target="_blank" rel="noopener noreferrer">
						<h4>9400459911</h4>
					</a>
				</div>
			</div>
			<div className="col-md-4 footercard">
				<div>
					<h3>Follow</h3>
					<a href="https://www.instagram.com/assalmalabari.kodakara/" target="_blank" rel="noopener noreferrer">
						<h4>assalmalabari.kodakara</h4>
					</a>
					<a href="https://www.facebook.com/assalmalabari.restaurant.kodakara" target="_blank" rel="noopener noreferrer">
						<h4>assalmalabari.restaurant.kodakara</h4>
					</a>
				</div>
			</div>
		</div>
	)
}

export default AMFooter;