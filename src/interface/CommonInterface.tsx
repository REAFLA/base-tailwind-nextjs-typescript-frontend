/**
 * * APIProps
 * @param {
 * idx: 인덱스
 * target_idx: 특정 대상 인덱스
 * params: params
 * req: req
 * data: {}
 * result: result
 * }
 */
export interface APIProps {
  idx?: number
  target_idx?: number
  params?: any
  req?: any
  data?: any
  result?: any
  language?: string | string[]
  sequence?: number
  type?: string
}

/**
 * * ResultProps
 * @param {
 * status: 상태 (success = 성공, failure = 실패, expire = 세션만료)
 * access_token: JWT 엑세스 토큰
 * refresh_token: JWT 리프레쉬 토큰
 * message: 데이터 값 및 메세지
 * error: 오류 메세지
 * }
 * @return {
 * status: "success"
 * access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
 * refresh_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
 * message: {
 *  "user": {
 *    "idx": 1,
 *    "name": "홍길동"
 *    ...
 *  }
 * }
 * error: "오류가 발생했습니다."
 * }
 */
export interface ResultProps {
  status?: string
  access_token?: string
  refresh_token?: string
  message?: any
  error?: string
  data?: any
}
