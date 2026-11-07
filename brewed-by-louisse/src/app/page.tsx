import Hero from "@/components/hero";
import Story from "@/components/story";
import MenuGrid from "@/components/menu-grid";
import Reviews from "@/components/reviews";
import Faq from "@/components/faq";
import Visit from "@/components/visit";
import Cta from "@/components/cta";
import InstagramIcon from "@/components/instagram-icon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <Story />
        <MenuGrid />
        <Reviews />
        <Faq />
        <Visit />
        <Cta />
      </main>
      <footer className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-12 text-sm text-muted md:px-10">
        <p>Concept project. Brewed by Louisse is a fictional café made for a portfolio.</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bold text-ink hover:underline"
        >
          <InstagramIcon /> @{INSTAGRAM_HANDLE}
        </a>
      </footer>
    </>
  );
}