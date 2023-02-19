

import UserList from './components/UserList';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<UserList />}/>
    </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
