//import * as fs from "node:fs";
import fs from "fs/promises";
import { z } from "zod";

const customerSchema = z.object({
  id: z.number(),
  email: z.string(),
  first: z.string(),
  last: z.string(),
  created_at: z.string(),
  country: z.string(),
  balance: z.number(),
});

type Customer = z.infer<typeof customerSchema>;

type Result = { name: string; customers: string[] };

const customersByCountry = (data: Customer[]) => {
  let result: Result[] = [];

  for (const customer of data) {
    let isDuplicate = false;
    for (const newCustomer of result) {
      if (customer.country === newCustomer.name) {
        isDuplicate = true;
        newCustomer.customers = [
          ...newCustomer.customers,
          `${customer.first} ${customer.last}`,
        ];
      }
    }
    if (!isDuplicate) {
      result = [
        ...result,
        {
          name: customer.country,
          customers: [`${customer.first} ${customer.last}`],
        },
      ];
    }
  }
  return result;
};

const readData = async () => {
  try {
    const input = await fs.readFile(`${__dirname}/../data.json`, "utf-8");
    const jsonData = JSON.parse(input);

    const result = customerSchema.array().safeParse(jsonData);
    if (!result.success) return console.log(result.error.issues);

    const validatedData = result.data;
    console.log(customersByCountry(validatedData));
  } catch (error) {
    console.log(error);
  }
};

readData();
// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    {
      name: "customersByCountry",
      content: customersByCountry,
      type: "function",
    },
    { name: "customersByDate", content: customersByDate, type: "function" },
  ];
} catch (error) {
  toExport = { error: error.message };
}

export { toExport };
