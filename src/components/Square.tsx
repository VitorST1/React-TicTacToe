export default function Square(props: {
	value: string
	winner: boolean
	onSquareClick: () => void
}) {
	return (
		<button
			className={`h-20 w-20 border border-slate-400 text-5xl/9 font-bold sm:h-40 sm:w-40 sm:text-8xl ${props.winner && "text-green-500"}`}
			onClick={props.onSquareClick}
		>
			{props.value}
		</button>
	)
}
