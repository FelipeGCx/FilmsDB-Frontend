import { watch } from "vue";
import { filters } from "./_variables";
import type { UseQueryReturn } from "@vue/apollo-composable";

export const Actions = (
  query: UseQueryReturn<
    any,
    { filmsType: string; filmsYear: number; filmsNote: string; page: number }
  >
) => {
  watch(
    () => filters,
    () => {
      query.refetch({
        filmsType: filters.type,
        filmsYear: filters.year,
        filmsNote: filters.note,
        page: filters.currentPage,
      });
    },
    {
      deep: true,
    }
  );

  const handlerChangePage = (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    filters.currentPage = page;
  };

  return {
    handlerChangePage,
  };
};
