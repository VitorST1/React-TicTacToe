import { useState } from "react"
import Board from "./Board"

export default function Game() {
	const [history, setHistory] = useState<string[][]>([Array(9).fill("")])
	const [currentMove, setCurrentMove] = useState(0)
	const xIsNext = currentMove % 2 === 0
	const currentSquares = history[currentMove]

	const handlePlay = (nextSquares: string[]) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
		setHistory(nextHistory)
		setCurrentMove(nextHistory.length - 1)
	}

	const jumpTo = (nextMove: any) => {
		setCurrentMove(nextMove)
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
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		)
	})

	return (
		<div>
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			<ol>{moves}</ol>
		</div>
	)
}
