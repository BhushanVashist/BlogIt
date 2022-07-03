import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:9000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:9000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log("blog deleted");
            history.push('/');
        })
    }


    return (
        <div className="blog-detail">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p className="author">{blog.author}</p>
                    <p className="content">{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;