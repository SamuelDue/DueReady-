"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, Download, Eye, AlertTriangle, CheckCircle, Clock, Trash2 } from 'lucide-react'

interface Document {
  id: string
  filename: string
  originalName: string
  size: number
  uploadedAt: string
  status: 'UPLOADED' | 'PROCESSING' | 'ANALYZED' | 'FAILED'
  category?: string
  analysisComplete: boolean
}

interface DocumentListProps {
  onUpdate?: () => void
}

export default function DocumentList({ onUpdate }: DocumentListProps) {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDocuments()
  }, [])

  const fetchDocuments = async () => {
    try {
      const response = await fetch('/api/documents')
      if (response.ok) {
        const data = await response.json()
        setDocuments(data.documents || [])
      }
    } catch (error) {
      console.error('Failed to fetch documents:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteDocument = async (id: string) => {
    try {
      const response = await fetch(`/api/documents/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        setDocuments(prev => prev.filter(doc => doc.id !== id))
        if (onUpdate) onUpdate()
      }
    } catch (error) {
      console.error('Failed to delete document:', error)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusBadge = (status: string, analysisComplete: boolean) => {
    switch (status) {
      case 'UPLOADED':
        return (
          <Badge variant="secondary" className="bg-yellow-600">
            <Clock className="w-3 h-3 mr-1" />
            Pending Analysis
          </Badge>
        )
      case 'PROCESSING':
        return (
          <Badge variant="secondary" className="bg-blue-600">
            <div className="w-3 h-3 mr-1 border border-white border-t-transparent rounded-full animate-spin" />
            Processing
          </Badge>
        )
      case 'ANALYZED':
        return (
          <Badge variant="secondary" className="bg-green-600">
            <CheckCircle className="w-3 h-3 mr-1" />
            Complete
          </Badge>
        )
      case 'FAILED':
        return (
          <Badge variant="destructive">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Failed
          </Badge>
        )
      default:
        return (
          <Badge variant="secondary">
            Unknown
          </Badge>
        )
    }
  }

  if (loading) {
    return (
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-6">
          <div className="text-center text-gray-400">Loading documents...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Uploaded Documents</CardTitle>
        <CardDescription className="text-gray-400">
          Manage and review your uploaded documents
        </CardDescription>
      </CardHeader>
      <CardContent>
        {documents.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 mb-4">No documents uploaded yet</p>
            <Button>Upload Your First Document</Button>
          </div>
        ) : (
          <div className="space-y-4">
            {documents.map((document) => (
              <div
                key={document.id}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="flex items-center gap-4 flex-1">
                  <FileText className="w-8 h-8 text-gray-400 flex-shrink-0" />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate">
                      {document.originalName}
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                      <span>{formatFileSize(document.size)}</span>
                      <span>{formatDate(document.uploadedAt)}</span>
                      {document.category && (
                        <Badge variant="outline" className="text-xs">
                          {document.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {getStatusBadge(document.status, document.analysisComplete)}
                  
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteDocument(document.id)}
                      className="text-gray-400 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
} 