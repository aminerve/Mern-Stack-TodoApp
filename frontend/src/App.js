import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import AuthPage from './pages/AuthPage';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {user ?
      <TodoInput />
    :
    <AuthPage />}
      
    </div>
  );
}

export default App;
