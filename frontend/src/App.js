import { useState } from 'react';
import TodoInput from './components/TodoInput';
import Login from './components/Login'
import Signup from './components/SignUpForm';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {user ?
      <TodoInput />
    :
    <Signup /> && <Login />}
      
    </div>
  );
}

export default App;
