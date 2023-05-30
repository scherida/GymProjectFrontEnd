import axios from 'axios';
import { useState, useEffect } from 'react';

function Aparelho(){
    const[aparelhos, setAparelhos] = useState([]);

    function getAparelhos(){
      axios.get("http://localhost:3022/academia/aparelhos/").then((res)=>{
        console.log(res.data);
        setAparelhos(res.data);
      });
    }
    useEffect(getAparelhos, []);

    function getLinhas(){
      const linhas = [];
      for(let i = 0; i < aparelhos.length; i++){
        const aparelho = aparelhos[i];
        linhas[i] =  <tr>
            <td>{aparelho.codigo}</td>
            <td>{aparelho.nomeAparelho}</td>
            <td>{aparelho.descricao}</td>
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
                <th>Nome Aparelho</th>
                <th>Descrição</th>
              </tr>
              {getLinhas()}
            </table>
      );
    }
  
    return (
        <>
          <div>
            <h2>Formulário Aparelhos</h2>
            <form>
              <label for="nomeAparelho">Nome Aparelho</label>
              <input type="text" id="nomeAparelho" name="nomeAparelho"/>
              <label for="descricao">Descrição</label>
              <input type="text" id="descricao" name="descricao" multiple/>
              <button>Salvar</button>
            </form>
            {getTabela()}
          </div>      
        </>
    );
}

export default Aparelho;