import { IntMenu } from '../interfaces/navigation';

export const MENU_START: IntMenu[] = [
  {
    id: 1,
    color: 'primary',
    label: 'Home',
    url: '/home'
  },
  {
    id: 2,
    color: 'primary',
    label: 'Example',
    url: '/example'
  },
  {
    id: 3,
    color: 'primary',
    label: 'Sponsor',
    url: '/sponsor'
  },
  {
    id: 4,
    color: 'primary',
    label: 'Blog',
    url: '/blog'
  },
  {
    id: 5,
    color: 'primary',
    label: 'Join Discord',
    url: '/discord'
  }
];

export const MENU_END: IntMenu = {
  id: 1,
  color: 'primary',
  label: 'Download Now',
  url: '/home'
};
