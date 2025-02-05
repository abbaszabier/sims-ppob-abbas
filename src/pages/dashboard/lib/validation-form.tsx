import { z } from "zod";

export const formProfileSchema = z.object({
  first_name: z.string(),

  last_name: z.string(),
});
