import { useEffect, useState } from "react"
import Square from "./Square"
import Status from "./Status"

export default function Board(props: {
	xIsNext: boolean
	squares: string[]
	onPlay: (squares: string[]) => void
}) {
	const { xIsNext, squares, onPlay } = props
	const [winningLine, setWinningLine] = useState<number[] | null>(null)
	const [status, setStatus] = useState<string>("")

	useEffect(() => {
		const winner = calculateWinner(squares)
		if (winner) {
			setStatus(`Winner: ${winner}`)
		} else {
			if (winningLine !== null) setWinningLine(null)

			if (squares.every((square) => square)) {
				setStatus("Draw")
			} else {
				setStatus(`Next player: ${xIsNext ? "X" : "O"}`)
			}
		}
	}, [squares])

	const handleClick = (i: number) => {
		if (squares[i] || calculateWinner(squares)) return

		const nextSquares = squares.slice()

		if (xIsNext) {
			nextSquares[i] = "X"
		} else {
			nextSquares[i] = "O"
		}

		onPlay(nextSquares)
	}

	const calculateWinner = (squares: string[]) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i]
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				setWinningLine(lines[i])
				return squares[a]
			}
		}

		return ""
	}

	return (
		<div className="flex flex-col items-center justify-center gap-5">
			<Status status={status} />
			<div className="grid w-fit grid-cols-3">
				{squares.map((value, i) => (
					<Square
						key={i}
						value={value}
						winner={!!winningLine?.includes(i)}
						onSquareClick={() => handleClick(i)}
					/>
				))}
			</div>
		</div>
	)
}
