type Props = {
  players: string[]
}

export function PlayersList({ players }: Props) {
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  )
}
