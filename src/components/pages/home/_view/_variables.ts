import type { UseQueryReturn } from "@vue/apollo-composable";
import { computed, reactive } from "vue";

export const filters = reactive({
  type: "all",
  year: 2024,
  note: "none",
  currentPage: 1,
});

export const Variables = (
  query: UseQueryReturn<
    any,
    { filmsType: string; filmsYear: number; filmsNote: string; page: number }
  >
) => {
  const pagination = computed(() => {
    if (
      query.result &&
      query.result.value &&
      query.result.value.getFilmsByType &&
      query.result.value.getFilmsByType.page
    ) {
      return query.result.value.getFilmsByType.page;
    }
    return {};
  });
  const data = computed(() => {
    if (
      query.result &&
      query.result.value &&
      query.result.value.getFilmsByType &&
      query.result.value.getFilmsByType.data
    ) {
      return query.result.value.getFilmsByType.data;
    }
    return [];
  });

  return {
    data,
    pagination,
  };
};
