// import { useState } from 'react';
// const Home = () => {
//     // let name = "Reeve";
//     const [name, setName] = useState('Reeve');
//     const handleClick = () => {
//         // console.log("Hello Elon Musk.");
//         // name = "ER Musk";
//         // console.log(name);
//         setName('ER Musk');
//     }

//     // const handleClickAgain = (name,e) =>{
//     //     console.log('Hello ' + name , e.target);
//     // }
//     return (
//         <div className="content">
//             <h1>Home</h1>
//             <p>{ name }</p>
//             <button onClick={handleClick}>Click Me</button>
//             {/* <button onClick={(e) => {
//                 handleClickAgain("Elon Musk",e);
//             }}>Click me again.</button> */}
//         </div>
//     );
// }
 
// export default Home;

// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     {title: "blog 1", body: "lorem ipsum 123", author: "Rick", id: 1},
    //     {title: "blog 2", body: "lorem ipsum 1234", author: "Rick", id: 2},
    //     {title: "blog 3", body: "lorem ipsum 1235", author: "Ricky", id: 3}
    // ]);

    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // const [name, setName] = useState("king");

    // const handleDelete = (id) => {
    //     let tempBlogs = blogs.filter((blog) => id !== blog.id);
    //     setBlogs(tempBlogs);
    // }

    // useEffect(() => {
    //     console.log("Use effect ran.");
    //     console.log(name);
    // },[name, blogs]);   //can be one or any number of items

    // useEffect(() => {
    //     fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             if(!res.ok){
    //                 throw Error("Could not fetch data!")
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             setBlogs(data)
    //             setIsPending(false);
    //             setError(null);
    //         })
    //         .catch(err => {
    //             setIsPending(false);
    //             setError(err.message);
    //         })
    // }, []);

    const {data: blogs, isPending, error} = useFetch('http://localhost:9000/blogs');

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Rick')} title="Rick's Blogs!"/> */}
            {/* <button onClick={() => setName("cobra")}>Change name</button>
            <p>{name}</p> */}

            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Rick')} title="Rick's Blogs!"/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Ricky')} title="Ricky's Blogs!"/>}

        </div>
    );
}

export default Home;