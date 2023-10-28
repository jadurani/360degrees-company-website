import { PhotoProps } from '@components/StoryViewer/StoryViewer'
import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'

const cache = new Map<PhotoProps, string>()

export default async function getBase64ImageUrl(
  image: PhotoProps
): Promise<string | null> {
  let url = cache.get(image)
  if (url) {
    return url
  }
  try {
    // const response = await fetch(`${image.src}?auto=compress`)
    const response = await fetch(image.src)
    const buffer = await response.arrayBuffer()
    const minified = await imagemin.buffer(Buffer.from(buffer), {
      plugins: [imageminJpegtran()],
    })

    url = `data:image/jpeg;base64,${Buffer.from(minified).toString('base64')}`

    // cache.set(image, url)
    return url
  } catch (error) {
    // console.error('unable to cache', image.src)
    console.error(error)
    return null
  }
}
