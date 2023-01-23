import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
import Coffee from './pages/Coffee';
import Background from './components/Background';
import Test from './pages/Test';


function App() {
    return (
        <BrowserRouter>
            <Background>
                <Routes>
                    <Route path="/coffee" element={<Coffee />} />
                    <Route path="/test" element={<Test />}/>
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Background>
        </BrowserRouter>
    );
}

export default App;
