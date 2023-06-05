import "./Aparelho.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Treino(){
    const[treinos, setTreinos] = useState([]);

    function getTreinos(){
      axios.get("http://localhost:3022/academia/treinos/").then((res)=>{
        console.log(res.data);
        setTreinos(res.data);
      });
    }
    useEffect(getTreinos, []);

    function getLinhas(){
      const linhas = [];
      for(let i = 0; i < treinos.length; i++){
        const treino = treinos[i];
        linhas[i] =  <tr>
            <td>{treino.codigo}</td>
            <td>{treino.nomeTreino}</td>
            <td>{treino.duracao}</td>
            <td>exercicios</td>
            <td>usuario</td>
            <td>
              <button>Excluir</button>
              <button>Editar</button>
            </td>
          </tr>
      }
      return linhas;
    }

    function getTabela(){
      return (
        <table>
              <tr>
                <th>ID</th>
                <th>Nome Treino</th>
                <th>Duração</th>
                <th>Exercícios</th>
                <th>Usuário</th>
              </tr>
              {getLinhas()}
            </table>
      );
    }
  
    return (
      <div className="aparelhos">
          <div className="conteudo">
          <h2>Formulário Treinos</h2>
          {getTabela()}        
        </div>
      </div>
    );
}

export default Treino;