import { INavigation } from 'navigation/schemes';

export interface IPage extends INavigation { }

export interface IItemTouch {
  id: string | number,
  name: string
}