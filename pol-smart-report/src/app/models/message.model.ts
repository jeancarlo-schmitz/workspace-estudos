export interface Message {
  id: string;
  text: string;
  timestamp: Date;
  isUser: boolean;
  file?: {
    name: string;
    url: string;
    type: string;
  };
}

export interface RecentFile {
  name: string;
  url: string;
  type: string;
  timestamp: Date;
}