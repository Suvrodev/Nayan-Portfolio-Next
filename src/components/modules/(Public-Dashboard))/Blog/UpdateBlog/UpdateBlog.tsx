"use client";

import { handleLoad } from "@/app/actions/handleLoad";
import QuilTextEditor from "@/components/modules/shared/TextEditor/QuilTextEditor/QuilTextEditor";
import { compressAndConvertToBase64 } from "@/components/utils/functions/convertToBase64/compressAndConvertToBase64";
// import JoditEditorComponent from "@/components/JoditEditorComponent/JoditEditorComponent";
import { sonarId } from "@/components/utils/functions/sonarId";
import { useUpdateBlogMutation } from "@/redux/features/BlogApi/blogApi";
import { TBlog } from "@/types/globalTypes";
import Image from "next/image";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface IProps {
  blog: TBlog;
}

const blogCategories = ["Tech", "Design", "Tutorial", "News", "Inspiration"];

const UpdateBlog = ({ blog }: IProps) => {
  const [updateBlog] = useUpdateBlogMutation();

  const [imagePreview, setImagePreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<TBlog>();

  useEffect(() => {
    if (blog) {
      reset({
        ...blog,
        date: new Date(blog.date),
      });
      setImagePreview(blog.image);
    }
  }, [blog, reset]);

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
    toast.loading("Updating Blog...", { id: sonarId });

    const res = await updateBlog({ _id: blog._id, updatedData: data }).unwrap();
    console.log("update Res: ", res);
    if (res?.success) {
      toast.success("Blog Updated Successfully!", { id: sonarId });
      await handleLoad();
    }
  };
  return (
    <div className="w-full mx-auto p-10 bg-gradient-to-br rounded-xl primaryBox">
      <h2 className="text-4xl font-bold mb-10 text-center">✏️ Update Blog</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Title + Author */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Author</label>
            <input
              {...register("author", { required: "Author is required" })}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>
        </div>

        {/* Category + Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Date</label>
            <Controller
              control={control}
              name="date"
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <DatePicker
                  onChange={(date) => field.onChange(date)}
                  selected={
                    typeof field.value === "string"
                      ? new Date(field.value)
                      : field.value
                  }
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded text-white"
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

        {/* Blog Description */}
        <div>
          <label className="block mb-1 font-semibold">Content</label>
          <Controller
            control={control}
            name="description"
            rules={{ required: "Content is required" }}
            render={({ field }) => (
              // <JoditEditorComponent
              //   value={field.value || ""}
              //   onChange={field.onChange}
              // />
              <QuilTextEditor
                value={field.value || ""}
                onChange={field.onChange}
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold text-lg py-3 rounded-xl transition duration-300"
          >
            🔄 Update Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
