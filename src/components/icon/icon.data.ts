const basePath = "/assets";
export const icons = {
  close: `${basePath}/close.svg#close`,
} as const;

export type IconName = keyof typeof icons;
