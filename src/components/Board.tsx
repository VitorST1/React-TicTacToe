import { useState } from "react"
import Square from "./Square"

export default function Board() {
	const [squares, setSquares] = useState<string[]>(Array(9).fill(""))

	const handleClick = (i: number) => {
		const nextSquares = squares.slice()
		nextSquares[i] = "X"
		setSquares(nextSquares)
	}

	return (
		<div className="grid w-fit grid-cols-3">
			{squares.map((value, i) => (
				<Square key={i} value={value} onSquareClick={() => handleClick(i)} />
			))}
		</div>
	)
}
