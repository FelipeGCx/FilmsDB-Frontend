import gql from "graphql-tag";

export const getFilmsByType = gql`
  query GetFilmsByType(
    $filmsType: String
    $filmsYear: Int
    $filmsNote: String
    $page: Int
  ) {
    getFilmsByType(
      filmsType: $filmsType
      filmsYear: $filmsYear
      filmsNote: $filmsNote
      page: $page
    ) {
      data {
        id
        type
        titleOG
        title
        year
        note
        language
        favorite
        category {
          id
          category
          svg
        }
        info
        poster
        season
        link
        saga {
          id
          saga
          svg
        }
      }
      error
      page {
        totalItems
        size
        totalPages
        currentPage
      }
    }
  }
`;
