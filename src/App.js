// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Projects from './Projects';
import Calculator from './Calculator';
import GameOfLife from './GameOfLife';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="heading">Konstantin Dyachenko. Сайт визитка</h1>
          <nav>
            <ul>
              <li><Link to="/">◐ Главная</Link></li>
              <li><Link to="/projects">◐ Проекты</Link></li>
              <li><Link to="/calculator">◐ Калькулятор</Link></li>
              <li><Link to="/game-of-life">◐ Game Of Life</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <h2>Обо мне</h2>
                <p>Энтузиаст разработки игр на Unity с 3-летним опытом работы и опубликованной игрой в App Store. Обладаю опытом работы с компьютерным зрением и страстью к играм, что позволяет мне привносить инновации в обучение. Люблю работать с детьми, делиться своими знаниями и радоваться их успехам. Готов стать преподавателем в разработке игр и внести свой вклад в воспитание нового поколения талантливых разработчиков. 
Источник : <Link to="https://skyeng.ru/teachers/details/21985611">Школа английского языка Skyeng</Link></p>
              </>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/calculator" element={<Calculator />} /> 
            <Route path="/game-of-life" element={<GameOfLife />} />
          </Routes>
        </main>
        <footer>
          <p>Свяжитесь со мной: k.dyachenko@sibstrin.ru</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
