import axios from 'axios'
import { APIProps, ResultProps } from 'src/interface/CommonInterface'

/**
 * * 책 생성
 * @param data : Data Json
 * @returns {
 *  status: success | failure | expire
 * }
 */
export async function BookCreateAPI({ data }: APIProps): Promise<ResultProps> {
  let result: ResultProps

  await axios
    .post(`/api/v1/book`, data, {
      validateStatus: (status: number) => {
        // 500 오류 이상일때 거부, 나머지는 통과
        return status < 500
      },
    })
    .then((res) => {
      result = res.data
    })
    .catch((error) => {
      console.error(error)
    })

  return new Promise((resolve, reject) => {
    try {
      switch (result.status) {
        case 'success':
          resolve(result)
          break
        case 'expire':
          resolve(result)
          break
        default:
          reject(new Error(result.message))
          return
      }
    } catch (error) {
      console.error(error)
      reject(new Error(error))
    }
  })
}

/**
 * * 책 조회
 * @param language : 책 언어 (all, ko, en)
 * @returns {
 *  "status": "success",
 *  "message": {
 *    "book": [
 *      {
 *       "user_idx": 1,
 *       "language": "ko",
 *       "code": "9",
 *       "description": "ㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
 *       "gender": "남자",
 *       "book_width": 2100,
 *       "created_at": "2022-09-22T10:31:21",
 *       "version": 3,
 *       "idx": 30,
 *       "title": "ㄹㄹㄹㄹㄹ12",
 *       "people_count": 1,
 *       "alignment": "중앙",
 *       "book_height": 2970,
 *       "scene": [
 *            {
 *              "idx": 61,
 *              "sequence": 1,
 *              "file_name": null,
 *              "is_save": 1,
 *              "book_idx": 30,
 *              "user_idx": 1,
 *              "image": null,
 *              "created_at": "2022-09-22T10:31:31"
 *            }
 *          ]
 *        }
 *      ]
 *    }
 *  }
 */
export async function BookReadAPI({
  language,
}: APIProps): Promise<ResultProps> {
  let result: ResultProps

  await axios
    .get(`/api/v1/book/${language}`, {
      validateStatus: (status: number) => {
        // 500 오류 이상일때 거부, 나머지는 통과
        return status < 500
      },
    })
    .then((res) => {
      result = res.data
    })
    .catch((error) => {
      console.error(error)
    })

  return new Promise((resolve, reject) => {
    try {
      switch (result.status) {
        case 'success':
          resolve(result)
          break
        case 'expire':
          resolve(result)
          break
        default:
          reject(new Error(result.message))
          return
      }
    } catch (error) {
      console.error(error)
      reject(new Error(error))
    }
  })
}

/**
 * * 책 수정
 * @param idx : 책 인덱스
 * @returns {
 *  status: "success",
 *  message: {
 *    book: [
 *      0: {version: 3, idx: 30, title: "ㄹㄹㄹㄹㄹ12", people_count: 1, alignment: "중앙", book_height: 2970, code: "9",…}
 *      1: {version: 1, idx: 23, title: "b", people_count: 4, alignment: "우", book_height: 2970, code: "000008",…}
 *      2: {version: 1, idx: 22, title: "a", people_count: 1, alignment: "중앙", book_height: 2970, code: "000007",…}
 *      3: {version: 1, idx: 21, title: "qwdqwqwd", people_count: 7, alignment: "중앙", book_height: 2970,…}
 *      4: {version: 1, idx: 20, title: "qwd", people_count: 1, alignment: "좌", book_height: 2970, code: "000005",…}
 *      5: {version: 1, idx: 19, title: "d", people_count: 2, alignment: "중앙", book_height: 2970, code: "000004",…}
 *      6: {version: 1, idx: 18, title: "asdd", people_count: 2, alignment: "중앙", book_height: 2970,…}
 *      7: {version: 1, idx: 17, title: "asd", people_count: 2, alignment: "중앙", book_height: 2970,…}
 *      8: {version: 1, idx: 1, title: "제목1", people_count: 1, alignment: "중앙", book_height: 2970, code: "000001",…}
 *    ]
 *  }
 */
export async function BookUpdateAPI({
  idx,
  data,
}: APIProps): Promise<ResultProps> {
  let result: ResultProps

  await axios
    .put(`/api/v1/book/${idx}`, data, {
      validateStatus: (status: number) => {
        // 500 오류 이상일때 거부, 나머지는 통과
        return status < 500
      },
    })
    .then((res) => {
      result = res.data
    })
    .catch((error) => {
      console.error(error)
    })

  return new Promise((resolve, reject) => {
    try {
      switch (result.status) {
        case 'success':
          resolve(result)
          break
        case 'expire':
          resolve(result)
          break
        default:
          reject(new Error(result.message))
          return
      }
    } catch (error) {
      console.error(error)
      reject(new Error(error))
    }
  })
}

/**
 * * 책 삭제
 * @param idx : 책 인덱스
 * @returns {
 *  status: success | failure | expire
 * }
 */
export async function BookDeleteAPI({ idx }: APIProps): Promise<ResultProps> {
  let result: ResultProps

  await axios
    .delete(`/api/v1/book/${idx}`, {
      validateStatus: (status: number) => {
        // 500 오류 이상일때 거부, 나머지는 통과
        return status < 500
      },
    })
    .then((res) => {
      result = res.data
    })
    .catch((error) => {
      console.error(error)
    })

  return new Promise((resolve, reject) => {
    try {
      switch (result.status) {
        case 'success':
          resolve(result)
          break
        case 'expire':
          resolve(result)
          break
        default:
          reject(new Error(result.message))
          return
      }
    } catch (error) {
      console.error(error)
      reject(new Error(error))
    }
  })
}
