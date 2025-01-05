import { onBeforeMount, onBeforeUnmount, ref } from "vue";

export const useWidth = () => {
  const xs = 361;
  const sm = 640;
  const md = 768;
  const lg = 1024;
  const xl = 1280;
  const xxl = 1536;
  const screenWidthSize = ref<string>("");
  const screenWidth = ref<number>(0);

  const handleScroll = () => {
    screenWidth.value = window.innerWidth;
    if (screenWidth.value < xs) {
      screenWidthSize.value = "xxs";
    } else if (screenWidth.value >= xs && screenWidth.value < sm) {
      screenWidthSize.value = "xs";
    } else if (screenWidth.value >= sm && screenWidth.value < md) {
      screenWidthSize.value = "sm";
    } else if (screenWidth.value >= md && screenWidth.value < lg) {
      screenWidthSize.value = "md";
    } else if (screenWidth.value >= lg && screenWidth.value < xl) {
      screenWidthSize.value = "lg";
    } else if (screenWidth.value >= xl && screenWidth.value < xxl) {
      screenWidthSize.value = "xl";
    } else if (screenWidth.value >= xxl) {
      screenWidthSize.value = "2xl";
    }
  };

  onBeforeMount(() => {
    handleScroll();
    window.addEventListener("resize", () => handleScroll());
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", () => handleScroll());
  });

  return { screenWidth, screenWidthSize, sm, md, lg, xl, xxl };
};
