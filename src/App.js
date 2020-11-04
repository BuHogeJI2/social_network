import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <Profile />
    </div>
  );
}

export default App;
