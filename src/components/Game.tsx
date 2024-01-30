import { useState } from "react"
import Board from "./Board"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

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
				<button className="rounded bg-slate-200 px-4 py-2" onClick={() => jumpTo(move)}>
					{description}
				</button>
			</li>
		)
	})

	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-10 overflow-y-auto bg-slate-900 text-slate-50">
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			<Sheet>
				<SheetTrigger asChild>
					<button
						className={`rounded bg-slate-200 px-4 py-2 text-slate-900 ${moves.length <= 1 && "invisible"}`}
					>
						History
					</button>
				</SheetTrigger>
				<SheetContent className="overflow-y-auto border-0 bg-slate-800 text-slate-200">
					<SheetHeader className="text-left">
						<SheetTitle className="text-slate-200">History</SheetTitle>
						<SheetDescription className="text-slate-400">
							Go back to another point in the game
						</SheetDescription>
					</SheetHeader>
					<div className="py-5 text-slate-800">
						<ol className="flex flex-col gap-2">{moves}</ol>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}
