import { ProfileNavigationEnum } from "@/enums/profile";

export type ProfileNavigationType = {
  key: ProfileNavigationEnum.Product | ProfileNavigationEnum.Profile;
  title: string;
  icon: string;
};
