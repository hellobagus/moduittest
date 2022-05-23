/** @format */

import LogoIcon from './logo/logo.svg';
import Q1Icon from './icon/Q1.svg';
import Q2Icon from './icon/Q2.svg';
import SearchIcon from './icon/search.svg';

export { LogoIcon, Q1Icon, Q2Icon, SearchIcon };

interface IIcon {
  icon: string;
  [key: string]: string | undefined;
}

export type { IIcon };
