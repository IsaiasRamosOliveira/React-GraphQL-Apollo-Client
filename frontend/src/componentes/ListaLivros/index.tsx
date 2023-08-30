import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import { ICategoria } from "../../interfaces/ICategoria";
import CardLivro from "../CardLivro";
import "./ListaLivros.css";
import { useState } from "react";
import { useLivros } from "../../graphql/lirvos/hooks";

interface ListaLivrosProps {
  categoria: ICategoria;
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const [textoBusca, setTextoDaBusca] = useState("");

  const { data, refetch } = useLivros(categoria);
  const buscarLivros = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textoBusca) {
      refetch({
        categoriaId: categoria.id,
        titulo: textoBusca,
      });
    }
  };
  return (
    <section style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}>
      <form onSubmit={buscarLivros}>
        <AbCampoTexto
          value={textoBusca}
          onChange={setTextoDaBusca}
          placeholder="Digite o título"
        />
        <div style={{ marginTop: "16px" }}>
          <AbBotao texto="Buscar" />
        </div>
      </form>
      <div className="livros">
        {data?.livros?.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaLivros;
