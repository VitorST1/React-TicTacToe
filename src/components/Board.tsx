import { useState } from "react"
import Square from "./Square"

export default function Board() {
	const [xIsNext, setXIsNext] = useState(true)
	const [squares, setSquares] = useState<string[]>(Array(9).fill(""))

	const handleClick = (i: number) => {
		if (squares[i]) return

		const nextSquares = squares.slice()

		if (xIsNext) {
			nextSquares[i] = "X"
		} else {
			nextSquares[i] = "O"
		}

		setSquares(nextSquares)
		setXIsNext(!xIsNext)
	}

	return (
		<div className="grid w-fit grid-cols-3">
			{squares.map((value, i) => (
				<Square key={i} value={value} onSquareClick={() => handleClick(i)} />
			))}
		</div>
	)
}
