import axios from 'axios';
import { useState, useEffect } from 'react';

function Exercicio(){
        const[exercicios, setExercicio] = useState([]);

        function getExercicios(){
          axios.get("http://localhost:3022/academia/exercicios/").then((res)=>{
            console.log("passou por aqui");    
            console.log(res.data);
            setExercicio(res.data);
          });
        }
        useEffect(getExercicios, []);
    
        function getLinhas(){
          const linhas = [];
          for(let i = 0; i < exercicios.length; i++){
            const exercicio = exercicios[i];
            linhas[i] =  <tr>
                <td>{exercicio.codigo}</td>
                <td>{exercicio.nomeExercicio}</td>
                <td>{exercicio.serie}</td>
                <td>{exercicio.repeticao}</td>
                <td>{exercicio.carga}</td>                
                <td>APARELHO</td>               
                <td>TREINO</td>
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
                    <th>Nome Exercício</th>
                    <th>Série</th>
                    <th>Repetição</th>
                    <th>Carga</th>
                    <th>Aparelho</th>
                    <th>Treino</th>
                  </tr>
                  {getLinhas()}
                </table>
          );
        }
      
        return (
            <>
              <div>
                <h2>Formulário Exercícios</h2>
                <form>
                  <label for="nomeAparelho">Nome Exercício: </label>
                  <input type="text" id="nomeAparelho" name="nomeAparelho"/><br />
                  <label for="descricao">Série: </label>
                  <input type="text" id="descricao" name="descricao" multiple/><br />
                  <label for="descricao">Repetição: </label>
                  <input type="text" id="descricao" name="descricao" multiple/><br />
                  <label for="descricao">Carga: </label>
                  <input type="text" id="descricao" name="descricao" multiple/><br />
                  <label for="descricao">Aparelho: </label>
                  <input type="text" id="descricao" name="descricao" multiple/><br />
                  <label for="descricao">Treino: </label>
                  <input type="text" id="descricao" name="descricao" multiple/><br />
                  <button>Salvar</button>
                </form>
                <br />
                {getTabela()}
              </div>      
            </>
        );
}

export default Exercicio;