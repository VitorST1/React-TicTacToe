import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"

export default function MoveHistory(props: { moves: JSX.Element[] }) {
	const { moves } = props

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					className={
						"bg-slate-200 text-slate-900 hover:bg-slate-400 focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2"
					}
				>
					History
				</Button>
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
	)
}
