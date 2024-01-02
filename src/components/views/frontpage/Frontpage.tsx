import Hero from '@/components/sections/Hero'
import SectionsResolver from '@/components/global/SectionsResolver'
import { TFrontpagePayload } from '@/sanity/queries/frontPageQuery'

export default function Frontpage (props: {data: TFrontpagePayload}) {
    const { data } = props 
    return (
        <main id="main">
            {data?.hero && <Hero data={data.hero} />}
            {data?.sections && <SectionsResolver sections={data.sections} />}
        </main>
    ) 
}