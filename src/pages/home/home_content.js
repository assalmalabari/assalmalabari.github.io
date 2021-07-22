


import { Fragment } from 'react';
import WhatsappLink from '../../components/amwhatsapp';
import AMHomeMenuButton from '../../components/menu_button';
import AMSpecials from './specials';

const HOMETEXT = [
	"ഫ്ലേവർ ലാബ്സ് പ്രൈവറ്റ് ലിമിറ്റഡിന്റെ ആദ്യ റെസ്റ്റോറന്റ് സംരംഭമായ അസ്സൽ മലബാറി, ജൂലൈ 23 വെള്ളിയാഴ്ച  മുതൽ കൊടകര അങ്ങാടിയിൽ പ്രവർത്തനം ആരംഭിക്കുകയാണ്.",
	"മലബാർ വിഭവങ്ങളുടെ തനതു രുചി നിങ്ങളിലേക്ക് എത്തിക്കാനാണു ഞങ്ങൾ ലക്ഷ്യമിടുന്നത്. അതിനായി വർഷങ്ങളുടെ പാരമ്പര്യമുള്ള മലബാറി പാചകക്കാരുടെ സേവനം ഞങ്ങൾ ഉപയോഗപ്പെടുത്തുന്നു.",
	"ഇതിനൊപ്പം തന്നെ ഏവരുടെയും ഇഷ്ട അറേബ്യൻ വിഭവങ്ങളായ ഷവർമ, അൽ ഫഹാം, തന്തൂരി തുടങ്ങിയവയും, ഞങ്ങളുടേതായ സ്പെഷ്യൽ രുചിക്കൂട്ടിൽ അവതരിപ്പിക്കുന്നു."
]

function IntroText() {
	return (
		<Fragment>
			<p>
				{HOMETEXT[0]}
			</p>
			<p>
				{HOMETEXT[1] + HOMETEXT[2]}
			</p>
		</Fragment>
	)
}


function HomeContent() {
	return (
		<div className="container home-content">
			<div className="row">
				<div className="col-md-6">
					<IntroText />
					<AMHomeMenuButton/>
				</div>
				<div className="col-md-6 schedules">
					<div className="schedule-card">
						<h4>Working Hours</h4>
						<h2>
							<label>12<span>pm</span></label>
							&#8594;
							<label>10<span>pm</span></label>
						</h2>
					</div>
					<div className="schedule-card">
						<h5>Pickup + delivery only.</h5>
						<h5>Closed on Sundays</h5>
					</div>
					<div className="schedule-card">
						<h4>Location</h4>
						<h3>Kodakara, Thrissur, 680684</h3>
					</div>
					<div className="schedule-card">
						<h4>Call Us/whatsapp</h4>
						<WhatsappLink/>
					</div>
				</div>
			</div>
			<div className="row">
				<h2>Our Specials</h2>
			</div>
			<AMSpecials />
			<div className="row">
				<div className="col-md-12">
				</div>
			</div>
		</div>
	)
}

export default HomeContent;