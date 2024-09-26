import Link from 'next/link'

export function LinkFooter({ page, title }: { page: string; title: string }) {
  return (
    <Link
      href={page}
      className="text-gray-footer text-sm leading-6 hover:opacity-90 transition-opacity"
    >
      {title}
    </Link>
  )
}
