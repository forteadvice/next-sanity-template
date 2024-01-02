import {type TFrontpagePayload} from './frontPageQuery'
import {type TPagePayload} from './pageQuery'

export type TSeoInput = TFrontpagePayload | TPagePayload

export type TSanityNextImage = {
    crop?: { 
        _type: 'sanity.imageCrop', 
        right: number, 
        top: number, 
        left: number, 
        bottom: number },
    hotspot?: {
        _type: 'sanity.imageHotspot',
        width: number,
        x: number,
        y: number,
        height: number,
    },
    asset: {
        uploadId: string,
        _type: 'sanity.imageAsset',
        path: string,
        size: number,
        originalFilename: string,
        extension: 'jpg' | 'png' | 'svg' | 'webp',
        _rev: string,
        _id: string,
        _updatedAt: string,
        assetId: string,
        _createdAt: string,
        metadata: {
            palette: object,
            hasAlpha: boolean,
            lqip: string,
            dimensions: {
                _type: 'sanity.imageDimensions',
                width: number,
                aspectRatio: number,
                height: number,
            },
            isOpaque: boolean,
            blurHash: string,
            _type: 'sanity.imageMetadata'
        },
        mimeType: 'image/jpeg' | 'image/png' | 'image/svg+xml' | 'image/webp',
        sha1hash: string,
        url: string,
    }
}