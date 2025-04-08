export interface Media {
  mediaId: string;
  userId: string;
  siteId?: string;
  url: string;
  type: string; //e.g., image/png, video/mp4
  createdAt: string;
}
