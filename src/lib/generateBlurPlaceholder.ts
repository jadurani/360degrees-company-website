import fs from "node:fs/promises";
import { getPlaiceholder } from 'plaiceholder'

const cache = new Map<string, string>()

export type ImageProps = {
  src: string;
  blurDataURL?: string;
}

export async function getImageWithBlurPlaceholder(imageSrc: string): Promise<ImageProps> {
  const blurDataURL = await getBase64ImageUrl(imageSrc)

  return {
    src: imageSrc,
    blurDataURL
  }
}


export async function getBase64ImageUrl(imageSrc: string): Promise<string> {
  try {
    let url = cache.get(imageSrc)
    if (url) {
      return url
    }
    const imageBuffer = await fetchImage(imageSrc)
    const { base64 } = await getPlaiceholder(imageBuffer)
    cache.set(imageSrc, base64)
    return base64
  } catch (error) {
    console.error(error)
    // default gray radial placeholder`
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAA4ADgDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAYHCAUBBP/EACUQAAEEAQQDAAIDAAAAAAAAAAIAAQUGIgMREqEEEyEUMjEzQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDFMPD+xxxT1D1t9RhxXlbh+bjiqvW62xsOKBY8CouQth0ug9Ofj/X0q7E1FiFsF2SpzcP06QZ0kak4s+HSTpmuOHLFacmakwCWCmtlrvBjxQZzl4n1uXxCdrJEcHPFCB5qPgMXD4rbUYkTYPikVOcdwV2ppDsCChwEAJgOKZTrQtpb8Ol5WjBhHfZOGpq6P43+boJFYoIQAsVH7fFCLH8WgrOYcT/hRS5EOxoM923wWFz+IX33Bx3NCD56lIsLh9VrqcyIsGSzHXJj1uGSqddsvBhzQajgbEIAOSYis7evbms+RVuYRHPtdh7k3D9+0FAsFgEwLJSG2y4kx5Il7axCWfanNjsfsYskC3bPPYnP6hKFil/Y5ZIQKETL+txyTrE2N9PbJCEDZ4NtcWbPtdB7i/H9+0IQcvz7Y5M+aUZexPqb5IQgSpWVfUd/qEIQf//Z'
  }
}

const fetchImage = async (imageSrc: string) => {
  if (imageSrc.includes('http')) {
    return fetchRemoteImage(imageSrc)
  }
  return fetchLocalImage(imageSrc)
}

const fetchLocalImage = async (imageSrc: string) => await fs.readFile(`public/${imageSrc}`)

const fetchRemoteImage = async (imageSrc: string) => {
  const response = await fetch(imageSrc)
  const buffer = await response.arrayBuffer()
  return Buffer.from(buffer)
}
