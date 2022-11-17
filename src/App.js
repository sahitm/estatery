import './App.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Search />
      <PostList />
    </div>
  );
}

export default App;
