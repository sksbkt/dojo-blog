const BlogList = ({ blogs, title, handleDelete }) => {

    //? we can get props both ways 
    // const blogs = props.blogs;
    // const title = props.title;
    return (<div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <button onClick={() => { handleDelete(blog.id) }}> Delete blog</button>
            </div>
        ))}
    </div>);
}

export default BlogList;