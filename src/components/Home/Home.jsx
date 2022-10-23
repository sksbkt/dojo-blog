import './Home.css'
import { useState } from 'react';
import BlogList from '../props/BlogList';
import { useEffect } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);



    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => {

            fetch('http://127.0.0.1:5500/data/db.jsons')
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch results');
                    }
                    return res.json();
                }
                )
                .then(data => {
                    setError(null);
                    setBlogs(data['blogs']);
                    setIsPending(false);
                }).catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    }, []);


    return (<div className="home">
        {/* //? in JS it will first check the left side of the logic and if its false or null it wont continue on checking right side */}
        {error && <div>{error}</div>}
        {isPending && <div>loading...</div>}
        {blogs && <BlogList blogs={blogs} title={'All blogs'} handleDelete={handleDelete} />}
    </div>);
}

export default Home;