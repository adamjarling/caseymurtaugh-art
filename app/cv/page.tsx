"use client";

import PageTitleBanner from "@/components/PageTitleBanner";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/PdfResume"), {
  ssr: false,
});

export default function CVPage() {
  return (
    <>
      {/* <PageTitleBanner>CV</PageTitleBanner> */}
      <PDFViewer />
    </>
  );
}
