import axios from 'axios';
import { useState, useEffect } from 'react';

function Usuario(){
    const[usuarios, setUsuario] = useState([]);

    function getAparelhos(){
      axios.get("http://localhost:3022/academia/usuarios/").then((res)=>{
        console.log(res.data);
        setUsuario(res.data);
      });
    }
    useEffect(getAparelhos, []);

    function getLinhas(){
      const linhas = [];
      for(let i = 0; i < usuarios.length; i++){
        const usuario = usuarios[i];
        linhas[i] =  <tr>
            <td>{usuario.codigo}</td>
            <td>{usuario.cpf}</td>
            <td>{usuario.nomeUsuario}</td>
            <td>{usuario.altura}</td>
            <td>{usuario.peso}</td>
            <td>{usuario.telefone}</td>
            <td>{usuario.dataNascimento}</td>            
            <td>{usuario.dataInicio}</td>       
            <td>treinos</td>
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
                <th>CPF</th>
                <th>Nome Usuário</th>
                <th>Altura</th>
                <th>Peso</th>
                <th>Telefone</th>                 
                <th>Data Nascimento</th>               
                <th>Data inicio</th>                
                <th>Treinos</th>
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
              <label for="nomeAparelho">CPF: </label>
              <input type="text" id="nomeAparelho" name="nomeAparelho"/><br />
              <label for="nomeAparelho">Nome Usuário: </label>
              <input type="text" id="nomeAparelho" name="nomeAparelho"/><br />
              <label for="descricao">Altura: </label>
              <input type="text" id="descricao" name="descricao" multiple/><br />
              <label for="descricao">Peso: </label>
              <input type="text" id="descricao" name="descricao" multiple/><br />
              <label for="descricao">Telefone: </label>
              <input type="text" id="descricao" name="descricao" multiple/><br />
              <label for="descricao">Data Nascimento: </label>
              <input type="text" id="descricao" name="descricao" multiple/><br />
              <label for="descricao">Data inicio: </label>
              <input type="text" id="descricao" name="descricao" multiple/><br />
              <label for="descricao">Treinos: </label>
              <input type="text" id="descricao" name="descricao" multiple/><br />
              <button>Salvar</button>
            </form>
            <br />
            {getTabela()}
          </div>      
        </>
    );
}

export default Usuario;