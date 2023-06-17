import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    const API_URI = process.env.REACT_APP_API_URI;


    //? replaced with useNavigation
    // const history = useHistory();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        setIsPending(true);
        fetch(API_URI + '/blogs', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            //? deprecated
            // history.push('/');
            navigate('/');
        })
    }

    return (<div className="create">
        <h2>Add new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
                type="text"
                value={title} onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label>Blog body:</label>
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            ></textarea>
            <label>Blog author:</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            {!isPending && <button> Add blog</button>}
            {isPending && <button disabled > Loading...</button>}
        </form>
    </div >);
}

export default Create;