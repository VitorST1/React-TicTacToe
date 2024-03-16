import { z } from "zod"

export interface Players {
  x: string,
  o: string
}
 
const playersSchema = z.object({
  x: z.string().trim()
    .min(2, {
      message: "The player's name must be at least 2 characters long.",
    })
    .max(10, {
      message: "The player's name must be no longer than 10 characters.",
    }),
  o: z.string().trim()
    .min(2, {
      message: "The player's name must be at least 2 characters long.",
    })
    .max(10, {
      message: "The player's name must be no longer than 10 characters.",
    }),
})

export {
  playersSchema
}