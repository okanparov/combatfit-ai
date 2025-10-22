import React from 'react'

export const ResultDisplay: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  if (!imageUrl) return null
  return (
    <div className="mt-4">
      <img src={imageUrl} alt="result" className="w-full rounded-xl" />
      <div className="mt-2 flex gap-2">
        <a href={imageUrl} download className="px-3 py-2 rounded bg-black text-white text-sm">
          Download
        </a>
      </div>
    </div>
  )
}
