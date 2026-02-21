export type AppRole = 'EMPLOYEE' | 'MANAGER' | 'HR' | 'ADMIN';

export interface MenuItem {
  label: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}
