"use client";

import { handleLoad } from "@/app/actions/handleLoad";
import { compressAndConvertToBase64 } from "@/components/convertToBase64/compressAndConvertToBase64";
// import JoditEditorComponent from "@/components/JoditEditorComponent/JoditEditorComponent";
import QuilTextEditor from "@/components/modules/shared/TextEditor/QuilTextEditor/QuilTextEditor";
import { sonarId } from "@/components/utils/functions/sonarId";
import { useAddServiceMutation } from "@/redux/features/ServiceApi/serviceApi";
import { TService } from "@/types/globalTypes";
import Image from "next/image";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

const AdminAddService = () => {
  const [addService] = useAddServiceMutation();
  const [imagePreview, setImagePreview] = useState<string>("");

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TService>({
    defaultValues: {
      skillAndTools: [{ title: "", percent: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skillAndTools",
  });

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      // const base64 = await convertToBase64(file);
      const base64 = await compressAndConvertToBase64(file);
      setImagePreview(base64); // preview
      setValue("image", base64); // RHF form value
    }
  };

  const onSubmit = async (data: TService) => {
    console.log("Submitted data:", data);
    toast.loading("Adding Service", { id: sonarId });
    const res = await addService(data).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success("Service Added Successfully", { id: sonarId });
      await handleLoad();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#1f1f1f] text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Add New Service</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            placeholder="Enter service title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Image Upload */}
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
              {/* <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-h-64 object-contain rounded border border-gray-600"
              /> */}
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
          {/* Hidden image field for RHF */}
          <input
            type="hidden"
            {...register("image", { required: "Image is required" })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-1 font-semibold">Short Description</label>
          <textarea
            {...register("shortDescription", {
              required: "Short description is required",
            })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            rows={3}
            placeholder="Brief summary..."
          />
          {errors.shortDescription && (
            <p className="text-red-500 text-sm">
              {errors.shortDescription.message}
            </p>
          )}
        </div>

        {/* Description - Jodit */}
        <div>
          <label className="block mb-1 font-semibold">Full Description</label>
          <Controller
            control={control}
            name="description"
            rules={{ required: "Description is required" }}
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
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Order */}
        <div>
          <label className="block mb-1 font-semibold">Display Order</label>
          <input
            type="number"
            {...register("order", { required: "Order is required" })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            placeholder="Ex: 1"
          />
          {errors.order && (
            <p className="text-red-500 text-sm">{errors.order.message}</p>
          )}
        </div>

        {/* Skills & Tools */}
        <div>
          <label className="block mb-2 font-semibold">Skills & Tools</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-4 mb-3">
              <div className="flex flex-col w-1/2">
                <label className="text-sm mb-1">Skill</label>
                <input
                  // {...register(`skillAndTools.${index}.title`, {
                  //   required: "Skill title is required",
                  // })}
                  {...register(`skillAndTools.${index}.title`)}
                  placeholder="Skill Name"
                  className="p-2 bg-gray-800 border border-gray-600 rounded"
                />
              </div>
              <div className="flex flex-col w-1/4">
                <label className="text-sm mb-1">Percent</label>
                <input
                  type="number"
                  {...register(`skillAndTools.${index}.percent`, {
                    required: "Percent is required",
                    min: 0,
                    max: 100,
                  })}
                  placeholder="%"
                  className="p-2 bg-gray-800 border border-gray-600 rounded"
                />
              </div>
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 hover:text-red-700 text-lg font-bold"
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}

          {fields.length < 3 && (
            <button
              type="button"
              onClick={() => append({ title: "", percent: 0 })}
              className="text-sm text-teal-400 hover:underline mt-1"
            >
              + Add More Skill
            </button>
          )}
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded transition duration-300"
          >
            Save Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddService;
