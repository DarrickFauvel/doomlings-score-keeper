import localFont from "next/font/local"

const myFont = localFont({
  src: "../assets/fonts/obelixpro-cyr.ttf",
  display: "swap",
})

export default function Home() {
  return (
    <main>
      <header>
        <h1
          className={`${myFont.className} heading text-6xl tracking-wider`}
          data-text="DOOMLINGS">
          DOOMLINGS
        </h1>
      </header>
    </main>
  )
}
