import React from "react";
import Header from "@/app/components/header";
import { notFound } from "next/navigation";

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const numId = Number.parseInt(id);
  if (Number.isNaN(numId)) {
    notFound();
  }

  return (
    <>
      <Header>Company ({id})</Header>
    </>
  );
}
