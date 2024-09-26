import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Items } from '@/components/items'
import { SearchArea } from '@/components/search-area'

export default async function Home() {
  return (
    <main className="min-h-screen max-w-full">
      <Header />
      <SearchArea />
      <Items />
      <Footer />
    </main>
  )
}
