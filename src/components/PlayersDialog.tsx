import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Players, playersSchema } from "@/types/types"

import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function PlayersDialog(props: { handlePlayers: (players: Players) => void }) {
	const form = useForm<z.infer<typeof playersSchema>>({
		resolver: zodResolver(playersSchema),
		defaultValues: {
			x: "",
			o: "",
		},
	})

	const onSubmit = (values: z.infer<typeof playersSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)

		props.handlePlayers(values)
	}

	return (
		<Dialog open={true}>
			<DialogContent className="border-slate-600 bg-slate-700 sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold tracking-tight text-slate-300">
						Insert the name of the players to start playing
					</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="x"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-slate-400">Player X</FormLabel>
									<FormControl>
										<Input className="bg-slate-100" placeholder="Player X" {...field} />
									</FormControl>
									{/* <FormDescription>This is your public display name.</FormDescription> */}
									<FormMessage className="text-red-300" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="o"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-slate-400">Player O</FormLabel>
									<FormControl>
										<Input className="bg-slate-100" placeholder="Player O" {...field} />
									</FormControl>
									{/* <FormDescription>This is your public display name.</FormDescription> */}
									<FormMessage className="text-red-300" />
								</FormItem>
							)}
						/>
						<Button
							className="bg-blue-400 text-slate-700 hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
							type="submit"
						>
							Start Game
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}