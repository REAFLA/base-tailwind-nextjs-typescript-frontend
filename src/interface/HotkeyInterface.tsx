/**
 * * HotkeyProps
 * @param {
 * idx: 인덱스 번호
 * user_idx: 유저 인덱스
 * hotkey: 핫키
 * action: 단축키 저장 텍스트
 * created_at: 생성일
 * }
 * @return {
 * "idx": 1,
 * "user_idx": "홍길동",
 * "hotkey": "1",
 * "action": "<테스트1>",
 * "created_at": "2022-09-09T21:39:49",
 * }
 */
export interface HotkeyProps {
  idx: number
  user_idx: number
  hotkey: string
  action: string
  created_at: Date
}
