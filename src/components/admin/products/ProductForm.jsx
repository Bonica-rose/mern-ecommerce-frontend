import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { productSchema } from "../../../schemas/productSchema";

const ProductForm = ({
  initialValues = null,
  onSubmit,
  loading = false,
  buttonText,
}) => {
  const [preview, setPreview] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: "",
      stock: 0,
      image: null,
    },
  });

  // Populate form while editing
  useEffect(() => {
    if (initialValues) {
      reset({
        name: initialValues.name || "",
        description: initialValues.description || "",
        category: initialValues.category || "",
        price: initialValues.price || "",
        stock: initialValues.stock || 0,
        ratings: initialValues.ratings || "",
      });

      setPreview(initialValues.image || "");
    }
  }, [initialValues, reset]);

  // Image Preview
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  // Submit Form
  const submitHandler = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("ratings", data.ratings);

    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }

    console.log(formData);

    onSubmit(formData);
  };

  const handleReset = () => {
    reset();
    setPreview("");
  };

  return (
    <div className="rounded-lg bg-white shadow">
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6 p-6">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">Product Name</label>

          <input
            type="text"
            {...register("name")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium">Description</label>

          <textarea
            rows={5}
            {...register("description")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium">Category</label>

          <select
            {...register("category")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
            <option value="Books">Books</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Sports">Sports</option>
            <option value="Beauty">Beauty</option>
            <option value="Toys">Toys</option>
            <option value="Groceries">Groceries</option>
            <option value="Other">Other</option>
          </select>

          {errors.category && (
            <p className="mt-1 text-sm text-red-500">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Price & Stock */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Price</label>

            <input
              type="number"
              step="0.01"
              {...register("price")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />

            {errors.price && (
              <p className="mt-1 text-sm text-red-500">
                {errors.price.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Stock</label>

            <input
              type="number"
              {...register("stock")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />

            {errors.stock && (
              <p className="mt-1 text-sm text-red-500">
                {errors.stock.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Ratings</label>

            <input
              type="number"
              step="0.1"
              {...register("ratings")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />

            {errors.ratings && (
              <p className="mt-1 text-sm text-red-500">
                {errors.ratings.message}
              </p>
            )}
          </div>
        </div>

        {/* Image */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={handleImageChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />

          {errors.image && (
            <p className="mt-1 text-sm text-red-500">{errors.image.message}</p>
          )}

          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="h-48 w-48 rounded-md border border-gray-100 object-cover"
              />
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Saving..."
              : buttonText ||
                (initialValues ? "Update Product" : "Add Product")}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-md border border-gray-300 px-6 py-2 hover:bg-gray-100"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
