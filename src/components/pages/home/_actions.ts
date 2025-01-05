import { computed, watch } from "vue";
import { filters } from "./_variables";
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/lib/apollo.client";
import { getFilmsByType } from "@/graphql/queries";

provideApolloClient(apolloClient);

export const { result, loading, error, refetch } = useQuery(getFilmsByType, {
  filmsType: filters.type,
  filmsYear: filters.year,
  filmsNote: filters.note,
  page: filters.currentPage,
});

watch(
  () => filters,
  () => {
    refetch({
      filmsType: filters.type,
      filmsYear: filters.year,
      filmsNote: filters.note,
      page: filters.currentPage,
    });
  },
  { deep: true }
);

watch(error, (newError) => {
  if (newError) {
    const status = newError.graphQLErrors[0]?.extensions?.response?.status;
    if (status === 503 || status === 504) {
      // Manejo de errores 503 y 504
      console.error("Error de gateway, reintentando...");
      refetch();
    } else {
      console.error("Error:", newError);
    }
  }
});

export const films = computed(() => result.value.getFilmsByType);

export const handlerChangePage = (page: number) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  filters.currentPage = page;
};
