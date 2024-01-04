"use client";
import React from "react";
import DOMPurify from "dompurify";

const SanitizeHTML = ({ text }: { text: string }) => {
  const clean = DOMPurify.sanitize(text);
  return (
    <div className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
  );
};

export default SanitizeHTML;
