
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UserContext {
  name: string;
  role: 'student' | 'creator' | 'professional' | 'founder' | '';
  struggle: string;
  isLoggedIn: boolean;
}
