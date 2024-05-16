export default function ExitPreviewButton() {
  return (
    <a
      href='/api/preview/disable'
      className='bg-[#2c65c1] text-[#fff] rounded px-4 py-2 text-sm fixed bottom-2 right-2 opacity-90 hover:opacity-100 transition-opacity block z-50'
    >
      Exit preview
    </a>
  )
}
