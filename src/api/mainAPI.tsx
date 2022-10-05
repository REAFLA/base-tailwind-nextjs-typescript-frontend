import axios from 'axios'
import { ResultProps } from 'src/interface/CommonInterface'

/**
 * * 메인 조회
 * @param param0
 * @returns
 */
export async function MainReadAPI(): Promise<ResultProps> {
  let result: ResultProps

  await axios
    .get(`/api/v1/main`, {
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
