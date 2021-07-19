import assal_title from '../../img/assal_title.svg';


export default function Nav() {
	return (
		<div className="globalnav">
			<div className="row top-banner">
				<div className="col-6 left-item">
					Pickup/Home delivery
				</div>
				<div className="col-6 right-item">
					Order Here!
				</div>
			</div>
			<div className="row logo-menu">
				<div className="col-6">
					<img src={assal_title} className="AMTitleImage" alt="title" />
				</div>
				<div className="col-4">
				</div>
				<div className="col-2">
				</div>
			</div>
		</div>
	)
}