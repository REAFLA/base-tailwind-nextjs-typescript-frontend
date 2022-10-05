/**
 * * SceneProps
 * @param {
 * idx: 인덱스 번호
 * sequence: 순서
 * origin_file_name: 원본 파일 이름
 * user_idx: 유저 인덱스
 * book_idx: 책 인덱스
 * origin_image: 원본 이미지
 * pil_image: 합성 이미지
 * pil_file_name: 합성 이미지 파일 이름
 * created_at: 생성일
 * scene_text: 씬 텍스트 배열
 * }
 * @return {
 * "idx": 1,
 * "sequence": 1,
 * "origin_file_name": null,
 * "user_idx": 1,
 * "book_idx": 1,
 * "origin_image": null,
 * "created_at": "2022-09-10T21:55:54",
 * "scene_text": [
 *    {
 *      "scene_idx": 1,
 *      "sequence": 1,
 *      "text": "1",
 *      "idx": 1,
 *      "created_at": "2022-09-10T21:55:54"
 *    },
 *    {
 *      "scene_idx": 1,
 *      "sequence": 2,
 *      "text": "2",
 *      "idx": 2,
 *      "created_at": "2022-09-10T21:55:54"
 *    },
 * ]
 * }
 */
export interface SceneProps {
  idx: number
  sequence: number
  user_idx: number
  book_idx: number
  origin_image?: any
  origin_file_name?: string
  pil_image?: string
  pil_file_name?: string
  created_at?: Date | string
  scene_text: Array<SceneTextProps>
}

/**
 * * SceneProps
 * @param {
 * idx: 인덱스 번호
 * scene_idx: 씬 인덱스 번호
 * sequence: 순서
 * text: 텍스트
 * scene_text: 씬 텍스트 배열
 * }
 * @return {
 * "idx": 1,
 * "scene_idx": 1,
 * "sequence": 1,
 * "text": "1",
 * "created_at": "2022-09-10T21:55:54"
 * }
 */
export interface SceneTextProps {
  idx?: number
  scene_idx?: number
  sequence?: number
  text: string
  created_at?: Date | string
}
