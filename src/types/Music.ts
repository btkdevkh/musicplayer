export interface Music {
  id?: string;
  title: string;
  singer: string;
  coverUrl: string;
  songUrl: string;
  imgFilePath: string;
  songFilePath: string;
  createdAt: Date | null;
}
