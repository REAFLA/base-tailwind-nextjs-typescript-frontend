import { FontProps } from './FontInterface'
import { SceneProps } from './SceneInterface'
import { UserProps } from './UserInterface'

/**
 * * BookProps
 * @param {
 * code: 고유 코드
 * version: 버전
 * language: 언어 (en, kr)
 * title: 제목
 * description: 설명
 * people_count: 등장인물수
 * gender: 성별 (남자, 여자, 없음)
 * alignment: 정렬 (좌, 중, 우)
 * book_width: 가로 사이즈
 * book_height: 세로 사이즈
 * scene: 씬 데이터
 * user_idx: 유저 인덱스
 * font_idx: 폰트 인덱스
 * font: 폰트 데이터
 * user: 유저 데이터
 * }
 * @return {
 * "version": 1,
 * "idx": 1,
 * "title": "제목2",
 * "description": "설명",
 * "gender": "남자",
 * "book_width": 2100,
 * "created_at": "2022-09-10T21:25:13",
 * "language": "en",
 * "user_idx": 1,
 * "font_idx": 1,
 * "code": "A00002",
 * "people_count": 1,
 * "alignment": "중",
 * "book_height": 2970
 * "user": {
 *  유저데이터
 * }
 * "font": {
 *    "idx": 1,
 *    "font_folder": 1,
 *    "font_name": null,
 *    "created_at": "2022-09-10T21:55:54",
 * }
 * "scene": [
 *    {
 *      "idx": 1,
 *      "sequence": 1,
 *      "file_name": null,
 *      "user_idx": 1,
 *      "book_idx": 1,
 *      "image": null,
 *      "created_at": "2022-09-10T21:55:54",
 *    }
 *  ]
 * }
 */
export interface BookProps {
  version: number
  idx: number
  title: string
  description: string
  gender: string
  book_width: number
  created_at: Date
  language: string
  user_idx: number
  font_idx: number
  code: string
  people_count: number
  alignment: string
  book_height: number
  user: UserProps
  font: FontProps
  scene: Array<SceneProps>
}
