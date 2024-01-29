export default function Square(props: {
	value: string
	winner: boolean
	onSquareClick: () => void
}) {
	return (
		<button
			className={`h-9 w-9 border border-slate-400 bg-slate-50 text-2xl/6 font-bold ${props.winner && "text-green-500"}`}
			onClick={props.onSquareClick}
		>
			{props.value}
		</button>
	)
}
