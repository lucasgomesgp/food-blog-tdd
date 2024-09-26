import type { ReactNode } from 'react'

const bodyClasses = 'text-lg text-black'

export const rendersHtmlTags = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="mb-4 text-4xl text-gray-900 md:text-5xl lg:text-6xl">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="mb-4 text-3xl text-gray-900 md:text-5xl lg:text-6xl">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-3xl">{children}</h3>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <h4 className="text-2xl">{children}</h4>
  ),
  h5: ({ children }: { children: ReactNode }) => (
    <h5 className="text-xl">{children}</h5>
  ),
  h6: ({ children }: { children: ReactNode }) => (
    <h6 className="text-large">{children}</h6>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className={`my-4 text-lg ${bodyClasses}`}>{children}</p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className={`list-disc list-inside my-4 text-lg ${bodyClasses}`}>
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className={`list-decimal list-inside my-4 text-lg ${bodyClasses}`}>
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className={`my-2 text-lg ${bodyClasses}`}>{children}</li>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm">
      {children}
    </code>
  ),
  code_block: ({ children }: { children: ReactNode }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-sm">
      {children}
    </pre>
  ),
}
