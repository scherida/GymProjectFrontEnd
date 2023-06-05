import "./Aparelho.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Aparelho(){
    const[aparelho, setAparelho] = useState(null);
    const[aparelhos, setAparelhos] = useState([]);

    function novoAparelho(){
      setAparelho({
        nomeAparelho: "",
        descricao: "",
      });
      console.log(setAparelho);
    }

    function onChangeAparelho(campo, valor, id){
      setAparelho({
        codigo: id,
        [campo]: valor,
      });
    }

    function cancelar(){
      setAparelho(null);
    }

    function salvar(){
      if (aparelho.codigo){
        axios.put("http://localhost:3022/academia/aparelhos/" + aparelho.codigo, aparelho).then(()=>{
          setAparelhos(null);
          getAparelhos();
        })
      } else {
        axios.post("http://localhost:3022/academia/aparelhos/", aparelho).then(()=>{
          setAparelhos(null);
          getAparelhos();
        });
      }
    }

    function getAparelhos(){
      axios.get("http://localhost:3022/academia/aparelhos/").then((res)=>{
        setAparelhos(res.data);
      });
    }
    useEffect(getAparelhos, []);

    function excluir(id) {
      axios.delete("http://localhost:3022/academia/aparelhos/"+ id).then(() => {
        getAparelhos();
      });
    }

    function getLinha(aparelho){
      return (
        <tr>
          <td>{aparelho.codigo}</td>
          <td>{aparelho.nomeAparelho}</td>
          <td>{aparelho.descricao}</td>
          <td>
            <button type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Confirma a exclusão do aparelho " + aparelho.nomeAparelho + "?"
                )
              ) {
                excluir(aparelho.codigo);
              }
            }}>Excluir</button>
            <button onClick={()=>{
              setAparelho(aparelho);
            }}>Editar</button>
          </td>
        </tr>
      );
    }

    function getLinhas() {
      const linhas = [];
      for(let i = 0; i < aparelhos.length; i++){
        const aparelho = aparelhos[i];
        linhas[i] = getLinha(aparelho);
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

    function getFormulario(){
      return (
        <form>
          <label>Nome Aparelho</label>
          <input
            type="text"
            name="nomeAparelho"
            value={aparelho.nomeAparelho}
            onChange={(e) => {
              onChangeAparelho(e.target.name, e.target.value, aparelho.codigo);
            }}
          />
          <label>Descrição</label>
          <input
            type="text"
            name="descricao"
            value={aparelho.descricao}
            onChange={(e) => {
              onChangeAparelho(e.target.name, e.target.value, aparelho.codigo);
            }}
          />
          <button onClick={salvar}>Salvar</button>
          <button onClick={cancelar}>Cancelar</button>
        </form>
      );
    }

    function getConteudo() {
      if(aparelho){
        return getFormulario();
      }else{
        return (
          <>
          <button onClick={novoAparelho}>Nova área</button>
          {getTabela()}
          </>
        );
      }
    }

    return (
      <div className="aparelhos">
          <div className="conteudo">
            <h2>Formulário Aparelhos</h2>
            {getConteudo()}        
          </div>
      </div>
    );
}

export default Aparelho;