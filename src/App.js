import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <Profile />
    </div>
  )
}

export default App
