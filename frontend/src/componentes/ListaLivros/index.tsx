import { AbCampoTexto } from "ds-alurabooks";
import { ICategoria } from "../../interfaces/ICategoria";
import CardLivro from "../CardLivro";
import "./ListaLivros.css";
import { useEffect, useState } from "react";
import { useLivros } from "../../graphql/lirvos/hooks";
import { useReactiveVar } from "@apollo/client";
import { filtroLivrosVar, livrosVar } from "../../graphql/lirvos/state";

interface ListaLivrosProps {
  categoria: ICategoria;
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const [textoBusca, setTextoDaBusca] = useState("");

  useEffect(() => {
    filtroLivrosVar({
      ...filtroLivrosVar(),
      titulo: textoBusca.length >= 3 ? textoBusca : "",
    });
  }, [textoBusca, categoria]);

  filtroLivrosVar({
    ...filtroLivrosVar(),
    categoria,
  });

  const livros = useReactiveVar(livrosVar);

  useLivros();

  return (
    <section style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}>
      <form>
        <AbCampoTexto
          value={textoBusca}
          onChange={setTextoDaBusca}
          placeholder="Digite o título"
        />
      </form>
      <div className="livros">
        {livros.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaLivros;
