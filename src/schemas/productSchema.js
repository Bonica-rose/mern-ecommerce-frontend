import * as yup from "yup";

export const productSchema = yup.object({
    name: yup.string().required("Product name is required"),

    description: yup.string().required("Description is required"),

    category: yup.string().required("Category is required"),

    price: yup
        .number()
        .typeError("Price must be a number")
        .positive()
        .required(),

    stock: yup
        .number()
        .typeError("Stock must be a number")
        .min(0)
        .required(),

    image: yup.mixed(),
});