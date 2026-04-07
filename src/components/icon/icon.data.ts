const basePath = "/assets/icons/";
export const icons = {
  close: `${basePath}close.svg#close`,
} as const;

export type IconName = keyof typeof icons;
