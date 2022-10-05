import axios from 'axios'
import { APIProps, ResultProps } from 'src/interface/CommonInterface'

export async function SigninCreateAPI({
  data,
}: APIProps): Promise<ResultProps> {
  let response: ResultProps

  await axios
    .post(`/api/v1/signin`, data, {
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
