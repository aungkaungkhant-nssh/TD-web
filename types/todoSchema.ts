import * as z from 'zod'

export const TodoSchema = z.object({
    id: z.number().optional(),
    title: z.string().nonempty("Task is required"),
    is_complete: z.boolean().optional().default(false)
})

export type TodoSchemaType = z.infer<typeof TodoSchema>;