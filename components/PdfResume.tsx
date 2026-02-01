"use client";

import { Document, Page } from "react-pdf";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useWindowSize } from "@/hooks/use-window-size";

export default function PDFViewer() {
  const size = useWindowSize();
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) {
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
      <div className="py-6 lg:pt-12">
        <a href="/images/casey-murtaugh-2023.pdf" download>
          Download
        </a>
      </div>
      <Document
        file={"/images/casey-murtaugh-2023.pdf"}
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
