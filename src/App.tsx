import { useState, useEffect } from "react";
import { User } from "./libs/user";
import { Post } from "./libs/post";
import { getUserList, getPostListById } from "./libs/api";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const [currentUser, setCurrentUser] = useState<string>();
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getUserList().then((users) => setUsers(users));
  });

  useEffect(() => {
    if (currentUser) {
      getPostListById(currentUser).then((posts) => setPosts(posts));
    }
  }, [currentUser]);

  return (
    <div className="App">
      <div className="App-content">
        <h1>Hello Vite + React!</h1>
        <section>
          <h2>Users</h2>
          <input
            value={filter}
            type="text"
            placeholder="filter"
            onChange={(event) => {
              setFilter(event.target.value);
              setPosts([]);
            }}
          />
          <ul>
            {users
              .filter((user) => new RegExp(filter, "i").test(user.name))
              .map((user) => (
                <li key={user._id}>
                  <a
                    className="link--username"
                    href="#"
                    onClick={(evt) => {
                      evt.preventDefault();
                      setCurrentUser(user._id);
                    }}
                  >
                    {user.name}
                  </a>
                  &nbsp;
                  {user.description}
                </li>
              ))}
          </ul>
        </section>
        <section>
          <h2>Posts</h2>

          <ul>
            {posts.length === 0 ? (
              <li>No posts</li>
            ) : (
              posts.map((post) => <li key={post._id}>{post.content}</li>)
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
