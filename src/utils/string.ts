export const isEmpty = (value: string | null | undefined
) => {
  return value === "" || value === " " || value === null || value === undefined;
};
