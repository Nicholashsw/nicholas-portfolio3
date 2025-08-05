import { z } from 'zod';

const stringFieldSchema = (minLength = 2, maxLength = 50) => z.string().nonempty().min(minLength).max(maxLength);
const contactFormSchema = z.object({
  firstName: stringFieldSchema(),
  lastName: stringFieldSchema(),
  email: z.string().nonempty().email(),
  message: stringFieldSchema(10, 500)
});

export { contactFormSchema as c };
