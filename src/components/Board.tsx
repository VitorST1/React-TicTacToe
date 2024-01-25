import Square from "./Square"

export default function Board() {
	return (
		<div className="grid w-fit grid-cols-3">
			{[...Array(9)].map((_, i) => (
				<Square key={i} value={(i + 1).toString()} />
			))}
		</div>
	)
}
