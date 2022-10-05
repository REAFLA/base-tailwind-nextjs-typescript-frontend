import axios from 'axios'
import { APIProps, ResultProps } from 'src/interface/CommonInterface'

/**
 * * 폰트 조회
 * @param param0
 * @returns
 */
export async function FontReadAPI(): Promise<ResultProps> {
  let result: ResultProps

  await axios
    .get(`/api/v1/font`, {
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
 * * 폰트 수정
 * @param param0
 * @returns
 */
export async function FontUpdateAPI({
  idx,
  data,
}: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .put(`/api/v1/font/${idx}`, data, {
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
 * * 폰트 삭제
 * @param param0
 * @returns
 */
export async function FontDeleteAPI({ idx }: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .delete(`/api/v1/font/${idx}`, {
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
