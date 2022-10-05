import axios from 'axios'
import { APIProps, ResultProps } from 'src/interface/CommonInterface'

/**
 * * 씬 생성
 * @param param0
 * @returns
 */
export async function SceneCreateAPI({ idx }: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .post(`/api/v1/book/scene/${idx}`, {
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
 * * 씬 조회
 * @param param0
 * @returns
 */
export async function SceneReadAPI(): Promise<ResultProps> {
  let result: any

  await axios
    .get(`/api/v1/book/scene`, {
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
 * * 특정 씬 조회
 * @param param0
 * @returns
 */
export async function SceneTargetReadAPI({
  idx,
}: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .get(`/api/v1/book/scene/${idx}`, {
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
 * * 씬 수정
 * @param param0
 * @returns
 */
export async function SceneUpdateAPI({
  idx,
  data,
}: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .put(`/api/v1/book/scene/${idx}`, data, {
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
 * * 씬 순서 수정
 * @param param0
 * @returns
 */
export async function SceneSequenceUpdateAPI({
  idx,
  type,
  data,
}: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .put(
      `/api/v1/book/scene/sequence/${idx}`,
      { type, data },
      {
        validateStatus: (status: number) => {
          // 500 오류 이상일때 거부, 나머지는 통과
          return status < 500
        },
      },
    )
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
 * * 씬 삭제
 * @param param0
 * @returns
 */
export async function SceneDeleteAPI({ idx }: APIProps): Promise<ResultProps> {
  let result: any

  await axios
    .delete(`/api/v1/book/scene/${idx}`, {
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
