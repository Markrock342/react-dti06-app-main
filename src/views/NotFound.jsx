import React from "react";
import { MdFreeCancellation } from "react-icons/md";

export default function NotFound() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-bold text-red-600">
          <MdFreeCancellation className="mx-auto text-4xl" />
          ไม่พบหน้านี้ (404 Not Found)
          <br />
          The page you are looking for does not exist.
        </h1>
      </div>
    </>
  );
}
