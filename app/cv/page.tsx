"use client";

import dynamic from "next/dynamic";

import PageTitleBanner from "@/components/PageTitleBanner";

const PDFViewer = dynamic(() => import("@/components/PdfResume"), {
  ssr: false,
});

export default function CVPage() {
  return (
    <>
      <PageTitleBanner>CV</PageTitleBanner>
      <PDFViewer />
    </>
  );
}
