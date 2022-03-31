import { object, number, string, TypeOf } from "zod";
const payload = {
  body: object({
    title: string({
      required_error: "Title Is Required",
    }),
    description: string({
      required_error: "Description Is Required",
    }).min(120, "Desc Should be atleast 120 character long"),
    price: number({
      required_error: "Price Is Required",
    }),
    image: string({
      required_error: "image Is Required",
    }),
  }),
};
const params = {
  params: object({
    productId: string({
      required_error: "Product id is required",
    }),
  }),
};
export const createProductSchema = object({
  ...payload,
});
export const updateProductSchema = object({
  ...payload,
  ...params,
});
export const deleteProductSchema = object({
  ...params,
});
export const getProductSchema = object({
  ...params,
});

export type CreateProductInput = TypeOf<typeof createProductSchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;
export type ReadProductInput = TypeOf<typeof getProductSchema>;
