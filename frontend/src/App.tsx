import './App.scss';
import AppRouter from './components/appRouter/AppRouter';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
