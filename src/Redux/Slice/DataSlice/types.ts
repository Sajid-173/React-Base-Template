export interface NewsData {
  response: any;
  loading: boolean;
  error: boolean;
  initialLoad: boolean;
}

export interface DataState {
  newsData: NewsData;
}

