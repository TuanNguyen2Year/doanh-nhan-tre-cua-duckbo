export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: Category;
  date: string;
  author?: string;
  tags?: string[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface Member {
  id: number;
  name: string;
  avatar: string;
}

export interface Event {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}
