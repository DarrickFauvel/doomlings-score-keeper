import Container from "@/components/Container"
import localFont from "next/font/local"

const myFont = localFont({
  src: "../../assets/fonts/obelixpro-cyr.ttf",
  display: "swap",
})

export default function Header() {
  return (
    <header>
      <Container>
        <h1
          className={`${myFont.className} heading text-6xl tracking-wider`}
          data-text="DOOMLINGS">
          DOOMLINGS
        </h1>
      </Container>
    </header>
  )
}
