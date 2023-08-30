import { gql } from "@apollo/client/core";

export const findAllBooks = gql`
  query findAllBooks($categoriaId: Int, $titulo: String) {
    livros(categoriaId: $categoriaId, titulo: $titulo) {
      id
      slug
      titulo
      imagemCapa
      opcoesCompra {
        id
        preco
        formatos
      }
    }
  }
`;
