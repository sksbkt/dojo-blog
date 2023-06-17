import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../Helpers/useFetch";

const BlogDetails = () => {
    const { id } = useParams();

    const API_URI = process.env.REACT_APP_API_URI;
    const { data: blog, isPending, error } = useFetch(API_URI + '/blogs/' + id);
    //? replaced with useNavigation
    // const history = useHistory();
    const navigate = useNavigate();
    const handleClick = () => {
        fetch(API_URI + '/blogs/' + blog.id, {
            method: "DELETE"
            //? instead of using useNavigation we were using history
            // }).then(() => { history.push('/') })
        }).then(() => { navigate('/') })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (<article>
                <h2>{blog.title}</h2>
                <p>written by: {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>)}
        </div>
    );
}

export default BlogDetails;