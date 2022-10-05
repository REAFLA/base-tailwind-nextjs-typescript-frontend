/**
 * * FontProps
 * @param {
 * idx: 인덱스 번호
 * user_idx: 유저 인덱스
 * font_folder: 폰트 폴더 이름
 * font_name: 폰트 이름
 * created_at: 생성일
 * }
 * @return {
 * "idx": 1,
 * "user_idx": 1,
 * "font_folder": "nanumgothic",
 * "font_name": "NanumGothic",
 * "created_at": "2022-09-09T21:39:49",
 * }
 */
export interface FontProps {
  idx: number
  user_idx: number
  font_folder: string
  font_name: string
  created_at: Date
}
