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

export default function Leaderboard() {
	const [loading, setLoading] = useState(false)

	const load = () => {
		setLoading(true)
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
					) : (
						<div className="text-slate-100">Teste</div>
					)}
				</div>
			</SheetContent>
		</Sheet>
	)
}
