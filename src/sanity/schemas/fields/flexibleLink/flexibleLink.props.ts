import { type TReferencePath } from '../../../queries/helperQueries/referencePath'

export type TFlexibleLink = {
  title?: string
  link?: {
    internal?: { path?: TReferencePath }
    external?: string
  }
}
