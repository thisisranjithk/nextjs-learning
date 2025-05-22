import { z } from "zod";

const productSchema = z.object({
  name: z.string().trim().min(3),
  price: z.number(),
});

export default productSchema;
