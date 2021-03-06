import { LINKS } from '../../constants';
import assal_title from '../../img/assal_title.svg';


export default function Nav() {
	return (
		<div className="globalnav">
			<a href={LINKS.WhatsApp.Link} target="_blank" rel="noopener noreferrer">
				<div className="row top-banner">
					<div className="col-6 left-item">
						<b>Pickup/Home delivery</b>
					</div>
					<div className="col-6 right-item">
						<b>Order Here!</b>
					</div>
				</div>
			</a>
			<div className="row logo-menu">
				<div className="col-6">
					<a
						href="/">
						<img src={assal_title} className="AMTitleImage" alt="title" />
					</a>
				</div>
				<div className="col-4">
				</div>
				<div className="col-2">
				</div>
			</div>
		</div>
	)
}