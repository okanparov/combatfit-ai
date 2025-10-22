import React, { useRef, useState } from 'react'

type Props = { onChange: (url: string) => void; label?: string }

export const ImageUploader: React.FC<Props> = ({ onChange, label }) => {
  const [preview, setPreview] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file)
    setPreview(url)
    onChange(url)
  }

  return (
    <div className="space-y-2">
      <p className="text-sm opacity-80">{label ?? 'Upload image'}</p>
      <div className="flex gap-2">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={(e) => e.target.files && handleFile(e.target.files[0])}
        />
      </div>
      {preview && (
        <img src={preview} alt="preview" className="max-w-full rounded-lg" />
      )}
    </div>
  )
}
