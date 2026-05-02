interface Theme {
  isAuto: boolean;
  theme: "auto" | "dark" | "light";
}

export function useTheme() {
  const theme = ref<Theme>({
    isAuto: true,
    theme: "auto",
  });
  return { theme };
}
