import { useRouter } from 'next/router'
import { ReactElement, useState } from 'react'
import GlobalTermsModalComponent from './global/modal/GlobalTermsModalComponent'

interface InitialProps {
  data?: any
}

export default function FooterComponent({
  data,
}: InitialProps): ReactElement | null {
  const router = useRouter()
  const footerMenu1 = [
    { label: '전체동화', path: '/book/all' },
    { label: '한글동화', path: '/book/ko' },
    { label: '영어동화', path: '/book/en' },
  ]
  const footerMenu2 = [
    {
      id: 'terms1',
      tag: 'button',
      label: '이용약관',
      path: '#',
      onClick: () => {
        setIsTermsTitle('이용약관')
        setIsTerms(!isTerms)
      },
    },
    {
      id: 'terms2',
      tag: 'button',
      label: '개인정보처리방침',
      path: '#',
      onClick: () => {
        setIsTermsTitle('개인정보처리방침')
        setIsTerms(!isTerms)
      },
    },
    { id: '', tag: 'a', label: '자주묻는질문', path: '/faq', onClick: null },
  ]
  const [isTerms, setIsTerms] = useState(false)
  const [isTermsTitle, setIsTermsTitle] = useState('개인정보처리방침')

  return (
    <>
      {router.pathname !== '/error' &&
        router.pathname !== '/404' &&
        router.pathname !== '/500' && (
        <footer>
          푸터
          </footer>
        )}
      {isTerms && (
        <GlobalTermsModalComponent
          title={isTermsTitle}
          onCancelClick={() => setIsTerms(!isTerms)}
        />
      )}
    </>
  )
}
