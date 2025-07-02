"use client"

import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File, AlertCircle, CheckCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface UploadedFile {
  id: string
  name: string
  size: number
  status: 'uploading' | 'completed' | 'error'
  progress: number
  error?: string
}

interface DocumentUploadProps {
  onUploadComplete?: () => void
}

export default function DocumentUpload({ onUploadComplete }: DocumentUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsUploading(true)
    
    // Create initial file states
    const newFiles: UploadedFile[] = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      status: 'uploading',
      progress: 0
    }))
    
    setUploadedFiles(prev => [...prev, ...newFiles])

    // Upload each file
    for (let i = 0; i < acceptedFiles.length; i++) {
      const file = acceptedFiles[i]
      const fileId = newFiles[i].id
      
      try {
        const formData = new FormData()
        formData.append('file', file)

        // Simulate progress
        const progressInterval = setInterval(() => {
          setUploadedFiles(prev => prev.map(f => 
            f.id === fileId && f.progress < 90
              ? { ...f, progress: f.progress + 10 }
              : f
          ))
        }, 200)

        const response = await fetch('/api/documents/upload', {
          method: 'POST',
          body: formData
        })

        clearInterval(progressInterval)

        if (response.ok) {
          setUploadedFiles(prev => prev.map(f => 
            f.id === fileId
              ? { ...f, status: 'completed', progress: 100 }
              : f
          ))
        } else {
          const error = await response.json()
          setUploadedFiles(prev => prev.map(f => 
            f.id === fileId
              ? { ...f, status: 'error', error: error.error || 'Upload failed' }
              : f
          ))
        }
      } catch (error) {
        setUploadedFiles(prev => prev.map(f => 
          f.id === fileId
            ? { ...f, status: 'error', error: 'Upload failed' }
            : f
        ))
      }
    }

    setIsUploading(false)
    if (onUploadComplete) {
      onUploadComplete()
    }
  }, [onUploadComplete])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'text/csv': ['.csv'],
      'application/msword': ['.doc'],
      'application/vnd.ms-excel': ['.xls']
    },
    multiple: true,
    maxSize: 10 * 1024 * 1024 // 10MB
  })

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive 
            ? 'border-blue-400 bg-blue-400/10' 
            : 'border-gray-600 hover:border-gray-500'
          }
        `}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        {isDragActive ? (
          <p className="text-blue-400 text-lg">Drop the files here...</p>
        ) : (
          <div>
            <p className="text-gray-300 text-lg mb-2">
              Drag & drop files here, or click to select
            </p>
            <p className="text-gray-500 text-sm">
              Supports PDF, DOCX, XLSX, CSV files up to 10MB
            </p>
          </div>
        )}
      </div>

      {/* Upload Progress */}
      {uploadedFiles.length > 0 && (
        <Card className="bg-white/5 border-white/10 p-4">
          <h4 className="text-white font-medium mb-3">Upload Progress</h4>
          <div className="space-y-3">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {file.status === 'uploading' && (
                    <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                  )}
                  {file.status === 'completed' && (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  )}
                  {file.status === 'error' && (
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-gray-300 truncate">{file.name}</p>
                    <span className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </span>
                  </div>
                  
                  {file.status === 'uploading' && (
                    <Progress value={file.progress} className="h-2" />
                  )}
                  
                  {file.status === 'error' && (
                    <p className="text-xs text-red-400">{file.error}</p>
                  )}
                  
                  {file.status === 'completed' && (
                    <p className="text-xs text-green-400">Upload completed</p>
                  )}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(file.id)}
                  className="flex-shrink-0 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
} 