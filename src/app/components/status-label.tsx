import React from "react";

export enum Status {
    Active,
    NoActive,
    Pending,
    Suspended
}

export interface StatusLabelProps {
    children: React.ReactNode;    
}

export default function StatusLabel({ children }: StatusLabelProps) {
    return <span>{children}</span>;
}