export interface ProjectItem {
  id: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}