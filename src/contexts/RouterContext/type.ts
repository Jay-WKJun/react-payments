export interface RouterContextProps {
  path: string;
  params: { [key: string]: string };
}

export interface RouterContextApiProps {
  navigate: (path: string, params?: { [key: string]: string }) => void;
}
