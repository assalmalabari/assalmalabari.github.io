
import {
	LINKS
} from "../../constants";


function WhatsappLink() {
	return (
		<a href={LINKS.WhatsApp.Link} target="_blank" rel="noopener noreferrer">
			<h2>{LINKS.WhatsApp.Label}</h2>
		</a>
	)
}


export default WhatsappLink;
