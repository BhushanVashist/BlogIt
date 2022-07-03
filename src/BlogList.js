// const BlogList = ({blogs,title,handleDelete}) => {
//     // const blogs = props.blogs;
//     // const title = props.title;
//     // console.log(props.blogs);
//     return (
//         <div className="blog-list">
//             <h1>{ title }</h1>
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p>Written by {blog.author}</p>
//                     <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
//                 </div>
//             ))}
//         </div>
//     );
// }
 
// export default BlogList;

import { Link } from 'react-router-dom';

const BlogList = ({blogs,title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props.blogs);
    return (
        <div className="blog-list">
            <h1 className="Heading">{ title }</h1>
            {blogs.map((blog) => (
                <div title={blog.title + ' by ' + blog.author} className="blog-preview" key={blog.id}>
                    <Link to={`/BlogDetails/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p>Written by {blog.author}</p>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;