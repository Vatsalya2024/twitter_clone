import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    //Bem
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets*/}
      <Widgets/>
    </div>
  );
}

export default App;
