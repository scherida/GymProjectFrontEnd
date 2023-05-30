import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./paginas/Home";
import Usuario from "./paginas/Usuario";
import Treino from './paginas/Treino';
import Exercicio from "./paginas/Exercicio";
import Aparelho from './paginas/Aparelho';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/usuario" element={<Layout><Usuario/></Layout>} />
        <Route path="/treino" element={<Layout><Treino/></Layout>} />
        <Route path="/exercicio" element={<Layout><Exercicio/></Layout>} />
        <Route path="/aparelho" element={<Layout><Aparelho/></Layout>} />
      </Routes>
    </>
  );
}

export default App;