import Hero from '@/components/sections/Hero'
import SectionsResolver from '@/components/global/SectionsResolver'
import { TPagePayload } from '@/sanity/queries/pageQuery'

export default function Page (props: {data: TPagePayload}) {
    const { data } = props 
    return (
        <main id="main">
            {data?.hero && <Hero data={data.hero} />}
            {data?.sections && <SectionsResolver sections={data.sections} />}
        </main>
    ) 
}