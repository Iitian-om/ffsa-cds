"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  const baseClass = variantClass[variant];

  if (href) {
    return (
      <Link href={href} className={`${baseClass} inline-block ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "danger";
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  const variantClass = {
    primary: "badge-primary",
    success: "badge-success",
    warning: "badge-warning",
    danger: "badge-danger",
  };

  return <span className={variantClass[variant]}>{children}</span>;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div className={`card ${hover ? "card-hover" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-heading">{children}</h2>;
}

interface TableProps {
  columns: string[];
  rows: (string | React.ReactNode)[][];
  className?: string;
}

export function Table({ columns, rows, className = "" }: TableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="border-b border-[#a2a9b1]">
            {columns.map((col, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 font-bold text-[#202122] bg-[#cedff2]"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[#a2a9b1] hover:bg-[#eaecf0] transition-colors duration-200"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-[#202122]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}