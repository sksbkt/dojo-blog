import './Home.css'
import BlogList from '../../props/BlogList';
import useFetch from '../../Helpers/useFetch';

const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');
    console.log(data, data);



    return (<div className="home">
        {/* //? in JS it will first check the left side of the logic and if its false or null it wont continue on checking right side */}
        {error && <div>{error}</div>}
        {isPending && <div>loading...</div>}
        {data && <BlogList blogs={data} title={'All blogs'} />}
    </div>);
}

export default Home;