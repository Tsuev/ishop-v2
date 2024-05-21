import type { ProfileNavigationType } from "@/types/profile";
import { ProfileNavigationEnum } from "@/enums/profile";

export const profileNavigation: ProfileNavigationType[] = [
  {
    key: ProfileNavigationEnum.Profile,
    title: "Профиль",
    icon: "ic:baseline-person",
  },
  {
    key: ProfileNavigationEnum.Product,
    title: "Добавить товар",
    icon: "ic:twotone-smartphone",
  },
];
