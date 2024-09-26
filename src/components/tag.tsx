export function Tag({ text }: { text: string }) {
  return (
    <p className="mt-5 rounded-sm text-sm text-white bg-blue-tag py-1 text-center w-[100px] max-w-[180] break-words self-start">
      {text}
    </p>
  )
}
