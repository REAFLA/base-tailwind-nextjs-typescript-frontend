/**
 * * UserProps
 * @param {
 * id: 아이디
 * idx: 인덱스 번호
 * name: 이름
 * phone: 휴대폰 번호
 * address: 주소
 * address_etc: 기타 참고 주소 (기본 null)
 * created_at: 생성일
 * email: 이메일
 * password: 비밀번호
 * zipcode: 우편번호
 * address_detail: 상세 주소
 * is_access: 권한 (0 = 일반, 1 = 매니저, 2 = 최고관리자)
 * is_status: 승인여부 (0 = 대기, 1 = 승인)
 * }
 * @return {
 * "id": "test",
 * "idx": 1,
 * "name": "홍길동",
 * "phone": "01056046071",
 * "address": "경기도 부천시 부일로519",
 * "address_etc": null,
 * "created_at": "2022-09-09T21:39:49",
 * "email": "test@test.com",
 * "password": "$pbkdf2-sha256$29000$Xss559ybE.L8v3fuHWNsbQ$2yDvc22kIi/wQqcBPYGQqCFQFxasVSIycnvBB7LsewM",
 * "zipcode": 123456,
 * "address_detail": "화신오피스텔 1404호",
 * "is_access": 0
 * "is_status": 0
 * }
 */
export interface UserProps {
  id: string
  idx: number
  name: string
  phone: string
  address: string
  address_etc: string | null
  created_at: Date
  email: string
  password: string
  zipcode: number
  address_detail: string
  is_access: number
  is_status: number
}
