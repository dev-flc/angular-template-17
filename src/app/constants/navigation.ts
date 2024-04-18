import { IntMenu } from '../interfaces/navigation';

export const MENU_START: IntMenu[] = [
  {
    id: 1,
    color: 'primary',
    label: 'Feactures',
    url: '/home'
  },
  {
    id: 2,
    color: 'primary',
    label: 'testimonials',
    url: '/home'
  },
  {
    id: 3,
    color: 'primary',
    label: 'Sponsor',
    url: '/home'
  },
  {
    id: 4,
    color: 'primary',
    label: 'Blog',
    url: '/home'
  },
  {
    id: 5,
    color: 'primary',
    label: 'Join Discord',
    url: '/home'
  }
];

export const MENU_END: IntMenu = {
  id: 1,
  color: 'primary',
  label: 'Download Now',
  url: '/home'
};
