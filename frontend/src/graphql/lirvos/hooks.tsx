import { ICategoria } from "../../interfaces/ICategoria";
import { ILivro } from "../../interfaces/ILivro";
import { useQuery } from "@apollo/client/react";
import { findAllBooks } from "./queries";

export const useLivros = (categoria: ICategoria) => {
  return useQuery<{ livros: ILivro[] }>(findAllBooks, {
    variables: {
      categoriaId: categoria.id,
    },
  });
};
