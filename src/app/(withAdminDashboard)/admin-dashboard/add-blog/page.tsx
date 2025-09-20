"use client";

import { compressAndConvertToBase64 } from "@/components/utils/functions/convertToBase64/compressAndConvertToBase64";
import { sonarId } from "@/components/utils/functions/sonarId";
import { useAddBlogMutation } from "@/redux/features/BlogApi/blogApi";
import { TBlog } from "@/types/globalTypes";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { handleLoad } from "@/app/actions/handleLoad";
import JoditTextEditor from "@/components/JoditTextEditor/JoditTextEditor/JoditTextEditor";

const blogCategories = ["Tech", "Design", "Tutorial", "News", "Inspiration"];
const AddBlogPage = () => {
  const [addBlog] = useAddBlogMutation();
  const [imagePreview, setImagePreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<TBlog>({
    defaultValues: {
      date: new Date(),
    },
  });

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64 = await compressAndConvertToBase64(file);
      setImagePreview(base64);
      setValue("image", base64);
    }
  };

  const onSubmit = async (data: TBlog) => {
    // data.date is already a string in format "YYYY-MM-DD"
    toast.loading("Adding Blog...", { id: sonarId });

    const res = await addBlog(data).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success("Blog Added Successfully!", { id: sonarId });
      await handleLoad();
    }
  };
  return (
    <div className="p-10">
      <div className="max-w-6xl mx-auto p-10 bg-gradient-to-br   rounded-xl primaryBox">
        <h2 className="text-4xl font-bold mb-10 text-center">
          📝 Add New Blog
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* Grid: Title + Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block mb-1 font-semibold">Title</label>
              <input
                {...register("title", { required: "Title is required" })}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
                placeholder="Enter blog title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Author */}
            <div>
              <label className="block mb-1 font-semibold">Author</label>
              <input
                {...register("author", { required: "Author is required" })}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
                placeholder="Enter author name"
              />
              {errors.author && (
                <p className="text-red-500 text-sm">{errors.author.message}</p>
              )}
            </div>
          </div>

          {/* Grid: Category + DatePicker */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <div>
              <label className="block mb-1 font-semibold">Category</label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
                defaultValue=""
              >
                <option value="" disabled>
                  -- Select Category --
                </option>
                {blogCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block mb-1 font-semibold">Date</label>
              <Controller
                control={control}
                name="date"
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(date) => field.onChange(date)}
                    selected={
                      typeof field.value === "string"
                        ? new Date(field.value)
                        : field.value
                    }
                    className="w-[100%] p-3 bg-gray-800 border border-gray-600 rounded text-white"
                    dateFormat="yyyy-MM-dd"
                  />
                )}
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block mb-1 font-semibold">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:bg-teal-500 file:text-white hover:file:bg-teal-600"
            />
            {imagePreview && (
              <div className="mt-3">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={500}
                  height={300}
                  className="w-full max-h-64 object-contain rounded border border-gray-600"
                  unoptimized
                />
              </div>
            )}
            <input
              type="hidden"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Blog Content */}
          <div>
            <label className="block mb-1 font-semibold">Content</label>
            <Controller
              control={control}
              name="description"
              rules={{ required: "Content is required" }}
              render={({ field }) => (
                <JoditTextEditor
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold text-lg py-3 rounded-xl transition duration-300"
            >
              🚀 Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
