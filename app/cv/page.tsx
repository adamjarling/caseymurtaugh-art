"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/PdfResume"), {
  ssr: false,
});

export default function CVPage() {
  return <PDFViewer />;
}
