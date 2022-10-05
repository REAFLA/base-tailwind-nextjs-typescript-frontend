import axios from 'axios'
import { BookProps } from 'interface/BookInterface'
import { ReactElement } from 'react'

interface InitialProps {
  data?: Array<BookProps>
}

export default function IndexPage({ data }: InitialProps): ReactElement | null {
  return (
    <>
      <div>메인</div>
    </>
  )
}

/**
 * * SSR: Server-side Rendering
 * @url https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
 */
export async function getServerSideProps({ req }: any) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_ENV_API_URL}/v1/main`,
    )

    if (!response.data) {
      return {
        props: {
          status: false,
        },
      }
    }

    return {
      props: {
        data: response.data.message.main,
      },
    }
  } catch (error) {
    console.error(error)
  }
}
