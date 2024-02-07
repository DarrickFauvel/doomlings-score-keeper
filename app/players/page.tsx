import Container from "@/components/Container"

export default function Players() {
  return (
    <main>
      <Container>
        <h1 className="text-3xl">Players</h1>
        <ul>
          {players.map((player) => (
            <li key={player.email}>{player.name}</li>
          ))}
        </ul>
      </Container>
    </main>
  )
}
