//Exemplo de componente interno, que não precisa dar import no início do arquivo e nem export no final
//Esse componente tem parâmetro que, no React, é chamado de props (abreviatura de properties)

import Noticia from "./components/Noticia";
import Noticias from "./components/Noticias";

//Porém, as props podem ser passadas como uma estrutura (variáveis passadas entre {})
const BoasVindas = ({ nome, veterano }) => {
  return (
    <>
      {
        veterano ? (
          <h1>E aí, meu amigo {nome}</h1>
        ) : (
          <h1>Seja bem-vindo(a) {nome}</h1>
        )
      }
    </>
  );
}

//Novo formato de assinatura de componente
const App = () => {
  return (
    <>
      {/* <h1>Hello World</h1>
      <h2>Teste</h2> */}
      {/* <BoasVindas nome="Natan" veterano/>
      <BoasVindas nome="Zé"/> */}
      <Noticias>
        <Noticia titulo="Título 1" descricao="Descrição" />
        <Noticia titulo="Título 2" descricao="Descrição" />
        <Noticia titulo="Título 3" descricao="Descrição" />
      </Noticias>
    </>
  );
}

export default App;