import Button from '../ui/Button'

export default function Footer({ data }) {
  return (
    <footer>
      <address>{data?.address}</address>
      <p>{data?.phone}</p>
      <p>{data?.email}</p>

      <Button href={data?.social?.facebook} label='Facebook' />
    </footer>
  )
}
