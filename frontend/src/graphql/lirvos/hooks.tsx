import { ILivro } from "../../interfaces/ILivro";
import { useQuery, useReactiveVar } from "@apollo/client";
import { findAllBooks } from "./queries";
import { filtroLivrosVar, livrosVar } from "./state";

export const useLivros = () => {
  const filtro = useReactiveVar(filtroLivrosVar);
  return useQuery<{ livros: ILivro[] }>(findAllBooks, {
    variables: {
      categoriaId: filtro.categoria?.id,
      titulo: filtro.titulo
    },
    onCompleted(data) {
      if (data.livros) {
        livrosVar(data.livros);
      }
    },
  });
};
