import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { useState } from "react"
import { Skeleton } from "./ui/skeleton"
import { Icon } from "@iconify/react"
import ClearLeaderboard from "./ClearLeaderboard"

export default function Leaderboard() {
	const [loading, setLoading] = useState(false)
	const [leaderboard, setLeaderboard] = useState<{ [key: string]: number }>({})

	const load = () => {
		setLoading(true)

		const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "{}")

		const entries: [string, number][] = Object.entries(leaderboard)

		entries.sort((a, b) => b[1] - a[1])

		const sortedLeaderboard = Object.fromEntries(entries)

		setLeaderboard(sortedLeaderboard)

		setLoading(false)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					className={
						"bg-amber-400 text-slate-900 hover:bg-slate-400 focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2"
					}
					onClick={load}
				>
					Leaderboard
				</Button>
			</SheetTrigger>
			<SheetContent className="overflow-y-auto border-0 bg-slate-800 text-slate-200">
				<SheetHeader className="text-left">
					<SheetTitle className="text-slate-200">Scoreboard</SheetTitle>
					<SheetDescription className="text-slate-400">
						Keep track of the best Tic-Tac-Toe players in your browser
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col gap-5 py-5">
					{loading ? (
						<>
							<div className="flex flex-col gap-2">
								<Skeleton className="h-4 w-[250px] bg-slate-400" />
								<Skeleton className="h-4 w-[200px] bg-slate-500" />
							</div>
							<div className="flex flex-col gap-2">
								<Skeleton className="h-4 w-[250px] bg-slate-400" />
								<Skeleton className="h-4 w-[200px] bg-slate-500" />
							</div>
							<div className="flex flex-col gap-2">
								<Skeleton className="h-4 w-[250px] bg-slate-400" />
								<Skeleton className="h-4 w-[200px] bg-slate-500" />
							</div>
						</>
					) : Object.keys(leaderboard).length === 0 ? (
						<div className="text-center text-slate-300">
							<div>Still no winner.</div>
							<div>Be the first to win a match!</div>
						</div>
					) : (
						<>
							{Object.entries(leaderboard).map(([key, value], index) => (
								<div className="flex items-center gap-2 rounded bg-slate-600 p-2" key={key}>
									{index === 0 && <Icon className="size-8" icon="noto:1st-place-medal" />}
									{index === 1 && <Icon className="size-8" icon="noto:2nd-place-medal" />}
									{index === 2 && <Icon className="size-8" icon="noto:3rd-place-medal" />}
									{index > 2 && (
										<span className="flex size-8 items-center justify-center">{index + 1}</span>
									)}
									{key} -
									<span className="text-blue-300">
										{value} win{value > 1 && "s"}
									</span>
								</div>
							))}
							<ClearLeaderboard loadLeaderboard={load} />
						</>
					)}
				</div>
			</SheetContent>
		</Sheet>
	)
}
