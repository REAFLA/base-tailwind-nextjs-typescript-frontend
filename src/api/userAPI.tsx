import axios from 'axios'
import { APIProps, ResultProps } from 'src/interface/CommonInterface'

/**
 * * 유저 조회 (나의 정보 조회)
 * @url : /api/v1/user
 * @returns
 */
export async function UserReadAPI(): Promise<ResultProps> {
  let response: ResultProps

  await axios
    .get(`/api/v1/user`, {
      validateStatus: (status: number) => {
        // 500 오류 이상일때 거부, 나머지는 통과
        return status < 500
      },
    })
    .then((res) => {
      response = res.data
    })
    .catch((error) => {
      console.error(error)
    })

  return new Promise((resolve, reject) => {
    try {
      switch (response.status) {
        case 'success':
          resolve(response)
          break
        case 'expire':
          resolve(response)
          break
        default:
          reject(new Error(response.message))
          return
      }
    } catch (error) {
      console.error(error)
      reject(new Error(error))
    }
  })
}

/**
 * * 심사 대기 유저 조회
 * @url : /api/v1/user/[slug]
 * @returns {
 *  "status": "success",
 *  "message": {
 *    "user": [
 *       {
 *          "idx": 2,
 *          "name": "홍길동",
 *          "id": "test1",
 *          "phone": "01056046071",
 *          "address": "경기도 부천시 부일로519",
 *          "address_etc": null,
 *          "is_status": 0,
 *          "email": "test@test.com",
 *          "password": "$pbkdf2-sha256$29000$Xss559ybE.L8v3fuHWNsbQ$2yDvc22kIi/wQqcBPYGQqCFQFxasVSIycnvBB7LsewM",
 *          "zipcode": 123456,
 *          "address_detail": "화신오피스텔 1404호",
 *          "is_access": 2,
 *          "created_at": "2022-09-09T21:39:49"
 *        }
 *      ]
 *    }
 *  }
 */
export async function UserWaitReadAPI(): Promise<ResultProps> {
  let result: any

  await axios
    .get(`/api/v1/user/wait`, {
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
 * * 유저 수정
 * @url : /api/v1/user
 * @param data : Data Json
 * @returns {
 *  status: success | failure | expire
 * }
 */
export async function UserUpdateAPI({ data }: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .put(`/api/v1/user`, data, {
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
 * * 특정 유저 수정 (미사용)
 * @url : /api/v1/user/[slug]
 * @param idx : 유저 인덱스
 * @param data : Data Json
 * @returns {
 *  status: success | failure | expire
 * }
 */
export async function UserTargetUpdateAPI({
  idx,
  data,
}: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .put(`/api/v1/user/${idx}`, data, {
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
 * * 유저 삭제 (탈퇴)
 * @url : /api/v1/user
 * @returns {
 *  status: success | failure | expire
 * }
 */
export async function UserDeleteAPI(): Promise<ResultProps> {
  let result: any

  await axios
    .delete(`/api/v1/user`, {
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
 * * 특정 유저 삭제 (미사용)
 * @url : /api/v1/user/[slug]
 * @param idx : 유저 인덱스
 * @returns {
 *  status: success | failure | expire
 * }
 */
export async function UserTargetDeleteAPI({
  idx,
}: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .delete(`/api/v1/user/${idx}`, {
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
