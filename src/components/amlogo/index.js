import logo from '../../img/assal_logo.svg';
import assal_title from '../../img/assal_title.svg';

function AMLogo() {
	return (
		<div className="row minilogo mt-3 mb-5">
			<div>
			<img src={logo} alt="logo" className="logo"/>
			</div>
			<div>
			<img src={assal_title} alt="title"/>
			</div>
			<div>a bite of malabar</div>
		</div>
	)
}

export default AMLogo;