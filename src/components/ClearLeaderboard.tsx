import { useState } from "react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog"

export default function ClearLeaderboard({ loadLeaderboard }: { loadLeaderboard: () => void }) {
	const [showClearDialog, setShowClearDialog] = useState(false)

	const clear = () => {
		localStorage.setItem("leaderboard", "{}")
		loadLeaderboard()
		setShowClearDialog(false)
	}

	return (
		<>
			<Button
				className="bg-red-400 text-slate-800 hover:bg-red-500 focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2"
				onClick={() => setShowClearDialog(true)}
			>
				Clear Leaderboard
			</Button>
			<Dialog open={showClearDialog}>
				<DialogContent className="border-slate-600 bg-slate-800 sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle className="text-lg font-semibold tracking-tight text-slate-300">
							Clear Leaderboard
						</DialogTitle>
					</DialogHeader>
					<div className="flex flex-col gap-3">
						<div className="text-slate-400">
							<div>Are you sure you want to clear the leaderboard?</div>
							<div>Data will be lost forever!</div>
						</div>
						<div className="flex gap-3">
							<Button
								className="bg-red-400 text-slate-800 hover:bg-red-500 focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2"
								onClick={() => clear()}
							>
								Clear
							</Button>
							<Button
								className="bg-slate-300 text-slate-800 hover:bg-slate-400 focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2"
								onClick={() => setShowClearDialog(false)}
							>
								Cancel
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}
