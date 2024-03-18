import { useState } from "react"
import Board from "./Board"
import PlayersDialog from "./PlayersDialog"
import { Players } from "@/types/types"
import MoveHistory from "./MoveHistory"

import { Button } from "./ui/button"

export default function Game() {
	const [history, setHistory] = useState<string[][]>([Array(9).fill("")])
	const [currentMove, setCurrentMove] = useState(0)
	const xIsNext = currentMove % 2 === 0
	const currentSquares = history[currentMove]
	const [players, setPlayers] = useState<Players>({
		x: "",
		o: "",
	})
	const [start, setStart] = useState<boolean>(true)

	const handlePlay = (nextSquares: string[]) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
		setHistory(nextHistory)
		setCurrentMove(nextHistory.length - 1)
	}

	const jumpTo = (nextMove: any) => {
		setCurrentMove(nextMove)
	}

	const handlePlayersSubmit = (players: Players) => {
		if (start) setStart(false)

		if (currentMove) {
			setHistory([Array(9).fill("")])
			setCurrentMove(0)
		}

		setPlayers(players)
	}

	const moves = history.map((_, move) => {
		let description

		if (move === currentMove) {
			description = `You are at move #${move}`
		} else if (move) {
			description = `Go to move #${move}`
		} else {
			description = "Go to game start"
		}

		return (
			<li key={move}>
				<button className="rounded bg-slate-200 px-4 py-2" onClick={() => jumpTo(move)}>
					{description}
				</button>
			</li>
		)
	})

	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-10 overflow-y-auto bg-slate-900 text-slate-50">
			<Board players={players} xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			<div className={`flex gap-3 ${moves.length <= 1 && "invisible"}`}>
				<MoveHistory moves={moves} />
				<Button
					className="bg-blue-400 text-slate-700 hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2"
					onClick={() => setStart(true)}
				>
					Restart
				</Button>
			</div>
			{start && <PlayersDialog players={players} handlePlayersSubmit={handlePlayersSubmit} />}
		</div>
	)
}
