// 영화 데이터의 타입
export interface Movie {
  createdAt: number;
  updatedAt: number;
  id: number;
  title: string;
  englishTitle: string;
  posterUrl: string;
  date: string; // 날짜 형식은 필요에 따라 Date 객체로 변환 가능
  genre: string;
  country: string;
  rating: string; // 연령 등급
  runningTime: number; // 분 단위
  starRating: number; // 별점
  description: string;
}

// API 응답의 타입
export interface MoviesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Movie[];
}
