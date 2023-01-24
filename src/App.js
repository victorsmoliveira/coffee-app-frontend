import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Coffee from './pages/Coffee';
import Background from './components/Background';

function App() {
    return (
        <BrowserRouter>
            <Background>
                <Routes>
                    <Route path="/" element={<Coffee />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Background>
        </BrowserRouter>
    );
}

export default App;
