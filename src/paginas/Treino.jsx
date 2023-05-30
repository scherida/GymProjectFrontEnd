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
        <>
          <div>
            <h2>Formulário Treinos</h2>
            <form>
              <label for="nomeAparelho">Nome Treino: </label>
              <input type="text" id="nomeAparelho" name="nomeAparelho"/><br />
              <label for="descricao">Duração: </label>
              <input type="text" id="descricao" name="descricao" multiple/><br />
              <label for="descricao">Exercícios: </label>
              <input type="text" id="descricao" name="descricao" multiple/><br />
              <label for="descricao">Usuário: </label>
              <input type="text" id="descricao" name="descricao" multiple/><br />
              <button>Salvar</button>
            </form>
            <br />
            {getTabela()}
          </div>      
        </>
    );
}

export default Treino;