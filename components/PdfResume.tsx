"use client";

import { useState } from "react";
import { Document, Page } from "react-pdf";

import { useWindowSize } from "@/hooks/use-window-size";

export default function PDFViewer() {
  const size = useWindowSize();
  const [file, setFile] = useState("/images/CaseyMurtaugh_Resume2023.pdf");
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) {
    console.log("nextNumPages", nextNumPages);
    setNumPages(nextNumPages);
  }

  const pdfWidth =
    size[0] < 640
      ? size[0]
      : size[0] < 768
      ? size[0] - 60
      : size[0] < 1024
      ? size[0] - 80
      : size[0] < 1280
      ? size[0] - 100
      : 1200;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="pt-6 lg:pt-12">
        <button
          className="px-2 py-1 text-xs border-black"
          style={{ borderWidth: "1px" }}
        >
          Download resume
        </button>
      </div>
      <Document
        file={"/images/CaseyMurtaugh_Resume2023.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
        // @ts-ignore
        pageLayout="twoColumnLeft"
      >
        {/* @ts-ignore */}
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            width={pdfWidth}
          />
        ))}
      </Document>
    </div>
  );
}
