"use client"
import { useRef, useState } from "react"
// import { Button } from "@/components/Button"
import { PlayersList } from ".."
import { Button } from "@/components/Button"

export function NamesView() {
  const [playerName, setPlayerName] = useState("")
  const [players, setPlayers] = useState([])
  const inputRef = useRef(null)

  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (playerName) {
      setPlayers((prevPlayers) => {
        return [...prevPlayers, playerName]
      })
      setPlayerName("")
      inputRef.current.value = ""
      inputRef.current.focus()
      console.log(players)
    }
  }

  console.log(playerName)

  return (
    <div>
      <h2>Enter everyone&apos;s names!</h2>
      <form>
        <label htmlFor="player-name">
          <input
            type="text"
            name="player-name"
            id="player-name"
            ref={inputRef}
            onChange={handleChange}
            value={playerName}
            autoComplete="off"
            placeholder="Enter player name..."
          />
        </label>
        <Button handleClick={handleClick}>Add</Button>
      </form>

      <PlayersList players={players} />
    </div>
  )
}
