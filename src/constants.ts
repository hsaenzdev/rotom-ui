import { theme } from "./styles/theme";

export const POWER_TYPE_COLORS = {
  bug: { backgroundColor: "#94BC4A", color: theme.palette.common.white },
  dark: { backgroundColor: "#736C75", color: theme.palette.common.white },
  dragon: { backgroundColor: "#6A7BAF", color: theme.palette.common.white },
  electric: { backgroundColor: "#E5C531", color: theme.palette.common.white },
  fairy: { backgroundColor: "#E397D1", color: theme.palette.common.white },
  fighting: { backgroundColor: "#CB5F48", color: theme.palette.common.white },
  fire: { backgroundColor: "#EA7A3C", color: theme.palette.common.white },
  flying: { backgroundColor: "#7DA6DE", color: theme.palette.common.white },
  ghost: { backgroundColor: "#846AB6", color: theme.palette.common.white },
  grass: { backgroundColor: "#71C558", color: theme.palette.common.white },
  ground: { backgroundColor: "#CC9F4F", color: theme.palette.common.white },
  ice: { backgroundColor: "#70CBD4", color: theme.palette.common.white },
  normal: { backgroundColor: "#AAB09F", color: theme.palette.common.white },
  poison: { backgroundColor: "#B468B7", color: theme.palette.common.white },
  psychic: { backgroundColor: "#E5709B", color: theme.palette.common.white },
  rock: { backgroundColor: "#B2A061", color: theme.palette.common.white },
  steel: { backgroundColor: "#89A1B0", color: theme.palette.common.white },
  water: { backgroundColor: "#539AE2", color: theme.palette.common.white },
} as Record<string, { backgroundColor: string; color: string }>;
