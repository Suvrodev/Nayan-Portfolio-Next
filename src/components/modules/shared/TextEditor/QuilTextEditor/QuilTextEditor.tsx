/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "./QuilTextEditor.css";
import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

// Font setup
const Font = Quill.import("formats/font") as any;
const Size = Quill.import("formats/size") as any;

Font.whitelist = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Roboto",
  '"Times New Roman"',
  '"Courier New"',
  "Georgia",
];
Quill.register(Font, true);

Size.whitelist = ["small", "normal", "large", "huge"];
Quill.register(Size, true);

// Line height setup
const Parchment = Quill.import("parchment");
const StyleAttributor =
  (Quill as any).imports?.StyleAttributor || Parchment.StyleAttributor;

const LineHeight = new StyleAttributor("lineheight", "line-height", {
  scope: Parchment.Scope.BLOCK,
  whitelist: ["1", "1.5", "2", "2.5", "3"],
});
Quill.register(LineHeight, true);

// Props
type QuilTextProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
};

/**
 * Quill Text Editor Component
 */
const QuilTextEditor: React.FC<QuilTextProps> = ({
  value,
  onChange,
  placeholder = "Write something...",
  height = "300px",
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const toolbarOptions = [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ lineheight: ["1", "1.5", "2", "2.5", "3"] }],
        ["link", "image", "clean"],
      ];

      const q = new Quill(editorRef.current, {
        theme: "snow",
        placeholder,
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              image: () => {
                const input = document.createElement("input");
                input.setAttribute("type", "file");
                input.setAttribute("accept", "image/*");
                input.click();

                input.onchange = () => {
                  if (!input.files) return;
                  const file = input.files[0];
                  const reader = new FileReader();
                  reader.onload = () => {
                    const range = q.getSelection();
                    if (range) {
                      q.insertEmbed(
                        range.index,
                        "image",
                        reader.result as string
                      );
                    }
                  };
                  reader.readAsDataURL(file);
                };
              },
            },
          },
        },
        formats: [
          "header",
          "lineheight",
          "bold",
          "italic",
          "underline",
          "strike",
          "script",
          "list",
          "align",
          "link",
          "color",
          "background",
          "image",
        ],
      });

      q.on("text-change", () => {
        onChange(q.root.innerHTML);
      });

      quillRef.current = q;
    }
  }, [placeholder, onChange]);

  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value || "";
    }
  }, [value]);

  return (
    <div className="w-full h-[450px] text-white text-[16px] mb-16">
      <div
        ref={editorRef}
        style={{ minHeight: height }}
        className="border border-gray-300 rounded-lg bg-[#1F1F1F] text-white"
      ></div>
    </div>
  );
};

export default QuilTextEditor;
