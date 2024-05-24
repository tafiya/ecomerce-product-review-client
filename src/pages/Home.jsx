import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Category from "../components/home/Category";

import Review from "../components/home/Review";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Category></Category>
            <Review></Review>
        </div>
    );
};

export default Home;