"use client";

import goLink from "@/components/functions/goLink";

interface IProps {
  resume: string;
}

const HomeTriggerButton = ({ resume }: IProps) => {
  // console.log("Resume: ", resume);

  const handleDownload = (base64Data: string) => {
    if (!base64Data.startsWith("data:application/pdf;base64,")) {
      alert("Invalid resume format.");
      return;
    }

    const byteString = atob(base64Data.split(",")[1]);
    const byteArray = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      byteArray[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([byteArray], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Sarkar Nayan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div className="flex gap-4 justify-center">
      <button className="primaryButton" onClick={() => handleDownload(resume)}>
        Resume
      </button>
      <button
        className="primaryButton"
        onClick={() => goLink("https://www.fiverr.com/sarkar_nayan")}
      >
        Fiver
      </button>

      <button
        className="primaryButton"
        onClick={() =>
          goLink("https://www.upwork.com/freelancers/~01f71c2421f00e1d48")
        }
      >
        Upwork
      </button>
    </div>
  );
};

export default HomeTriggerButton;
