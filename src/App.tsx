import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [noData, setNoData] = useState(false);

  const handleFilterPosts = () => {
    setIsLoading(true);
    setError('');
    setNoData(false);

    if (inputVal === '') {
      setError('Please enter a search value');
      setIsLoading(false);
      return;
    }

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const filteredPosts = res.data.filter((post: { body: string | string[]; }) => post.body.includes(inputVal));
        setPosts(filteredPosts);
        setIsLoading(false);
        if (filteredPosts.length === 0) {
          setNoData(true);
        }
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  return (
    <div id="app-wrapper">
      <h1>Search Posts</h1>
      <p>Search for posts by entering a search term below</p>
      <p>For example, try searching for "qui"</p>
      <p>Or, try searching for "qui est esse"</p>
      <Input 
        onChange={val => setInputVal(val)}
      />
      <Button 
        onClick={handleFilterPosts}
      />
      <p>Search Term: {inputVal}</p>
      <p>Results: {posts.length}</p>
      <p>Posts: </p>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {noData && <p>Not Found!</p>}
        {posts.map(post => (
          <Card
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
