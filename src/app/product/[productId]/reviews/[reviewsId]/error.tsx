"use client";
import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      Error in Review Id {error.message}{" "}
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
