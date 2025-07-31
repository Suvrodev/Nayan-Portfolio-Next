// "use client";

// import { useEffect } from "react";

// const WordPasteEditor = () => {
//   //   useEffect(() => {
//   //     const script = document.createElement("script");
//   //     script.src = "/tinymce/tinymce.min.js";
//   //     script.referrerPolicy = "origin";
//   //     script.onload = () => {
//   //       (window as any).tinymce.init({
//   //         selector: "#my-editor",
//   //         skin_url: "/tinymce/skins/ui/oxide",
//   //         content_css: "/tinymce/skins/content/default/content.css",
//   //         plugins: "lists link paste",
//   //         toolbar: "undo redo | bold italic | bullist numlist | paste",
//   //       });
//   //     };
//   //     document.body.appendChild(script);
//   //   }, []);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "/tinymce/tinymce.min.js";
//     script.referrerPolicy = "origin";
//     script.onload = () => {
//       (window as any).tinymce.init({
//         selector: "#my-editor",
//         skin_url: "/tinymce/skins/ui/oxide",
//         content_css: "/tinymce/skins/content/default/content.css",
//         plugins: "lists link paste",
//         toolbar: "undo redo | bold italic | bullist numlist | paste",
//         /**
//          * 👇 This is the key part to fix plugin load issue
//          */
//         base_url: "/tinymce", // tells TinyMCE to resolve all paths from here
//       });
//     };
//     document.body.appendChild(script);
//   }, []);
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>TinyMCE Editor in Next.js</h1>
//       <textarea id="my-editor" defaultValue="Start writing here..." />
//     </div>
//   );
// };

// export default WordPasteEditor;
import React from "react";

const TextPage = () => {
  return (
    <div>
      <h1>Text Page</h1>
    </div>
  );
};

export default TextPage;
