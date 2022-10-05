export const handleURLToFile = (url: string) => {
  return fetch(url)
    .then((response) => {
      return response.blob()
    })
    .then((blob) => {
      return URL.createObjectURL(blob)
    })
}

interface handleDownloadProps {
  url: string
  file_name: string
}

export const handleDownload = async ({
  url,
  file_name,
}: handleDownloadProps) => {
  const a = globalThis.document.createElement('a')
  a.style.display = 'none'
  a.href = await handleURLToFile(url)
  a.download = file_name
  globalThis.document.body.appendChild(a)
  a.click()
  globalThis.document.body.removeChild(a)
}
