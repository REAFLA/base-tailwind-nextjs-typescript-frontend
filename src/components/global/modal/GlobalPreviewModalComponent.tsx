import { Tooltip } from '@chakra-ui/react'
import { BookProps } from 'interface/BookInterface'
import Image from 'next/image'
import { ReactElement, useState } from 'react'
import { BsPrinter } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { RiFolderDownloadLine } from 'react-icons/ri'
import { handleDownload } from 'src/utils/urlToFile'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

interface InitialProps {
  data?: BookProps
  onCancelClick?: (e?: any) => void
  onOkClick?: (e?: any) => void
}

export default function GlobalPreviewModalComponent({
  data,
  onCancelClick,
}: InitialProps): ReactElement {
  const [onRealIndexChange, setOnRealIndexChange] = useState(0)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <div className="modal-overlay dark" onClick={onCancelClick}></div>
      <div className="modal preview relative">
        <div className="flex items-center justify-end py-2">
          <Tooltip
            placement="left"
            bg="gray.600"
            label="동화책을 프린트 합니다"
            hasArrow
          >
            <button
              type="button"
              className="bg-[rgba(0,0,0,0.5)] p-2 rounded-md opacity-80 hover:bg-[rgba(0,0,0,0.8)] mr-2"
              onClick={() => {
                const windowPopup = globalThis.window.open(
                  'about:blank',
                  '_new',
                )
                let element = document.createElement('div')
                for (var i = 0; i < data.scene.length; i++) {
                  element.insertAdjacentHTML(
                    'beforeend',
                    `
                     <img src="${data.scene[i].pil_image}" alt="${data.scene[i].pil_file_name}" />
                    `,
                  )
                }
                windowPopup.document.open()
                windowPopup.document.write(`
                  <html>
                    <head></head>
                    <style>
                      @page {
                        margin: 0;
                      }
                      @media print {
                        body {
                          margin: 0;
                          padding: 0;
                          background:#ffffff;
                        }
                      }
                      img {
                        margin: 0;
                        padding: 0;
                        height:297mm;
                        width:210mm;
                        page-break-before: always;
                      }
                    </style>
                    <body onload="window.print()" onafterprint="window.close()">
                      ${element.innerHTML}
                    </body>
                  </html>
                `)
                windowPopup.document.close()
              }}
            >
              <BsPrinter size={26} color={'#ffffff'} />
            </button>
          </Tooltip>
          <Tooltip
            placement="left"
            bg="gray.600"
            label="동화책을 다운로드(이미지 파일) 합니다"
            hasArrow
          >
            <button
              type="button"
              className="bg-[rgba(0,0,0,0.5)] p-2 rounded-md opacity-80 hover:bg-[rgba(0,0,0,0.8)] mr-2"
              onClick={() =>
                handleDownload({
                  url: data.scene[onRealIndexChange].pil_image,
                  file_name: data.scene[onRealIndexChange].pil_file_name,
                })
              }
            >
              <RiFolderDownloadLine size={26} color={'#ffffff'} />
            </button>
          </Tooltip>
          <Tooltip
            placement="left"
            bg="gray.600"
            label="씬 원본 이미지를 다운로드 합니다"
            hasArrow
          >
            <button
              type="button"
              className="bg-[rgba(0,0,0,0.5)] p-2 rounded-md opacity-80 hover:bg-[rgba(0,0,0,0.8)] mr-2"
              onClick={() =>
                handleDownload({
                  url: data.scene[onRealIndexChange].origin_image,
                  file_name: data.scene[onRealIndexChange].origin_file_name,
                })
              }
            >
              <FiImage size={26} color={'#ffffff'} />
            </button>
          </Tooltip>
          <button
            type="button"
            className="bg-[rgba(0,0,0,0.5)] p-2 rounded-md opacity-80 hover:bg-[rgba(0,0,0,0.8)]"
            onClick={onCancelClick}
          >
            <IoMdClose size={26} color={'#ffffff'} />
          </button>
        </div>
        <Swiper
          className="swiper"
          style={{
            height: 'calc(100% - 213px)',
          }}
          pagination={{
            type: 'progressbar',
            // dynamicBullets: true,
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onRealIndexChange={(e) => setOnRealIndexChange(e.activeIndex)}
          modules={[FreeMode, Navigation, Pagination, Thumbs]}
        >
          {data.scene.map((e, index) =>
            e.pil_image !== null ? (
              <SwiperSlide key={index}>
                <iframe
                  className="iframe"
                  src={e.pil_image as string}
                  style={{ display: 'none' }}
                ></iframe>
                <img
                  src={e.pil_image as string}
                  className="bg-black"
                  alt={e.pil_file_name}
                  style={{
                    objectFit: 'contain',
                  }}
                />
                {/* <Image
                  ref={componentRef}
                  className="bg-black"
                  src={e.pil_image as string}
                  layout="fill"
                  objectFit="contain"
                  alt={e.pil_file_name}
                /> */}
              </SwiperSlide>
            ) : (
              <SwiperSlide
                key={index}
                style={{
                  backgroundColor: '#000000',
                }}
              >
                <h4 className="text-gray-400 text-2xl font-bold dark:text-white">
                  이미지 없음
                </h4>
              </SwiperSlide>
            ),
          )}
        </Swiper>
        <Swiper
          className="swiper-thumb mt-[5px]"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {data.scene.map((e, i) =>
            e.pil_image !== null ? (
              <SwiperSlide key={i} className="cursor-pointer">
                <Image
                  className="bg-black"
                  src={e.pil_image as string}
                  layout="fill"
                  objectFit="contain"
                  alt={e.pil_file_name}
                />
              </SwiperSlide>
            ) : (
              <SwiperSlide key={i} className="cursor-pointer">
                <h6 className="text-gray-400 text-lg font-bold dark:text-white">
                  이미지 없음
                </h6>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </>
  )
}
