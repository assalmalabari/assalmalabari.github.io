import {
	Link
} from "react-router-dom";

import logo from '../../img/assal_logo.svg';
import assal_title from '../../img/assal_title.svg';


function AMHeader() {
	return (
		<div className="row AMHeader">
			<div className="row g-0">
				<div className="col-md-12 bannerHolder">
				</div>
			</div>
			<div className="row gy-0 logo-holder">
				<div className="col-md-12">
					<div className="row">
						<div className="col-md-12">
							<img src={logo} alt="logo" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<Link
								to="/">
								<img src={assal_title} alt="title" className="AMTitleImage" />
							</Link>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AMHeader;