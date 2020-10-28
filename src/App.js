import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';

function App() {
  return (
    <>
    <main className="body">
      <div className=".header">
        <Header />
      </div>
      <div>
        <ImageList images={images}/>
      </div>
    </main>
    </>
  );
}

export default App;
