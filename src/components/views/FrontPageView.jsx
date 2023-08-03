'use client'

export default function FrontPageView({ data }) {
  return (
    <main>
      <h1>{data?.title}</h1>
    </main>
  )
}
