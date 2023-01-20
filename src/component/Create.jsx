import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Niloy");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => navigate("/"));
  }

  return (
    <div className="create">
      <h1>Create new Blogs</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Body</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
        <select
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        >
          <option value="Niloy">Niloy</option>
          <option value="Nasim">Nasim</option>
          <option value="Saif">Saif</option>
        </select>
        <button>Submit Blog</button>
      </form>
    </div>
  );
};

export default Create;
