import { useEffect, useState } from "react"
import Square from "./Square"
import Status from "./Status"

export default function Board() {
	const [xIsNext, setXIsNext] = useState(true)
	const [squares, setSquares] = useState<string[]>(Array(9).fill(""))
	const [winningLine, setWinningLine] = useState<number[] | null>(null)
	const [status, setStatus] = useState<string>("")

	useEffect(() => {
		const winner = calculateWinner(squares)
		if (winner) {
			setStatus(`Winner: ${winner}`)
		} else {
			setStatus(`Next player: ${xIsNext ? "X" : "O"}`)
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

		setSquares(nextSquares)
		setXIsNext(!xIsNext)
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
		<div>
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
