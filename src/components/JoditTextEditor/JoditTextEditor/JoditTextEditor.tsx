/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "./JoditTextEditor.css";
import "./JoditTextEditorDark.css";
// import "./JoditTextEditorLight.css";
import React, { useMemo, useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// JoditReact must be loaded client-side
const JoditEditor = dynamic(
  () => import("jodit-react").then((m) => m.default),
  {
    ssr: false,
  }
);

type IProps = {
  value?: string;
  onChange?: (val: string) => void;
};

export default function JoditTextEditor({ value, onChange }: IProps) {
  console.log("Value in Jodit editor: ", value);
  const editor = useRef<any>(null);
  const [content, setContent] = useState<string>(value ?? ""); // ✅ initial value from props

  // external value change sync
  useEffect(() => {
    if (typeof value === "string" && value !== content) {
      setContent(value);
    }
  }, [value, content]);

  const config = useMemo<any>(
    () => ({
      readonly: false,
      height: 560,
      toolbar: true,
      toolbarSticky: true,
      toolbarAdaptive: false,
      showCharsCounter: true,
      showWordsCounter: true,
      showXPathInStatusbar: true,
      statusbar: true,
      spellcheck: true,

      // iframe চাইলে true দিন, না চাইলে false রাখুন
      iframe: false,
      iframeStyle: `
        html,body{margin:0;padding:8px;font:15px/1.6 system-ui;}
        /* শুধু spacing রাখুন, list-style-type force করবেন না */
        ol,ul{padding-left:20px; margin-left:20px; list-style-position: outside;}
        li{display:list-item;}
      `,

      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      defaultActionOnPaste: "insert_as_html",
      uploader: {
        insertImageAsBase64URI: true,
      },
      filebrowser: {
        ajax: {
          url: "",
        },
      },
      removeButtons: [],
      buttons: [
        "source",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "eraser",
        "superscript",
        "subscript",
        "|",
        "ul",
        "ol",
        "indent",
        "outdent",
        "|",
        "fontsize",
        "font",
        "brush",
        "paragraph",
        "lineHeight",
        "|",
        "image",
        "file",
        "video",
        "table",
        "link",
        "symbols",
        "emoji",
        "copyformat",
        "cut",
        "copy",
        "paste",
        "selectall",
        "hr",
        "|",
        "align",
        "left",
        "center",
        "right",
        "justify",
        "|",
        "undo",
        "redo",
        "find",
        "preview",
        "fullsize",
        "print",
        "about",
      ],
      controls: {
        // brush: {
        //   list: [
        //     { label: "Default", style: "" },
        //     { label: "Note", style: "color:#2b6cb0" },
        //     { label: "Warning", style: "color:#d97706" },
        //     { label: "Success", style: "color:#059669" },
        //   ],
        // },
      },
      style: {
        p: {
          margin: "0 0 12px",
          lineHeight: "1.6",
          fontSize: "15px",
        },
      },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-[#1F1F1F]">
      <main className="mx-auto max-w-screen-xl px-4 py-6">
        <div className="rounded-2xl border bg-[#1F1F1F] shadow-sm">
          <div className="p-4 bg-[#1F1F1F]">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onChange={(newContent: string) => {
                setContent(newContent);
                onChange?.(newContent);
              }}
            />

            <div className="mt-3 flex items-center justify-between rounded-lg border bg-neutral-50 px-3 py-2 text-xs text-neutral-600">
              <span>Characters & Words counters are enabled (status bar).</span>
              <button
                className="rounded-lg border px-3 py-1 hover:bg-neutral-100"
                onClick={() => editor.current?.editor?.toggleFullSize?.()}
              >
                Toggle Fullscreen
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* <style jsx global>{`
        @import url("https://cdn.jsdelivr.net/npm/jodit@4.2.24/es2021/jodit.min.css");
        .jodit-toolbar__box,
        .jodit-toolbar-editor-collection {
          background: #f7f7f7 !important;
          border: 1px solid #e5e7eb !important;
          border-bottom: none !important;
          border-radius: 10px 10px 0 0 !important;
        }
        .jodit-container:not(.jodit_inline) .jodit-wysiwyg {
          min-height: 360px;
          background: #ffffff;
        }
        .jodit-workplace {
          border: 1px solid #e5e7eb !important;
          border-top: none !important;
          border-radius: 0 0 10px 10px !important;
          overflow: hidden;
        }
        .jodit-status-bar {
          border-top: 1px solid #e5e7eb !important;
          background: #fafafa !important;
        }
        .jodit-toolbar-button__button {
          height: 34px !important;
          min-width: 34px !important;
        }
        .jodit-toolbar-button:hover .jodit-toolbar-button__button {
          background: #efefef !important;
        }
        .jodit-ui-separator {
          background: #e5e7eb !important;
        }
        .jodit-ui-input__input,
        .jodit-ui-select__select {
          border-radius: 8px !important;
        }
      `}</style> */}
    </div>
  );
}
