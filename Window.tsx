import React from "react";

interface WindowProps {
  children: React.ReactNode
  onClose: () => void
}

export function Window({ children, onClose }: WindowProps) {
  return (
    <>
      <div className="fixed bg-black/100 top-0 right-0 left-0 bottom-0" onClick={onClose} />

      <div className="animate-fade-down animate-duration-[1000ms] animate-ease-out w-[500px] rounded absolute bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 p-5 left-96">

        <h1 className="text-center text-2xl mb-5 font-mono">Authorization</h1>

        {children}
      </div>
    </>
  )
}