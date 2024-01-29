export default function Square(props: { value: string; onSquareClick: () => void }) {
	return (
		<button
			className="h-9 w-9 border border-slate-400 bg-slate-50 text-2xl/6 font-bold"
			onClick={props.onSquareClick}
		>
			{props.value}
		</button>
	)
}
