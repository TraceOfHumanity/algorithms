const basePath = "/assets/icons/";
export const icons = {
  close: `${basePath}close.svg#close`,
  menu: `${basePath}menu.svg#menu`,
} as const;

export type IconName = keyof typeof icons;
