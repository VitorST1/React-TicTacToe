export default function Square(props: {
	index: number
	value: string
	winner: boolean
	onSquareClick: () => void
}) {
	return (
		<button
			className={`h-20 w-20 border border-slate-400 text-5xl/9 font-bold focus:outline-none focus:ring-4 focus:ring-inset focus:ring-slate-50 sm:h-40 sm:w-40 sm:text-8xl ${props.winner && "text-green-500"}`}
			aria-label={`square${props.index + 1}`}
			onClick={props.onSquareClick}
		>
			{props.value}
		</button>
	)
}
