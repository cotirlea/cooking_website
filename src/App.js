import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LogIn from './Screens/Main Screens/LogIn/LogIn';
import Main from './Screens/Main Screens/Main/Main';
import Reciepe from './Screens/Main Screens/Reciepe/Reciepe';

function App() {
  return (
     <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/main/:userString" element={<Main />} />
          <Route exact path="/reciepe/:data" element={<Reciepe />} />
        </Routes>
    </Router>
  );
}

export default App;
