import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Link from 'next/link'
import { NotFound } from '@/assets/not-found'

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden">
      <Header />
      <section className="flex flex-col gap-2 items-center justify-center mt-10">
        <p className="font-medium font-merriweather text-lg text-center">
          Sorry, your page not exists yet. For go back{' '}
          <Link href="/" className="underline text-blue-principal">
            click here.
          </Link>
        </p>
        <div className="max-w-[400px] ">
          <NotFound />
        </div>
      </section>
      <Footer />
    </main>
  )
}
