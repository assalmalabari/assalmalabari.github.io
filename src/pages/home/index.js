import AMHeader from '../../components/amheader';
import AMFooter from '../../components/amfooter';

import HomeContent from './home_content';

function Home() {
	return (
		<div className="container-fluid">
			<AMHeader />
			<HomeContent/>
			<AMFooter/>
		</div>
	)
};


export default Home;