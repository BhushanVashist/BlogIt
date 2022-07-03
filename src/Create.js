import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ricky');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        
        setIsPending(true);

        fetch('http://localhost:9000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then( () => {
            console.log("Blog added");
            setIsPending(false);
            // history.go(-1);
            history.push("/");
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog.</h2>
            <form onSubmit={ handleSubmit }>
                <label>Add title</label>
                <input 
                    type="text" 
                    required
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value)}
                />

                <label>Blog Body:</label>
                <textarea
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>

                <label>Author</label>
                <select
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="Rick">Rick</option>
                    <option value="Ricky">Ricky</option>
                </select>
                {!isPending && <button>Add</button>}
                {isPending && <button disabled>Adding...</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}
 
export default Create;