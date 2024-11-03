import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Banner from './../Banner/Banner';
import { Outlet } from 'react-router-dom';

function Home() {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Categories categories={categories}></Categories>
            <Outlet />
        </div>
    )
}

export default Home
