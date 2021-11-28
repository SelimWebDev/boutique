import Header from '../components/Header.jsx';
import Banner  from '../components/Banner';

function Home(){
    return (
        <div className="Home-page">
            <Header></Header>
            <Banner title="Voltrider"></Banner>
        </div>
    )
}

export default Home;