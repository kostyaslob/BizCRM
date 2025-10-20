"use client"

import React from "react";

export interface ErrorComponentProps {
    error: Error
}

export default function ErrorComponent({}: ErrorComponentProps) {
  return <div>Unexpecxted error inside slot sales</div>;
}
