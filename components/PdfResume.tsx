"use client";

import { useState } from "react";
// import default react-pdf entry
import { Document, Page } from "react-pdf";

// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// import workerSrc from "../pdf-worker";

// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
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

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="pt-12">
        <button className="px-4 py-2 text-xs ">Download resume</button>
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
          />
        ))}
      </Document>
    </div>
  );
}
