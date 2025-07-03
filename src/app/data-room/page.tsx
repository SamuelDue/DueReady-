"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { FileText, BarChart3, AlertTriangle, CheckCircle, Upload, Search, Filter, Plus, MoreHorizontal, Users, Clock, Target, Folder, Database, Settings, Bell, Download, Eye, Trash2, X, FolderOpen, Shield, Share2, Activity, UserPlus, Lock, ArrowLeft, Calendar, User, FileCheck, MessageCircle, ChevronRight, DollarSign, Scale, Code, Building, UserCheck, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react'

export default function DataRoomPage() {
  const [activeTab, setActiveTab] = useState('folders')
  const [selectedFolder, setSelectedFolder] = useState(null)
  const [selectedSubfolder, setSelectedSubfolder] = useState(null)
  const [documentFilters, setDocumentFilters] = useState({
    status: 'All',
    search: ''
  })
  
  // Search and Filter States
  const [folderSearch, setFolderSearch] = useState('')
  const [folderFilters, setFolderFilters] = useState({
    category: 'All',
    status: 'All',
    completion: 'All'
  })
  const [userSearch, setUserSearch] = useState('')
  const [userFilters, setUserFilters] = useState({
    userType: 'All',
    accessLevel: 'All',
    status: 'All'
  })
  
  // Q&A and Tasks States
  const [qaSearch, setQaSearch] = useState('')
  const [qaFilters, setQaFilters] = useState({
    status: 'All',
    category: 'All',
    priority: 'All'
  })
  const [taskSearch, setTaskSearch] = useState('')
  const [taskFilters, setTaskFilters] = useState({
    status: 'All',
    assignee: 'All',
    priority: 'All'
  })
  
  const [selectedDocument, setSelectedDocument] = useState(null)
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')

  const folders = [
    {
      id: '1',
      name: 'Financial Documents',
      description: 'Financial statements, projections, and audit reports',
      category: 'Financial',
      documentCount: 12,
      viewCount: 156,
      lastAccessed: '2024-01-15T10:30:00Z',
      permissions: ['View', 'Download'],
      userCount: 8,
      status: 'Complete',
      completedDocs: 12,
      totalDocs: 12,
      subfolders: [
        {
          id: '1-1',
          name: 'P&L Statements',
          description: 'Profit & Loss statements by period',
          documentCount: 3,
          documents: ['f1-d1', 'f1-d4', 'f1-d5']
        },
        {
          id: '1-2', 
          name: 'Balance Sheets',
          description: 'Balance sheet reports',
          documentCount: 2,
          documents: ['f1-d2', 'f1-d9']
        },
        {
          id: '1-3',
          name: 'Cash Flow Statements', 
          description: 'Cash flow analysis and projections',
          documentCount: 2,
          documents: ['f1-d3', 'f1-d10']
        },
        {
          id: '1-4',
          name: 'Forecasts & Budgets',
          description: 'Financial projections and budget analysis',
          documentCount: 3,
          documents: ['f1-d2', 'f1-d7', 'f1-d11']
        },
        {
          id: '1-5',
          name: 'Investor Updates',
          description: 'Monthly/quarterly investor reports',
          documentCount: 2,
          documents: ['f1-d6', 'f1-d12']
        }
      ]
    },
    {
      id: '2', 
      name: 'Legal Documents',
      description: 'Contracts, legal entities, and compliance documentation',
      category: 'Legal',
      documentCount: 18,
      viewCount: 89,
      lastAccessed: '2024-01-14T16:45:00Z',
      permissions: ['View'],
      userCount: 12,
      status: 'Missing',
      completedDocs: 18,
      totalDocs: 24,
      subfolders: [
        {
          id: '2-1',
          name: 'Cap Table',
          description: 'Capitalization table and ownership structure',
          documentCount: 3,
          documents: ['f2-d2', 'f2-d14', 'f2-d21']
        },
        {
          id: '2-2',
          name: 'Option Grants & Equity Agreements',
          description: 'Stock options and equity documentation',
          documentCount: 4,
          documents: ['f2-d14', 'f2-d22', 'f2-d23', 'f2-d24']
        },
        {
          id: '2-3',
          name: 'Board Resolutions',
          description: 'Board meeting resolutions and decisions',
          documentCount: 2,
          documents: ['f2-d15', 'f2-d20']
        },
        {
          id: '2-4',
          name: 'Articles of Incorporation / Bylaws',
          description: 'Corporate formation and governance documents',
          documentCount: 2,
          documents: ['f2-d1', 'f2-d18']
        },
        {
          id: '2-5',
          name: 'Contracts',
          description: 'Client, supplier, and partnership contracts',
          documentCount: 5,
          documents: ['f2-d3', 'f2-d4', 'f2-d5', 'f2-d13', 'f2-d19']
        },
        {
          id: '2-6',
          name: 'IP Assignments & Trademarks',
          description: 'Intellectual property and licensing agreements',
          documentCount: 2,
          documents: ['f2-d6', 'f2-d17']
        }
      ]
    },
    {
      id: '3',
      name: 'Technical Documentation',
      description: 'Architecture, security, and technical specifications',
      category: 'Technical',
      documentCount: 8,
      viewCount: 34,
      lastAccessed: '2024-01-13T09:20:00Z',
      permissions: ['View', 'Download'],
      userCount: 5,
      status: 'Complete',
      completedDocs: 8,
      totalDocs: 8,
      subfolders: [
        {
          id: '3-1',
          name: 'Architecture Diagram',
          description: 'System architecture and design documents',
          documentCount: 2,
          documents: ['f3-d1', 'f3-d4']
        },
        {
          id: '3-2',
          name: 'Security Protocols',
          description: 'Security audits and compliance reports',
          documentCount: 2,
          documents: ['f3-d2', 'f3-d5']
        },
        {
          id: '3-3',
          name: 'Infra Overview (Cloud, CI/CD)',
          description: 'Infrastructure and deployment documentation',
          documentCount: 2,
          documents: ['f3-d7', 'f3-d8']
        },
        {
          id: '3-4',
          name: 'Code Audit Reports',
          description: 'Code quality and security audit results',
          documentCount: 1,
          documents: ['f3-d6']
        },
        {
          id: '3-5',
          name: 'Tech Stack Inventory',
          description: 'Technology stack and API documentation',
          documentCount: 1,
          documents: ['f3-d3']
        }
      ]
    },
    {
      id: '4',
      name: 'Corporate Information',
      description: 'Governance, board materials, and organizational docs',
      category: 'Corporate',
      documentCount: 12,
      viewCount: 67,
      lastAccessed: '2024-01-12T14:15:00Z',
      permissions: ['View'],
      userCount: 6,
      status: 'Needs Review',
      completedDocs: 12,
      totalDocs: 15,
      subfolders: [
        {
          id: '4-1',
          name: 'Board Materials',
          description: 'Board meeting agendas, minutes, and resolutions',
          documentCount: 4,
          documents: ['f4-d1', 'f4-d10', 'f4-d12', 'f4-d13']
        },
        {
          id: '4-2',
          name: 'Org Chart',
          description: 'Organizational structure and reporting lines',
          documentCount: 2,
          documents: ['f4-d4', 'f4-d11']
        },
        {
          id: '4-3',
          name: 'Shareholder Info',
          description: 'Shareholder communications and reports',
          documentCount: 2,
          documents: ['f4-d13', 'f4-d14']
        },
        {
          id: '4-4',
          name: 'Mission/Vision/Values',
          description: 'Company culture and strategic documents',
          documentCount: 2,
          documents: ['f4-d5', 'f4-d6']
        },
        {
          id: '4-5',
          name: 'Founding Docs',
          description: 'Incorporation and founding documentation',
          documentCount: 2,
          documents: ['f4-d2', 'f4-d15']
        }
      ]
    },
    {
      id: '5',
      name: 'HR & People',
      description: 'Employee contracts, ESOP documents, and hiring plans',
      category: 'HR',
      documentCount: 11,
      viewCount: 52,
      lastAccessed: '2024-01-15T13:20:00Z',
      permissions: ['View', 'Download'],
      userCount: 6,
      status: 'Complete',
      completedDocs: 10,
      totalDocs: 11,
      subfolders: [
        {
          id: '5-1',
          name: 'Employee Contracts',
          description: 'Employment agreements and contract templates',
          documentCount: 2,
          documents: ['f5-d1', 'f5-d8']
        },
        {
          id: '5-2',
          name: 'ESOP & Equity',
          description: 'Employee stock option plans and equity grants',
          documentCount: 2,
          documents: ['f5-d2', 'f5-d8']
        },
        {
          id: '5-3',
          name: 'Hiring & Development',
          description: 'Hiring plans and training programs',
          documentCount: 3,
          documents: ['f5-d3', 'f5-d9', 'f5-d11']
        },
        {
          id: '5-4',
          name: 'Compensation & Benefits',
          description: 'Salary structure and benefits documentation',
          documentCount: 2,
          documents: ['f5-d5', 'f5-d6']
        },
        {
          id: '5-5',
          name: 'Policies & Reviews',
          description: 'HR policies and performance management',
          documentCount: 2,
          documents: ['f5-d4', 'f5-d7']
        }
      ]
    },
    {
      id: '6',
      name: 'Commercial & Sales',
      description: 'Customer contracts, sales pipeline, and pricing strategy',
      category: 'Commercial',
      documentCount: 14,
      viewCount: 78,
      lastAccessed: '2024-01-15T10:45:00Z',
      permissions: ['View'],
      userCount: 7,
      status: 'Needs Review',
      completedDocs: 12,
      totalDocs: 14,
      subfolders: [
        {
          id: '6-1',
          name: 'Customer Contracts',
          description: 'Client agreements and enterprise contracts',
          documentCount: 3,
          documents: ['f6-d1', 'f6-d12', 'f6-d14']
        },
        {
          id: '6-2',
          name: 'Sales Pipeline & Forecasting',
          description: 'Sales pipeline data and forecasting models',
          documentCount: 2,
          documents: ['f6-d2', 'f6-d13']
        },
        {
          id: '6-3',
          name: 'Pricing & Commission',
          description: 'Pricing strategy and commission structure',
          documentCount: 2,
          documents: ['f6-d3', 'f6-d6']
        },
        {
          id: '6-4',
          name: 'Market Analysis',
          description: 'Market research and competitive analysis',
          documentCount: 3,
          documents: ['f6-d7', 'f6-d9', 'f6-d4']
        },
        {
          id: '6-5',
          name: 'Partnerships',
          description: 'Partnership agreements and channel relationships',
          documentCount: 2,
          documents: ['f6-d5', 'f6-d14']
        },
        {
          id: '6-6',
          name: 'Customer Success',
          description: 'Customer metrics, testimonials, and retention',
          documentCount: 2,
          documents: ['f6-d8', 'f6-d11']
        }
      ]
    },
    {
      id: '7',
      name: 'Product & Strategy',
      description: 'Product roadmaps, KPIs, pitch deck, and strategic plans',
      category: 'Product',
      documentCount: 9,
      viewCount: 94,
      lastAccessed: '2024-01-15T15:10:00Z',
      permissions: ['View', 'Download'],
      userCount: 8,
      status: 'Complete',
      completedDocs: 9,
      totalDocs: 9,
      subfolders: [
        {
          id: '7-1',
          name: 'Product Roadmap',
          description: 'Product development timeline and roadmap',
          documentCount: 2,
          documents: ['f7-d1', 'f7-d9']
        },
        {
          id: '7-2',
          name: 'Strategy & Vision',
          description: 'Strategic planning and vision documents',
          documentCount: 2,
          documents: ['f7-d4', 'f7-d7']
        },
        {
          id: '7-3',
          name: 'Investor Materials',
          description: 'Pitch deck and investor presentations',
          documentCount: 1,
          documents: ['f7-d3']
        },
        {
          id: '7-4',
          name: 'Market Positioning',
          description: 'Competitive positioning and market analysis',
          documentCount: 2,
          documents: ['f7-d5', 'f7-d6']
        },
        {
          id: '7-5',
          name: 'Metrics & Analytics',
          description: 'KPIs, metrics, and performance analytics',
          documentCount: 2,
          documents: ['f7-d2', 'f7-d8']
        }
      ]
    },
    {
      id: '8',
      name: 'Compliance & Risk',
      description: 'GDPR compliance, SOC2 reports, insurance, and risk policies',
      category: 'Compliance',
      documentCount: 13,
      viewCount: 31,
      lastAccessed: '2024-01-14T14:35:00Z',
      permissions: ['View'],
      userCount: 5,
      status: 'Missing',
      completedDocs: 9,
      totalDocs: 13,
      subfolders: [
        {
          id: '8-1',
          name: 'Data Privacy & GDPR',
          description: 'GDPR compliance and privacy documentation',
          documentCount: 2,
          documents: ['f8-d1', 'f8-d11']
        },
        {
          id: '8-2',
          name: 'Security Compliance',
          description: 'SOC2 reports and security certifications',
          documentCount: 3,
          documents: ['f8-d2', 'f8-d4', 'f8-d8']
        },
        {
          id: '8-3',
          name: 'Insurance & Coverage',
          description: 'Insurance policies and coverage documentation',
          documentCount: 2,
          documents: ['f8-d3', 'f8-d10']
        },
        {
          id: '8-4',
          name: 'Risk Management',
          description: 'Risk assessments and management frameworks',
          documentCount: 3,
          documents: ['f8-d5', 'f8-d7', 'f8-d12']
        },
        {
          id: '8-5',
          name: 'Vendor & Third Party',
          description: 'Vendor assessments and third-party risk',
          documentCount: 2,
          documents: ['f8-d6', 'f8-d12']
        },
        {
          id: '8-6',
          name: 'Regulatory Compliance',
          description: 'Regulatory requirements and compliance tracking',
          documentCount: 1,
          documents: ['f8-d9']
        }
      ]
    }
  ]

  const folderDocuments = {
    '1': [
      {
        id: 'f1-d1',
        name: 'Audited_Financial_Statements_2023.pdf',
        size: 3457600,
        uploadedAt: '2024-01-10T14:30:00Z',
        uploadedBy: 'Finance Team',
        status: 'Complete',
        lastViewed: '2024-01-15T10:30:00Z',
        viewCount: 23,
        comments: [
          {
            id: 'c1',
            author: 'Sarah Chen',
            role: 'Legal Counsel',
            avatar: 'SC',
            message: 'Revenue recognition looks correct, but please verify the Q4 adjustments on page 23.',
            timestamp: '2024-01-15T09:45:00Z',
            mentions: [],
            permissions: ['founder', 'legal', 'finance']
          },
          {
            id: 'c2',
            author: 'Mike Johnson',
            role: 'CFO',
            avatar: 'MJ',
            message: '@sarah-chen The Q4 adjustments have been verified by our external auditor. All entries are properly documented.',
            timestamp: '2024-01-15T11:20:00Z',
            mentions: ['sarah-chen'],
            permissions: ['founder', 'legal', 'finance']
          }
        ]
      },
      {
        id: 'f1-d2',
        name: 'Financial_Projections_5Year.xlsx',
        size: 1524288,
        uploadedAt: '2024-01-08T16:45:00Z',
        uploadedBy: 'CFO',
        status: 'Complete',
        lastViewed: '2024-01-15T09:15:00Z',
        viewCount: 18
      },
      {
        id: 'f1-d3',
        name: 'Cash_Flow_Analysis_Q4.pdf',
        size: 892160,
        uploadedAt: '2024-01-05T11:20:00Z',
        uploadedBy: 'Finance Team',
        status: 'Complete',
        lastViewed: '2024-01-14T14:22:00Z',
        viewCount: 12
      },
      {
        id: 'f1-d4',
        name: 'Audited_Financial_Statements_2022.pdf',
        size: 3211776,
        uploadedAt: '2024-01-04T12:15:00Z',
        uploadedBy: 'Finance Team',
        status: 'Complete',
        lastViewed: '2024-01-13T16:20:00Z',
        viewCount: 19
      },
      {
        id: 'f1-d5',
        name: 'Audited_Financial_Statements_2021.pdf',
        size: 2987648,
        uploadedAt: '2024-01-03T10:30:00Z',
        uploadedBy: 'Finance Team',
        status: 'Complete',
        lastViewed: '2024-01-12T14:45:00Z',
        viewCount: 15
      },
      {
        id: 'f1-d6',
        name: 'Management_Financial_Reports_Q4.xlsx',
        size: 987654,
        uploadedAt: '2024-01-02T15:20:00Z',
        uploadedBy: 'CFO',
        status: 'Complete',
        lastViewed: '2024-01-11T11:30:00Z',
        viewCount: 8
      },
      {
        id: 'f1-d7',
        name: 'Budget_Variance_Analysis_2024.xlsx',
        size: 654321,
        uploadedAt: '2024-01-01T09:45:00Z',
        uploadedBy: 'Finance Team',
        status: 'Complete',
        lastViewed: '2024-01-10T13:15:00Z',
        viewCount: 6
      },
      {
        id: 'f1-d8',
        name: 'Tax_Returns_2023.pdf',
        size: 1876543,
        uploadedAt: '2023-12-28T14:30:00Z',
        uploadedBy: 'Tax Advisor',
        status: 'Complete',
        lastViewed: '2024-01-09T10:20:00Z',
        viewCount: 11
      },
      {
        id: 'f1-d9',
        name: 'Bank_Statements_2024_Q1.pdf',
        size: 1234567,
        uploadedAt: '2023-12-27T11:15:00Z',
        uploadedBy: 'Finance Team',
        status: 'Complete',
        lastViewed: '2024-01-08T15:40:00Z',
        viewCount: 9
      },
      {
        id: 'f1-d10',
        name: 'Financial_KPIs_Dashboard.xlsx',
        size: 789012,
        uploadedAt: '2023-12-26T16:20:00Z',
        uploadedBy: 'CFO',
        status: 'Complete',
        lastViewed: '2024-01-07T12:25:00Z',
        viewCount: 14
      },
      {
        id: 'f1-d11',
        name: 'Accounts_Receivable_Analysis.xlsx',
        size: 567890,
        uploadedAt: '2023-12-25T13:45:00Z',
        uploadedBy: 'Finance Team',
        status: 'Complete',
        lastViewed: '2024-01-06T09:30:00Z',
        viewCount: 7
      },
      {
        id: 'f1-d12',
        name: 'Investment_Portfolio_Summary.pdf',
        size: 1098765,
        uploadedAt: '2023-12-24T10:30:00Z',
        uploadedBy: 'Investment Manager',
        status: 'Complete',
        lastViewed: '2024-01-05T14:15:00Z',
        viewCount: 13
      }
    ],
    '2': [
      {
        id: 'f2-d1',
        name: 'Articles_of_Incorporation.pdf',
        size: 524288,
        uploadedAt: '2024-01-12T09:30:00Z',
        uploadedBy: 'Legal Team',
        status: 'Complete',
        lastViewed: '2024-01-14T16:45:00Z',
        viewCount: 15
      },
      {
        id: 'f2-d2',
        name: 'Shareholder_Agreements.pdf',
        size: 1048576,
        uploadedAt: '2024-01-10T14:15:00Z',
        uploadedBy: 'Legal Counsel',
        status: 'Complete',
        lastViewed: '2024-01-14T11:30:00Z',
        viewCount: 22
      },
      {
        id: 'f2-d3',
        name: 'Employment_Contracts_Template.docx',
        size: 345678,
        uploadedAt: '2024-01-09T11:20:00Z',
        uploadedBy: 'HR Legal',
        status: 'Complete',
        lastViewed: '2024-01-13T15:10:00Z',
        viewCount: 8
      },
      {
        id: 'f2-d4',
        name: 'Non_Disclosure_Agreements.pdf',
        size: 678901,
        uploadedAt: '2024-01-08T13:45:00Z',
        uploadedBy: 'Legal Team',
        status: 'Complete',
        lastViewed: '2024-01-12T10:25:00Z',
        viewCount: 12
      },
      {
        id: 'f2-d5',
        name: 'Vendor_Service_Agreements.pdf',
        size: 890123,
        uploadedAt: '2024-01-07T16:30:00Z',
        uploadedBy: 'Legal Counsel',
        status: 'Complete',
        lastViewed: '2024-01-11T14:20:00Z',
        viewCount: 6
      },
      {
        id: 'f2-d6',
        name: 'Intellectual_Property_Assignments.pdf',
        size: 756432,
        uploadedAt: '2024-01-06T12:15:00Z',
        uploadedBy: 'IP Attorney',
        status: 'Complete',
        lastViewed: '2024-01-10T11:45:00Z',
        viewCount: 18
      },
      {
        id: 'f2-d7',
        name: 'Lease_Agreement_Office_Space.pdf',
        size: 1234567,
        uploadedAt: '2024-01-05T09:40:00Z',
        uploadedBy: 'Legal Team',
        status: 'Complete',
        lastViewed: '2024-01-09T13:30:00Z',
        viewCount: 9
      },
      {
        id: 'f2-d8',
        name: 'Insurance_Policies_Corporate.pdf',
        size: 987654,
        uploadedAt: '2024-01-04T15:25:00Z',
        uploadedBy: 'Legal Counsel',
        status: 'Complete',
        lastViewed: '2024-01-08T16:15:00Z',
        viewCount: 7
      },
      {
        id: 'f2-d9',
        name: 'Compliance_Audit_Report.pdf',
        size: 1567890,
        uploadedAt: '2024-01-03T11:50:00Z',
        uploadedBy: 'Compliance Officer',
        status: 'Complete',
        lastViewed: '2024-01-07T12:40:00Z',
        viewCount: 14
      },
      {
        id: 'f2-d10',
        name: 'Data_Privacy_Policy.pdf',
        size: 432109,
        uploadedAt: '2024-01-02T14:35:00Z',
        uploadedBy: 'Legal Team',
        status: 'Complete',
        lastViewed: '2024-01-06T15:20:00Z',
        viewCount: 11
      },
      {
        id: 'f2-d11',
        name: 'Terms_of_Service.pdf',
        size: 654321,
        uploadedAt: '2024-01-01T10:20:00Z',
        uploadedBy: 'Legal Counsel',
        status: 'Complete',
        lastViewed: '2024-01-05T13:10:00Z',
        viewCount: 16
      },
      {
        id: 'f2-d12',
        name: 'Regulatory_Filings_SEC.pdf',
        size: 2109876,
        uploadedAt: '2023-12-30T16:45:00Z',
        uploadedBy: 'Legal Team',
        status: 'Complete',
        lastViewed: '2024-01-04T14:25:00Z',
        viewCount: 13
      },
      {
        id: 'f2-d13',
        name: 'Partnership_Agreement_Draft.docx',
        size: 876543,
        uploadedAt: '2023-12-29T12:30:00Z',
        uploadedBy: 'Legal Counsel',
        status: 'Complete',
        lastViewed: '2024-01-03T11:15:00Z',
        viewCount: 5
      },
      {
        id: 'f2-d14',
        name: 'Stock_Option_Plan.pdf',
        size: 1345678,
        uploadedAt: '2023-12-28T15:10:00Z',
        uploadedBy: 'Legal Team',
        status: 'Complete',
        lastViewed: '2024-01-02T16:30:00Z',
        viewCount: 19
      },
      {
        id: 'f2-d15',
        name: 'Board_Resolution_Template.docx',
        size: 234567,
        uploadedAt: '2023-12-27T13:25:00Z',
        uploadedBy: 'Corporate Secretary',
        status: 'Complete',
        lastViewed: '2024-01-01T12:45:00Z',
        viewCount: 8
      },
      {
        id: 'f2-d16',
        name: 'Merger_Agreement_Template.pdf',
        size: 1987654,
        uploadedAt: '2023-12-26T10:40:00Z',
        uploadedBy: 'M&A Attorney',
        status: 'Complete',
        lastViewed: '2023-12-31T15:20:00Z',
        viewCount: 4
      },
      {
        id: 'f2-d17',
        name: 'Licensing_Agreement_Software.pdf',
        size: 765432,
        uploadedAt: '2023-12-25T14:55:00Z',
        uploadedBy: 'Legal Counsel',
        status: 'Complete',
        lastViewed: '2023-12-30T11:35:00Z',
        viewCount: 10
      },
      {
        id: 'f2-d18',
        name: 'Corporate_Bylaws.pdf',
        size: 1123456,
        uploadedAt: '2023-12-24T11:15:00Z',
        uploadedBy: 'Legal Team',
        status: 'Complete',
        lastViewed: '2023-12-29T14:50:00Z',
        viewCount: 17
      },
      {
        id: 'f2-d19',
        name: 'Customer_Contracts_Template.pdf',
        size: 543210,
        uploadedAt: '2023-12-23T14:20:00Z',
        uploadedBy: 'Legal Counsel',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f2-d20',
        name: 'Director_Indemnification_Agreement.pdf',
        size: 876543,
        uploadedAt: '2023-12-22T16:30:00Z',
        uploadedBy: 'Legal Team',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f2-d21',
        name: 'Securities_Purchase_Agreement.pdf',
        size: 1456789,
        uploadedAt: '2023-12-21T11:45:00Z',
        uploadedBy: 'Securities Attorney',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f2-d22',
        name: 'Employee_Stock_Purchase_Plan.pdf',
        size: 987456,
        uploadedAt: '2023-12-20T13:15:00Z',
        uploadedBy: 'Legal Team',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f2-d23',
        name: 'Convertible_Note_Agreement.pdf',
        size: 1234789,
        uploadedAt: '2023-12-19T15:40:00Z',
        uploadedBy: 'Legal Counsel',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f2-d24',
        name: 'Warrant_Agreement_Template.pdf',
        size: 654987,
        uploadedAt: '2023-12-18T12:25:00Z',
        uploadedBy: 'Securities Attorney',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      }
    ],
    '3': [
      {
        id: 'f3-d1',
        name: 'System_Architecture_Overview.pdf',
        size: 2097152,
        uploadedAt: '2024-01-11T10:45:00Z',
        uploadedBy: 'CTO',
        status: 'Complete',
        lastViewed: '2024-01-13T09:20:00Z',
        viewCount: 8
      },
      {
        id: 'f3-d2',
        name: 'Security_Compliance_Report.pdf',
        size: 1572864,
        uploadedAt: '2024-01-09T13:20:00Z',
        uploadedBy: 'Security Team',
        status: 'Complete',
        lastViewed: '2024-01-12T16:10:00Z',
        viewCount: 11
      },
      {
        id: 'f3-d3',
        name: 'API_Documentation.pdf',
        size: 3456789,
        uploadedAt: '2024-01-08T15:30:00Z',
        uploadedBy: 'Lead Developer',
        status: 'Complete',
        lastViewed: '2024-01-11T12:45:00Z',
        viewCount: 15
      },
      {
        id: 'f3-d4',
        name: 'Database_Schema_Design.pdf',
        size: 1987654,
        uploadedAt: '2024-01-07T11:20:00Z',
        uploadedBy: 'Database Admin',
        status: 'Complete',
        lastViewed: '2024-01-10T14:30:00Z',
        viewCount: 9
      },
      {
        id: 'f3-d5',
        name: 'Security_Audit_Findings.pdf',
        size: 2345678,
        uploadedAt: '2024-01-06T14:15:00Z',
        uploadedBy: 'Security Auditor',
        status: 'Complete',
        lastViewed: '2024-01-09T16:25:00Z',
        viewCount: 12
      },
      {
        id: 'f3-d6',
        name: 'Infrastructure_Diagram.pdf',
        size: 1654321,
        uploadedAt: '2024-01-05T10:40:00Z',
        uploadedBy: 'DevOps Engineer',
        status: 'Complete',
        lastViewed: '2024-01-08T13:50:00Z',
        viewCount: 7
      },
      {
        id: 'f3-d7',
        name: 'Performance_Testing_Results.xlsx',
        size: 876543,
        uploadedAt: '2024-01-04T16:25:00Z',
        uploadedBy: 'QA Engineer',
        status: 'Complete',
        lastViewed: '2024-01-07T11:15:00Z',
        viewCount: 6
      },
      {
        id: 'f3-d8',
        name: 'Disaster_Recovery_Plan.pdf',
        size: 1234567,
        uploadedAt: '2024-01-03T12:30:00Z',
        uploadedBy: 'DevOps Team',
        status: 'Complete',
        lastViewed: '2024-01-06T15:40:00Z',
        viewCount: 10
      }
    ],
    '4': [
      {
        id: 'f4-d1',
        name: 'Board_Meeting_Minutes_2024.pdf',
        size: 786432,
        uploadedAt: '2024-01-08T15:30:00Z',
        uploadedBy: 'Corporate Secretary',
        status: 'Complete',
        lastViewed: '2024-01-12T14:15:00Z',
        viewCount: 9
      },
      {
        id: 'f4-d2',
        name: 'Corporate_Governance_Policy.pdf',
        size: 1245184,
        uploadedAt: '2024-01-06T11:45:00Z',
        uploadedBy: 'Legal Team',
        status: 'Complete',
        lastViewed: '2024-01-11T10:20:00Z',
        viewCount: 7
      },
      {
        id: 'f4-d3',
        name: 'Executive_Compensation_Plan.pdf',
        size: 987654,
        uploadedAt: '2024-01-05T14:20:00Z',
        uploadedBy: 'HR Director',
        status: 'Complete',
        lastViewed: '2024-01-10T16:35:00Z',
        viewCount: 12
      },
      {
        id: 'f4-d4',
        name: 'Organizational_Chart.pdf',
        size: 345678,
        uploadedAt: '2024-01-04T10:15:00Z',
        uploadedBy: 'HR Team',
        status: 'Complete',
        lastViewed: '2024-01-09T13:25:00Z',
        viewCount: 8
      },
      {
        id: 'f4-d5',
        name: 'Employee_Handbook.pdf',
        size: 2345678,
        uploadedAt: '2024-01-03T16:40:00Z',
        uploadedBy: 'HR Director',
        status: 'Complete',
        lastViewed: '2024-01-08T11:50:00Z',
        viewCount: 14
      },
      {
        id: 'f4-d6',
        name: 'Code_of_Conduct.pdf',
        size: 654321,
        uploadedAt: '2024-01-02T12:25:00Z',
        uploadedBy: 'Compliance Officer',
        status: 'Complete',
        lastViewed: '2024-01-07T15:10:00Z',
        viewCount: 11
      },
      {
        id: 'f4-d7',
        name: 'Risk_Management_Framework.pdf',
        size: 1567890,
        uploadedAt: '2024-01-01T13:30:00Z',
        uploadedBy: 'Risk Manager',
        status: 'Complete',
        lastViewed: '2024-01-06T12:45:00Z',
        viewCount: 6
      },
      {
        id: 'f4-d8',
        name: 'Internal_Audit_Charter.pdf',
        size: 876543,
        uploadedAt: '2023-12-30T15:15:00Z',
        uploadedBy: 'Internal Auditor',
        status: 'Complete',
        lastViewed: '2024-01-05T14:20:00Z',
        viewCount: 5
      },
      {
        id: 'f4-d9',
        name: 'Whistleblower_Policy.pdf',
        size: 432109,
        uploadedAt: '2023-12-29T11:40:00Z',
        uploadedBy: 'Compliance Officer',
        status: 'Complete',
        lastViewed: '2024-01-04T16:30:00Z',
        viewCount: 9
      },
      {
        id: 'f4-d10',
        name: 'Board_Committee_Charters.pdf',
        size: 1098765,
        uploadedAt: '2023-12-28T14:50:00Z',
        uploadedBy: 'Corporate Secretary',
        status: 'Complete',
        lastViewed: '2024-01-03T13:15:00Z',
        viewCount: 7
      },
      {
        id: 'f4-d11',
        name: 'Executive_Performance_Reviews.pdf',
        size: 1345678,
        uploadedAt: '2023-12-27T10:35:00Z',
        uploadedBy: 'HR Director',
        status: 'Complete',
        lastViewed: '2024-01-02T15:25:00Z',
        viewCount: 4
      },
      {
        id: 'f4-d12',
        name: 'Strategic_Planning_Minutes.pdf',
        size: 765432,
        uploadedAt: '2023-12-26T16:20:00Z',
        uploadedBy: 'Strategy Team',
        status: 'Complete',
        lastViewed: '2024-01-01T11:40:00Z',
        viewCount: 8
      },
      {
        id: 'f4-d13',
        name: 'Annual_Shareholder_Meeting_Minutes.pdf',
        size: 654321,
        uploadedAt: '2023-12-25T11:30:00Z',
        uploadedBy: 'Corporate Secretary',
        status: 'Needs Review',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f4-d14',
        name: 'Director_Appointment_Letters.pdf',
        size: 876543,
        uploadedAt: '2023-12-24T14:45:00Z',
        uploadedBy: 'Legal Team',
        status: 'Needs Review',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f4-d15',
        name: 'Corporate_Insurance_Certificates.pdf',
        size: 1234567,
        uploadedAt: '2023-12-23T09:15:00Z',
        uploadedBy: 'Risk Manager',
        status: 'Needs Review',
        lastViewed: null,
        viewCount: 0
      }
    ],
    '5': [
      {
        id: 'f5-d1',
        name: 'Employee_Contracts_Standard.pdf',
        size: 543210,
        uploadedAt: '2024-01-12T09:30:00Z',
        uploadedBy: 'HR Director',
        status: 'Complete',
        lastViewed: '2024-01-15T13:20:00Z',
        viewCount: 14
      },
      {
        id: 'f5-d2',
        name: 'ESOP_Stock_Option_Plan.pdf',
        size: 1234567,
        uploadedAt: '2024-01-10T14:15:00Z',
        uploadedBy: 'Legal Team',
        status: 'Complete',
        lastViewed: '2024-01-14T16:45:00Z',
        viewCount: 19
      },
      {
        id: 'f5-d3',
        name: 'Hiring_Plan_2024.xlsx',
        size: 789012,
        uploadedAt: '2024-01-08T11:20:00Z',
        uploadedBy: 'HR Director',
        status: 'Complete',
        lastViewed: '2024-01-13T15:10:00Z',
        viewCount: 12
      },
      {
        id: 'f5-d4',
        name: 'Performance_Review_Framework.pdf',
        size: 456789,
        uploadedAt: '2024-01-07T13:45:00Z',
        uploadedBy: 'HR Team',
        status: 'Complete',
        lastViewed: '2024-01-12T10:25:00Z',
        viewCount: 8
      },
      {
        id: 'f5-d5',
        name: 'Compensation_Structure.xlsx',
        size: 987654,
        uploadedAt: '2024-01-06T16:30:00Z',
        uploadedBy: 'HR Director',
        status: 'Complete',
        lastViewed: '2024-01-11T14:20:00Z',
        viewCount: 15
      },
      {
        id: 'f5-d6',
        name: 'Employee_Benefits_Summary.pdf',
        size: 321098,
        uploadedAt: '2024-01-05T12:15:00Z',
        uploadedBy: 'Benefits Admin',
        status: 'Complete',
        lastViewed: '2024-01-10T11:45:00Z',
        viewCount: 11
      },
      {
        id: 'f5-d7',
        name: 'Remote_Work_Policy.pdf',
        size: 234567,
        uploadedAt: '2024-01-04T09:40:00Z',
        uploadedBy: 'HR Team',
        status: 'Complete',
        lastViewed: '2024-01-09T13:30:00Z',
        viewCount: 9
      },
      {
        id: 'f5-d8',
        name: 'Employee_Equity_Agreements.pdf',
        size: 1456789,
        uploadedAt: '2024-01-03T15:25:00Z',
        uploadedBy: 'Legal Counsel',
        status: 'Complete',
        lastViewed: '2024-01-08T16:15:00Z',
        viewCount: 16
      },
      {
        id: 'f5-d9',
        name: 'Training_Development_Plan.pdf',
        size: 654321,
        uploadedAt: '2024-01-02T11:50:00Z',
        uploadedBy: 'HR Director',
        status: 'Complete',
        lastViewed: '2024-01-07T12:40:00Z',
        viewCount: 7
      },
      {
        id: 'f5-d10',
        name: 'Diversity_Inclusion_Report.pdf',
        size: 876543,
        uploadedAt: '2024-01-01T14:35:00Z',
        uploadedBy: 'HR Team',
        status: 'Complete',
        lastViewed: '2024-01-06T15:20:00Z',
        viewCount: 6
      },
      {
        id: 'f5-d11',
        name: 'Key_Personnel_Retention_Plan.pdf',
        size: 543210,
        uploadedAt: '2023-12-30T10:20:00Z',
        uploadedBy: 'HR Director',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      }
    ],
    '6': [
      {
        id: 'f6-d1',
        name: 'Customer_Contracts_Master.pdf',
        size: 2345678,
        uploadedAt: '2024-01-11T10:45:00Z',
        uploadedBy: 'Sales Director',
        status: 'Complete',
        lastViewed: '2024-01-15T10:45:00Z',
        viewCount: 18
      },
      {
        id: 'f6-d2',
        name: 'Sales_Pipeline_Q1_2024.xlsx',
        size: 1567890,
        uploadedAt: '2024-01-09T13:20:00Z',
        uploadedBy: 'Sales Team',
        status: 'Complete',
        lastViewed: '2024-01-14T16:10:00Z',
        viewCount: 22
      },
      {
        id: 'f6-d3',
        name: 'Pricing_Strategy_2024.pdf',
        size: 987654,
        uploadedAt: '2024-01-08T15:30:00Z',
        uploadedBy: 'Head of Sales',
        status: 'Complete',
        lastViewed: '2024-01-13T12:45:00Z',
        viewCount: 14
      },
      {
        id: 'f6-d4',
        name: 'Customer_Success_Metrics.xlsx',
        size: 654321,
        uploadedAt: '2024-01-07T11:20:00Z',
        uploadedBy: 'Customer Success',
        status: 'Complete',
        lastViewed: '2024-01-12T14:30:00Z',
        viewCount: 11
      },
      {
        id: 'f6-d5',
        name: 'Partnership_Agreements.pdf',
        size: 1234567,
        uploadedAt: '2024-01-06T14:15:00Z',
        uploadedBy: 'Business Development',
        status: 'Complete',
        lastViewed: '2024-01-11T16:25:00Z',
        viewCount: 9
      },
      {
        id: 'f6-d6',
        name: 'Sales_Commission_Structure.pdf',
        size: 432109,
        uploadedAt: '2024-01-05T12:40:00Z',
        uploadedBy: 'Sales Director',
        status: 'Complete',
        lastViewed: '2024-01-10T13:15:00Z',
        viewCount: 7
      },
      {
        id: 'f6-d7',
        name: 'Market_Analysis_Report.pdf',
        size: 1876543,
        uploadedAt: '2024-01-04T16:55:00Z',
        uploadedBy: 'Marketing Team',
        status: 'Complete',
        lastViewed: '2024-01-09T15:35:00Z',
        viewCount: 13
      },
      {
        id: 'f6-d8',
        name: 'Customer_Testimonials.pdf',
        size: 765432,
        uploadedAt: '2024-01-03T14:20:00Z',
        uploadedBy: 'Marketing Team',
        status: 'Complete',
        lastViewed: '2024-01-08T11:50:00Z',
        viewCount: 16
      },
      {
        id: 'f6-d9',
        name: 'Competitor_Analysis.pdf',
        size: 1098765,
        uploadedAt: '2024-01-02T11:15:00Z',
        uploadedBy: 'Strategy Team',
        status: 'Complete',
        lastViewed: '2024-01-07T14:25:00Z',
        viewCount: 10
      },
      {
        id: 'f6-d10',
        name: 'Revenue_Recognition_Policy.pdf',
        size: 543210,
        uploadedAt: '2024-01-01T13:30:00Z',
        uploadedBy: 'Finance Team',
        status: 'Complete',
        lastViewed: '2024-01-06T16:40:00Z',
        viewCount: 8
      },
      {
        id: 'f6-d11',
        name: 'Customer_Churn_Analysis.xlsx',
        size: 876543,
        uploadedAt: '2023-12-30T15:45:00Z',
        uploadedBy: 'Customer Success',
        status: 'Complete',
        lastViewed: '2024-01-05T12:20:00Z',
        viewCount: 12
      },
      {
        id: 'f6-d12',
        name: 'Enterprise_Customer_Contracts.pdf',
        size: 2109876,
        uploadedAt: '2023-12-29T10:30:00Z',
        uploadedBy: 'Sales Director',
        status: 'Complete',
        lastViewed: '2024-01-04T15:10:00Z',
        viewCount: 15
      },
      {
        id: 'f6-d13',
        name: 'Sales_Forecasting_Model.xlsx',
        size: 1345678,
        uploadedAt: '2023-12-28T12:45:00Z',
        uploadedBy: 'Sales Operations',
        status: 'Needs Review',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f6-d14',
        name: 'Channel_Partner_Agreements.pdf',
        size: 654987,
        uploadedAt: '2023-12-27T14:20:00Z',
        uploadedBy: 'Business Development',
        status: 'Needs Review',
        lastViewed: null,
        viewCount: 0
      }
    ],
    '7': [
      {
        id: 'f7-d1',
        name: 'Product_Roadmap_2024.pdf',
        size: 1456789,
        uploadedAt: '2024-01-10T16:30:00Z',
        uploadedBy: 'Product Manager',
        status: 'Complete',
        lastViewed: '2024-01-15T15:10:00Z',
        viewCount: 25
      },
      {
        id: 'f7-d2',
        name: 'KPI_Dashboard_Metrics.xlsx',
        size: 987654,
        uploadedAt: '2024-01-08T14:15:00Z',
        uploadedBy: 'Analytics Team',
        status: 'Complete',
        lastViewed: '2024-01-14T13:45:00Z',
        viewCount: 19
      },
      {
        id: 'f7-d3',
        name: 'Pitch_Deck_Series_A.pptx',
        size: 5234567,
        uploadedAt: '2024-01-07T11:20:00Z',
        uploadedBy: 'CEO',
        status: 'Complete',
        lastViewed: '2024-01-13T16:25:00Z',
        viewCount: 32
      },
      {
        id: 'f7-d4',
        name: 'Strategic_Vision_Document.pdf',
        size: 2345678,
        uploadedAt: '2024-01-06T13:45:00Z',
        uploadedBy: 'Strategy Team',
        status: 'Complete',
        lastViewed: '2024-01-12T12:30:00Z',
        viewCount: 16
      },
      {
        id: 'f7-d5',
        name: 'Competitive_Positioning.pdf',
        size: 1234567,
        uploadedAt: '2024-01-05T15:30:00Z',
        uploadedBy: 'Product Marketing',
        status: 'Complete',
        lastViewed: '2024-01-11T14:15:00Z',
        viewCount: 14
      },
      {
        id: 'f7-d6',
        name: 'User_Research_Insights.pdf',
        size: 876543,
        uploadedAt: '2024-01-04T12:15:00Z',
        uploadedBy: 'UX Research',
        status: 'Complete',
        lastViewed: '2024-01-10T16:40:00Z',
        viewCount: 11
      },
      {
        id: 'f7-d7',
        name: 'Go_to_Market_Strategy.pdf',
        size: 1567890,
        uploadedAt: '2024-01-03T14:40:00Z',
        uploadedBy: 'Marketing Director',
        status: 'Complete',
        lastViewed: '2024-01-09T11:25:00Z',
        viewCount: 18
      },
      {
        id: 'f7-d8',
        name: 'Technology_Stack_Overview.pdf',
        size: 654321,
        uploadedAt: '2024-01-02T16:25:00Z',
        uploadedBy: 'CTO',
        status: 'Complete',
        lastViewed: '2024-01-08T13:50:00Z',
        viewCount: 9
      },
      {
        id: 'f7-d9',
        name: 'Product_Development_Timeline.xlsx',
        size: 432109,
        uploadedAt: '2024-01-01T11:40:00Z',
        uploadedBy: 'Product Manager',
        status: 'Complete',
        lastViewed: '2024-01-07T15:20:00Z',
        viewCount: 13
      }
    ],
    '8': [
      {
        id: 'f8-d1',
        name: 'GDPR_Compliance_Audit.pdf',
        size: 1876543,
        uploadedAt: '2024-01-09T15:30:00Z',
        uploadedBy: 'Compliance Officer',
        status: 'Complete',
        lastViewed: '2024-01-14T14:35:00Z',
        viewCount: 12
      },
      {
        id: 'f8-d2',
        name: 'SOC2_Type_II_Report.pdf',
        size: 2456789,
        uploadedAt: '2024-01-07T13:20:00Z',
        uploadedBy: 'Security Team',
        status: 'Complete',
        lastViewed: '2024-01-13T16:10:00Z',
        viewCount: 15
      },
      {
        id: 'f8-d3',
        name: 'Cyber_Insurance_Policy.pdf',
        size: 987654,
        uploadedAt: '2024-01-06T11:45:00Z',
        uploadedBy: 'Risk Manager',
        status: 'Complete',
        lastViewed: '2024-01-12T12:25:00Z',
        viewCount: 8
      },
      {
        id: 'f8-d4',
        name: 'Data_Breach_Response_Plan.pdf',
        size: 654321,
        uploadedAt: '2024-01-05T14:15:00Z',
        uploadedBy: 'Security Team',
        status: 'Complete',
        lastViewed: '2024-01-11T15:40:00Z',
        viewCount: 6
      },
      {
        id: 'f8-d5',
        name: 'Risk_Assessment_Matrix.xlsx',
        size: 432109,
        uploadedAt: '2024-01-04T16:40:00Z',
        uploadedBy: 'Risk Manager',
        status: 'Complete',
        lastViewed: '2024-01-10T13:20:00Z',
        viewCount: 9
      },
      {
        id: 'f8-d6',
        name: 'Vendor_Security_Assessments.pdf',
        size: 1234567,
        uploadedAt: '2024-01-03T12:55:00Z',
        uploadedBy: 'Procurement Team',
        status: 'Complete',
        lastViewed: '2024-01-09T14:35:00Z',
        viewCount: 7
      },
      {
        id: 'f8-d7',
        name: 'Business_Continuity_Plan.pdf',
        size: 876543,
        uploadedAt: '2024-01-02T15:20:00Z',
        uploadedBy: 'Operations Team',
        status: 'Complete',
        lastViewed: '2024-01-08T16:50:00Z',
        viewCount: 5
      },
      {
        id: 'f8-d8',
        name: 'Information_Security_Policies.pdf',
        size: 1567890,
        uploadedAt: '2024-01-01T13:15:00Z',
        uploadedBy: 'Security Team',
        status: 'Complete',
        lastViewed: '2024-01-07T11:30:00Z',
        viewCount: 11
      },
      {
        id: 'f8-d9',
        name: 'Regulatory_Compliance_Checklist.xlsx',
        size: 345678,
        uploadedAt: '2023-12-30T14:40:00Z',
        uploadedBy: 'Compliance Officer',
        status: 'Complete',
        lastViewed: '2024-01-06T15:15:00Z',
        viewCount: 10
      },
      {
        id: 'f8-d10',
        name: 'Directors_Officers_Insurance.pdf',
        size: 765432,
        uploadedAt: '2023-12-29T11:25:00Z',
        uploadedBy: 'Legal Team',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f8-d11',
        name: 'Privacy_Impact_Assessment.pdf',
        size: 543210,
        uploadedAt: '2023-12-28T16:50:00Z',
        uploadedBy: 'Privacy Officer',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f8-d12',
        name: 'Third_Party_Risk_Register.xlsx',
        size: 987654,
        uploadedAt: '2023-12-27T12:35:00Z',
        uploadedBy: 'Risk Manager',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      },
      {
        id: 'f8-d13',
        name: 'Incident_Response_Procedures.pdf',
        size: 654321,
        uploadedAt: '2023-12-26T15:10:00Z',
        uploadedBy: 'Security Team',
        status: 'Missing',
        lastViewed: null,
        viewCount: 0
      }
    ]
  }

  const users = [
    {
      id: '1',
      name: 'David Kim',
      email: 'david@startup.com',
      role: 'Founder & CEO',
      company: 'TechFlow Solutions',
      accessLevel: 'Full Access',
      canDownload: true,
      accessExpiry: null,
      lastActive: '2024-01-15T14:30:00Z',
      documentsViewed: 45,
      timeSpent: '3h 20m',
      userType: 'internal'
    },
    {
      id: '2',
      name: 'Sarah Chen',
      email: 'sarah@startup.com',
      role: 'Co-Founder & CTO',
      company: 'TechFlow Solutions',
      accessLevel: 'Full Access',
      canDownload: true,
      accessExpiry: null,
      lastActive: '2024-01-15T11:45:00Z',
      documentsViewed: 38,
      timeSpent: '2h 45m',
      userType: 'internal'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@startup.com',
      role: 'CFO',
      company: 'TechFlow Solutions',
      accessLevel: 'Full Access',
      canDownload: true,
      accessExpiry: null,
      lastActive: '2024-01-15T10:20:00Z',
      documentsViewed: 32,
      timeSpent: '2h 15m',
      userType: 'internal'
    },
    {
      id: '4',
      name: 'Jennifer Adams',
      email: 'jennifer@startup.com',
      role: 'Head of Finance',
      company: 'TechFlow Solutions',
      accessLevel: 'Limited Access',
      canDownload: true,
      accessExpiry: null,
      lastActive: '2024-01-14T16:30:00Z',
      documentsViewed: 22,
      timeSpent: '1h 30m',
      userType: 'internal',
      restrictedFolders: ['Technical Documentation']
    },
    {
      id: '5',
      name: 'Alex Martinez',
      email: 'alex@startup.com',
      role: 'VP of Operations',
      company: 'TechFlow Solutions',
      accessLevel: 'Limited Access',
      canDownload: true,
      accessExpiry: null,
      lastActive: '2024-01-14T12:45:00Z',
      documentsViewed: 18,
      timeSpent: '1h 15m',
      userType: 'internal',
      restrictedFolders: ['Legal Documents']
    },
    {
      id: '6',
      name: 'Amy Prawnson',
      email: 'amy@dueready.com',
      role: 'Senior Due Diligence Advisor',
      company: 'DueReady',
      accessLevel: 'Full Access',
      canDownload: true,
      accessExpiry: null,
      lastActive: '2024-01-15T09:15:00Z',
      documentsViewed: 35,
      timeSpent: '2h 30m',
      userType: 'external'
    },
    {
      id: '7',
      name: 'Emma Thompson',
      email: 'emma@dueready.com',
      role: 'Legal Compliance Specialist',
      company: 'DueReady',
      accessLevel: 'Legal Access',
      canDownload: true,
      accessExpiry: null,
      lastActive: '2024-01-14T14:20:00Z',
      documentsViewed: 28,
      timeSpent: '2h 10m',
      userType: 'external',
      restrictedFolders: ['Technical Documentation']
    },
    {
      id: '8',
      name: 'Robert Wilson',
      email: 'robert@dueready.com',
      role: 'Financial Analysis Expert',
      company: 'DueReady',
      accessLevel: 'Limited Access',
      canDownload: true,
      accessExpiry: null,
      lastActive: '2024-01-14T11:30:00Z',
      documentsViewed: 25,
      timeSpent: '1h 45m',
      userType: 'external',
      restrictedFolders: ['Technical Documentation']
    }
  ]

  const recentActivity = [
    {
      id: '1',
      user: 'Mike Johnson',
      action: 'Replied to comment on',
      document: 'Audited_Financial_Statements_2023.pdf',
      folder: 'Financial Documents',
      timestamp: '2024-01-15T11:20:00Z',
      duration: '25 min ago',
      type: 'comment',
      details: 'Verified Q4 adjustments with external auditor'
    },
    {
      id: '2',
      user: 'Sarah Chen',
      action: 'Commented on',
      document: 'Audited_Financial_Statements_2023.pdf',
      folder: 'Financial Documents',
      timestamp: '2024-01-15T09:45:00Z',
      duration: '2 hours ago',
      type: 'comment',
      details: 'Requested verification of Q4 adjustments'
    },
    {
      id: '3',
      user: 'Sarah Chen',
      action: 'Mentioned @david-kim in',
      document: 'Shareholder_Agreements.pdf',
      folder: 'Legal Documents',
      timestamp: '2024-01-14T16:15:00Z',
      duration: '22 hours ago',
      type: 'mention',
      details: 'Will prepare amended version with new provisions'
    },
    {
      id: '4',
      user: 'David Kim',
      action: 'Commented on',
      document: 'Shareholder_Agreements.pdf',
      folder: 'Legal Documents',
      timestamp: '2024-01-14T14:30:00Z',
      duration: '1 day ago',
      type: 'comment',
      details: 'Document needs Series A terms update'
    },
    {
      id: '5',
      user: 'Sarah Chen',
      action: 'Flagged missing document',
      document: 'Customer_Contracts_Template.pdf',
      folder: 'Legal Documents',
      timestamp: '2024-01-12T10:20:00Z',
      duration: '3 days ago',
      type: 'flag',
      details: 'Marked as urgently needed for due diligence'
    },
    {
      id: '6',
      user: 'Jennifer Rodriguez',
      action: 'Downloaded',
      document: 'System_Architecture_Overview.pdf',
      folder: 'Technical Documentation',
      timestamp: '2024-01-15T13:45:00Z',
      duration: '1 hour ago',
      type: 'download'
    },
    {
      id: '7',
      user: 'Alex Martinez',
      action: 'Viewed',
      document: 'Security_Compliance_Report.pdf',
      folder: 'Technical Documentation',
      timestamp: '2024-01-15T12:30:00Z',
      duration: '2 hours ago',
      type: 'view'
    },
    {
      id: '8',
      user: 'Mike Johnson',
      action: 'Uploaded',
      document: 'Tax_Returns_2023.pdf',
      folder: 'Financial Documents',
      timestamp: '2024-01-14T09:15:00Z',
      duration: '2 days ago',
      type: 'upload'
    }
  ]

  // Download audit log
  const downloadLogs = [
    {
      id: 'dl1',
      user: 'Sarah Chen',
      userEmail: 'sarah@startup.com',
      document: 'Audited_Financial_Statements_2023.pdf',
      folder: 'Financial Documents',
      version: 'v2.1',
      downloadedAt: '2024-01-14T15:30:00Z',
      fileSize: '3.4 MB',
      ipAddress: '192.168.1.45',
      userAgent: 'Chrome/120.0',
      downloadMethod: 'direct',
      isLatestVersion: true
    },
    {
      id: 'dl2',
      user: 'Emma Thompson',
      userEmail: 'emma@dueready.com',
      document: 'Shareholder_Agreements.pdf',
      folder: 'Legal Documents',
      version: 'v1.3',
      downloadedAt: '2024-01-14T11:20:00Z',
      fileSize: '1.2 MB',
      ipAddress: '10.0.0.23',
      userAgent: 'Safari/17.0',
      downloadMethod: 'direct',
      isLatestVersion: true
    },
    {
      id: 'dl3',
      user: 'Jennifer Adams',
      userEmail: 'jennifer@startup.com',
      document: 'Financial_Projections_5Year.xlsx',
      folder: 'Financial Documents',
      version: 'v3.0',
      downloadedAt: '2024-01-13T16:45:00Z',
      fileSize: '1.5 MB',
      ipAddress: '192.168.1.32',
      userAgent: 'Edge/120.0',
      downloadMethod: 'direct',
      isLatestVersion: true
    },
    {
      id: 'dl4',
      user: 'Alex Martinez',
      userEmail: 'alex@startup.com',
      document: 'System_Architecture_Overview.pdf',
      folder: 'Technical Documentation',
      version: 'v2.0',
      downloadedAt: '2024-01-13T10:15:00Z',
      fileSize: '2.1 MB',
      ipAddress: '192.168.1.28',
      userAgent: 'Chrome/120.0',
      downloadMethod: 'direct',
      isLatestVersion: true
    },
    {
      id: 'dl5',
      user: 'Mike Johnson',
      userEmail: 'mike@startup.com',
      document: 'Tax_Returns_2023.pdf',
      folder: 'Financial Documents',
      version: 'v1.0',
      downloadedAt: '2024-01-12T14:20:00Z',
      fileSize: '1.8 MB',
      ipAddress: '192.168.1.15',
      userAgent: 'Firefox/121.0',
      downloadMethod: 'direct',
      isLatestVersion: true
    }
  ]

  // Helper functions for access control
  const canUserDownload = (user: any, folder: any = null) => {
    if (user.userType === 'internal') return true
    if (!user.canDownload) return false
    if (user.accessExpiry && new Date(user.accessExpiry) < new Date()) return false
    if (folder && user.restrictedFolders?.includes(folder)) return false
    return true
  }

  const isAccessExpired = (user) => {
    if (!user.accessExpiry) return false
    return new Date(user.accessExpiry) < new Date()
  }

  const getDaysUntilExpiry = (expiryDate) => {
    if (!expiryDate) return null
    const days = Math.ceil((new Date(expiryDate) - new Date()) / (1000 * 60 * 60 * 24))
    return days > 0 ? days : 0
  }

  const getExpiringLinksCount = (user) => {
    return user.expiringLinks?.filter(link => 
      new Date(link.expiresAt) > new Date() && link.status === 'active'
    ).length || 0
  }

  // Calculate document-focused analytics
  const calculateDocumentAnalytics = () => {
    let totalDocs = 0
    let completedDocs = 0
    let missingDocs = 0
    let needsReviewDocs = 0
    let uploadedThisWeek = 0
    
    folders.forEach(folder => {
      totalDocs += folder.documentCount
      completedDocs += folder.completedDocs
      missingDocs += (folder.totalDocs - folder.completedDocs)
      
      // Count documents by status from folderDocuments
      if (folderDocuments[folder.id]) {
        folderDocuments[folder.id].forEach(doc => {
          if (doc.status === 'Needs Review') needsReviewDocs++
          
          // Count uploads from this week (mock calculation)
          const uploadDate = new Date(doc.uploadedAt)
          const oneWeekAgo = new Date()
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
          if (uploadDate > oneWeekAgo) uploadedThisWeek++
        })
      }
    })
    
    const completionRate = Math.round((completedDocs / totalDocs) * 100)
    const uploadProgress = Math.round(((totalDocs - missingDocs) / totalDocs) * 100)
    
    return {
      totalDocuments: totalDocs,
      completedDocuments: completedDocs,
      missingDocuments: missingDocs,
      needsReviewDocuments: needsReviewDocs,
      uploadedDocuments: totalDocs - missingDocs,
      completionRate,
      uploadProgress,
      uploadedThisWeek,
      criticalMissing: missingDocs // Could be filtered for critical documents
    }
  }

  const analytics = calculateDocumentAnalytics()

  const session = {
    user: {
      name: "David Kim",
      email: "david@techflow.com", 
      role: "Founder & CEO",
      initials: "DK"
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getAccessLevelColor = (level) => {
    const colors = {
      'Full Access': 'bg-green-100 text-green-800',
      'Limited Access': 'bg-yellow-100 text-yellow-800',
      'Legal Access': 'bg-blue-100 text-blue-800',
      'View Only': 'bg-gray-100 text-gray-800'
    }
    return colors[level] || 'bg-gray-100 text-gray-800'
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Financial': {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'bg-green-100',
        iconColor: 'text-green-600',
        accent: 'text-green-700'
      },
      'Legal': {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'bg-purple-100',
        iconColor: 'text-purple-600',
        accent: 'text-purple-700'
      },
      'Technical': {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-100',
        iconColor: 'text-blue-600',
        accent: 'text-blue-700'
      },
      'Corporate': {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        icon: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
        accent: 'text-indigo-700'
      },
      'HR': {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'bg-orange-100',
        iconColor: 'text-orange-600',
        accent: 'text-orange-700'
      },
      'Commercial': {
        bg: 'bg-pink-50',
        border: 'border-pink-200',
        icon: 'bg-pink-100',
        iconColor: 'text-pink-600',
        accent: 'text-pink-700'
      },
      'Product': {
        bg: 'bg-cyan-50',
        border: 'border-cyan-200',
        icon: 'bg-cyan-100',
        iconColor: 'text-cyan-600',
        accent: 'text-cyan-700'
      },
      'Compliance': {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: 'bg-red-100',
        iconColor: 'text-red-600',
        accent: 'text-red-700'
      }
    }
    return colors[category] || {
      bg: 'bg-gray-50',
      border: 'border-gray-200',
      icon: 'bg-gray-100',
      iconColor: 'text-gray-600',
      accent: 'text-gray-700'
    }
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'Financial': BarChart3,
      'Legal': Scale,
      'Technical': Database,
      'Corporate': Building,
      'HR': Users,
      'Commercial': TrendingUp,
      'Product': Target,
      'Compliance': Shield
    }
    return icons[category] || Folder
  }

  const getDocumentStatusBadge = (status) => {
    const badges = {
      'Complete': 'bg-green-100 text-green-800',
      'Missing': 'bg-red-100 text-red-800',
      'Needs Review': 'bg-yellow-100 text-yellow-800'
    }
    return <Badge className={badges[status] || 'bg-gray-100 text-gray-800'} variant="secondary">{status}</Badge>
  }

  const getSortedAndFilteredDocuments = (folderId) => {
    if (!folderDocuments[folderId]) return []
    
    let docs = [...folderDocuments[folderId]]
    
    // Filter by status
    if (documentFilters.status !== 'All') {
      docs = docs.filter(doc => doc.status === documentFilters.status)
    }
    
    // Filter by search
    if (documentFilters.search) {
      docs = docs.filter(doc => 
        doc.name.toLowerCase().includes(documentFilters.search.toLowerCase()) ||
        doc.uploadedBy.toLowerCase().includes(documentFilters.search.toLowerCase())
      )
    }
    
    // Sort by status priority (Missing/Needs Review first, then Complete)
    docs.sort((a, b) => {
      const statusOrder = { 'Missing': 0, 'Needs Review': 1, 'Complete': 2 }
      return statusOrder[a.status] - statusOrder[b.status]
    })
    
    return docs
  }

  const handleDocumentFilterChange = (filterType, value) => {
    setDocumentFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder)
    setSelectedSubfolder(null)
  }

  const handleSubfolderClick = (subfolder) => {
    setSelectedSubfolder(subfolder)
  }

  const handleBackToFolders = () => {
    setSelectedFolder(null)
    setSelectedSubfolder(null)
  }

  const handleBackToSubfolders = () => {
    setSelectedSubfolder(null)
  }

  // Sample comments data
  const sampleComments = {
    'f1-d1': [
      {
        id: 'c1',
        author: 'Sarah Chen',
        role: 'Legal Counsel',
        avatar: 'SC',
        message: 'Revenue recognition looks correct, but please verify the Q4 adjustments on page 23.',
        timestamp: '2024-01-15T09:45:00Z',
        mentions: [],
        permissions: ['founder', 'legal', 'finance']
      },
      {
        id: 'c2',
        author: 'Mike Johnson',
        role: 'CFO',
        avatar: 'MJ',
        message: '@sarah-chen The Q4 adjustments have been verified by our external auditor. All entries are properly documented.',
        timestamp: '2024-01-15T11:20:00Z',
        mentions: ['sarah-chen'],
        permissions: ['founder', 'legal', 'finance']
      }
    ],
    'f2-d2': [
      {
        id: 'c3',
        author: 'David Kim',
        role: 'Founder',
        avatar: 'DK',
        message: 'This shareholder agreement needs to be updated to reflect the new Series A terms.',
        timestamp: '2024-01-14T14:30:00Z',
        mentions: [],
        permissions: ['founder', 'legal']
      },
      {
        id: 'c4',
        author: 'Sarah Chen',
        role: 'Legal Counsel',
        avatar: 'SC',
        message: '@david-kim I\'ll prepare the amended version with the new provisions by Friday.',
        timestamp: '2024-01-14T16:15:00Z',
        mentions: ['david-kim'],
        permissions: ['founder', 'legal']
      }
    ],
    'f2-d19': [
      {
        id: 'c5',
        author: 'Sarah Chen',
        role: 'Legal Counsel',
        avatar: 'SC',
        message: 'This document is missing and needs to be uploaded urgently for the due diligence review.',
        timestamp: '2024-01-12T10:20:00Z',
        mentions: [],
        permissions: ['founder', 'legal']
      }
    ]
  }

  // Team members for @mention functionality
  const teamMembers = [
    { id: 'david-kim', name: 'David Kim', role: 'Founder', avatar: 'DK' },
    { id: 'sarah-chen', name: 'Sarah Chen', role: 'Legal Counsel', avatar: 'SC' },
    { id: 'mike-johnson', name: 'Mike Johnson', role: 'CFO', avatar: 'MJ' },
    { id: 'jane-smith', name: 'Jane Smith', role: 'Head of Finance', avatar: 'JS' },
    { id: 'alex-martinez', name: 'Alex Martinez', role: 'CTO', avatar: 'AM' }
  ]

  // Current user role for permissions
  const currentUserRole = 'founder' // In real app, this would come from auth

  // Get comments for a document
  const getDocumentComments = (documentId) => {
    return sampleComments[documentId] || []
  }

  // Get comment count for a document
  const getCommentCount = (documentId) => {
    return getDocumentComments(documentId).length
  }

  // Handle opening comments modal
  const handleOpenComments = (document) => {
    setSelectedDocument(document)
    setShowComments(true)
  }

  // Handle closing comments modal
  const handleCloseComments = () => {
    setShowComments(false)
    setSelectedDocument(null)
    setNewComment('')
  }

  // Handle adding new comment
  const handleAddComment = () => {
    if (!newComment.trim() || !selectedDocument) return

    // Extract mentions from comment
    const mentionRegex = /@([a-zA-Z-]+)/g
    const mentions = [...newComment.matchAll(mentionRegex)].map(match => match[1])

    const newCommentObj = {
      id: 'c' + Date.now(),
      author: 'David Kim', // Current user
      role: 'Founder',
      avatar: 'DK',
      message: newComment,
      timestamp: new Date().toISOString(),
      mentions: mentions,
      permissions: ['founder', 'legal', 'finance']
    }

    // In real app, this would be an API call
    if (!sampleComments[selectedDocument.id]) {
      sampleComments[selectedDocument.id] = []
    }
    sampleComments[selectedDocument.id].push(newCommentObj)
    
    setNewComment('')
  }

  // Handle @mention in textarea
  const handleMentionSelect = (member) => {
    const textarea = document.querySelector('.comment-textarea')
    const cursorPos = textarea.selectionStart
    const textBefore = newComment.substring(0, cursorPos)
    const textAfter = newComment.substring(cursorPos)
    
    // Find the @ symbol position
    const atIndex = textBefore.lastIndexOf('@')
    if (atIndex !== -1) {
      const newText = textBefore.substring(0, atIndex) + `@${member.id}` + textAfter
      setNewComment(newText)
    }
  }

  // Get documents for current subfolder or folder
  const getCurrentDocuments = () => {
    if (selectedSubfolder && selectedFolder) {
      // Return documents for the selected subfolder
      return selectedSubfolder.documents.map(docId => 
        folderDocuments[selectedFolder.id]?.find(doc => doc.id === docId)
      ).filter(Boolean)
    } else if (selectedFolder) {
      // Return all documents for the folder if no subfolder selected
      return folderDocuments[selectedFolder.id] || []
    }
    return []
  }

  // Search and Filter Functions
  const getFilteredFolders = () => {
    let filtered = [...folders]
    
    // Apply search filter
    if (folderSearch) {
      filtered = filtered.filter(folder => 
        folder.name.toLowerCase().includes(folderSearch.toLowerCase()) ||
        folder.description.toLowerCase().includes(folderSearch.toLowerCase()) ||
        folder.category.toLowerCase().includes(folderSearch.toLowerCase())
      )
    }
    
    // Apply category filter
    if (folderFilters.category !== 'All') {
      filtered = filtered.filter(folder => folder.category === folderFilters.category)
    }
    
    // Apply status filter
    if (folderFilters.status !== 'All') {
      filtered = filtered.filter(folder => folder.status === folderFilters.status)
    }
    
    // Apply completion filter
    if (folderFilters.completion !== 'All') {
      filtered = filtered.filter(folder => {
        const completionRate = (folder.completedDocs / folder.totalDocs) * 100
        if (folderFilters.completion === 'Complete') return completionRate === 100
        if (folderFilters.completion === 'High') return completionRate >= 80 && completionRate < 100
        if (folderFilters.completion === 'Medium') return completionRate >= 50 && completionRate < 80
        if (folderFilters.completion === 'Low') return completionRate < 50
        return true
      })
    }
    
    return filtered
  }

  const getFilteredUsers = () => {
    let filtered = [...users]
    
    // Apply search filter
    if (userSearch) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
        user.email.toLowerCase().includes(userSearch.toLowerCase()) ||
        user.role.toLowerCase().includes(userSearch.toLowerCase()) ||
        user.company.toLowerCase().includes(userSearch.toLowerCase())
      )
    }
    
    // Apply user type filter
    if (userFilters.userType !== 'All') {
      filtered = filtered.filter(user => user.userType === userFilters.userType)
    }
    
    // Apply access level filter
    if (userFilters.accessLevel !== 'All') {
      filtered = filtered.filter(user => user.accessLevel === userFilters.accessLevel)
    }
    
    // Apply status filter
    if (userFilters.status !== 'All') {
      if (userFilters.status === 'active') {
        filtered = filtered.filter(user => !isAccessExpired(user))
      } else if (userFilters.status === 'expired') {
        filtered = filtered.filter(user => isAccessExpired(user))
      }
    }
    
    return filtered
  }

  const clearFilters = () => {
    setFolderSearch('')
    setFolderFilters({
      category: 'All',
      status: 'All',
      completion: 'All'
    })
    setUserSearch('')
    setUserFilters({
      userType: 'All',
      accessLevel: 'All',
      status: 'All'
    })
  }

  // Q&A Data
  const qnaData = [
    {
      id: 'qa-1',
      question: 'What is your current monthly recurring revenue (MRR) and growth rate?',
      answer: 'Our current MRR is $2.1M with a 18% month-over-month growth rate. This represents a 220% year-over-year increase from $650K MRR in January 2023.',
      category: 'Financial',
      status: 'Answered',
      priority: 'High',
      askedBy: 'Jennifer Walsh',
      askedByCompany: 'Sequoia Capital',
      askedAt: '2024-01-15T14:30:00Z',
      answeredBy: 'David Kim',
      answeredAt: '2024-01-15T16:45:00Z',
      isPublic: true,
      relatedDocuments: ['f1-d1', 'f1-d6']
    },
    {
      id: 'qa-2',
      question: 'Can you provide details on your customer acquisition cost (CAC) and lifetime value (LTV) metrics?',
      answer: 'Our blended CAC is $180 with an average LTV of $2,400, giving us a healthy LTV:CAC ratio of 13.3:1. Enterprise customers have a higher LTV of $8,500 with a CAC of $850.',
      category: 'Financial',
      status: 'Answered',
      priority: 'High',
      askedBy: 'Marcus Chen',
      askedByCompany: 'Andreessen Horowitz',
      askedAt: '2024-01-14T11:20:00Z',
      answeredBy: 'Mike Johnson',
      answeredAt: '2024-01-14T15:30:00Z',
      isPublic: true,
      relatedDocuments: ['f6-d2', 'f6-d13']
    },
    {
      id: 'qa-3',
      question: 'What are your plans for international expansion and regulatory compliance?',
      answer: '',
      category: 'Strategy',
      status: 'Pending',
      priority: 'Medium',
      askedBy: 'Sarah Martinez',
      askedByCompany: 'Index Ventures',
      askedAt: '2024-01-15T09:15:00Z',
      answeredBy: null,
      answeredAt: null,
      isPublic: true,
      relatedDocuments: []
    },
    {
      id: 'qa-4',
      question: 'How do you handle data security and what certifications do you have?',
      answer: 'We are SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit using AES-256 encryption. We conduct quarterly security audits and have a dedicated security team.',
      category: 'Technical',
      status: 'Answered',
      priority: 'Critical',
      askedBy: 'Robert Kim',
      askedByCompany: 'Kleiner Perkins',
      askedAt: '2024-01-13T16:45:00Z',
      answeredBy: 'Sarah Chen',
      answeredAt: '2024-01-14T10:20:00Z',
      isPublic: true,
      relatedDocuments: ['f8-d2', 'f8-d4', 'f8-d8']
    }
  ]

  // Tasks Data
  const tasksData = [
    {
      id: 'task-1',
      title: 'Upload updated cap table with Series A details',
      description: 'Need the latest cap table reflecting the Series A round completion and new investor ownership percentages',
      status: 'In Progress',
      priority: 'Critical',
      assignee: 'Mike Johnson',
      assigneeRole: 'CFO',
      assignedBy: 'David Kim',
      createdAt: '2024-01-15T09:00:00Z',
      dueDate: '2024-01-17T17:00:00Z',
      completedAt: null,
      category: 'Legal',
      relatedFolder: 'Legal Documents',
      relatedDocuments: ['f2-d2'],
      comments: [
        {
          id: 'tc1',
          author: 'Mike Johnson',
          message: 'Working with our legal team to get the final version. Should have this by tomorrow.',
          timestamp: '2024-01-15T14:20:00Z'
        }
      ]
    },
    {
      id: 'task-2',
      title: 'Provide Q4 management accounts and variance analysis',
      description: 'Upload Q4 2023 management accounts with detailed variance analysis comparing actuals vs budget',
      status: 'Pending',
      priority: 'High',
      assignee: 'Jennifer Adams',
      assigneeRole: 'Head of Finance',
      assignedBy: 'Mike Johnson',
      createdAt: '2024-01-14T16:30:00Z',
      dueDate: '2024-01-18T12:00:00Z',
      completedAt: null,
      category: 'Financial',
      relatedFolder: 'Financial Documents',
      relatedDocuments: [],
      comments: []
    },
    {
      id: 'task-3',
      title: 'Update technical architecture diagram',
      description: 'Create updated system architecture diagram showing recent microservices migration and new security implementations',
      status: 'Complete',
      priority: 'Medium',
      assignee: 'Alex Martinez',
      assigneeRole: 'VP of Operations',
      assignedBy: 'Sarah Chen',
      createdAt: '2024-01-10T11:15:00Z',
      dueDate: '2024-01-15T17:00:00Z',
      completedAt: '2024-01-14T15:45:00Z',
      category: 'Technical',
      relatedFolder: 'Technical Documentation',
      relatedDocuments: ['f3-d1', 'f3-d4'],
      comments: [
        {
          id: 'tc2',
          author: 'Sarah Chen',
          message: 'Great work on the updated diagram. The security layer documentation is very comprehensive.',
          timestamp: '2024-01-14T16:30:00Z'
        }
      ]
    },
    {
      id: 'task-4',
      title: 'Prepare customer reference letters',
      description: 'Collect reference letters from 3-5 key enterprise customers highlighting product value and satisfaction',
      status: 'In Progress',
      priority: 'High',
      assignee: 'David Kim',
      assigneeRole: 'Founder & CEO',
      assignedBy: 'David Kim',
      createdAt: '2024-01-13T14:00:00Z',
      dueDate: '2024-01-20T17:00:00Z',
      completedAt: null,
      category: 'Commercial',
      relatedFolder: 'Commercial & Sales',
      relatedDocuments: ['f6-d8', 'f6-d11'],
      comments: [
        {
          id: 'tc3',
          author: 'David Kim',
          message: 'Have confirmed participation from TechCorp and DataFlow. Working on 2 more.',
          timestamp: '2024-01-15T10:30:00Z'
        }
      ]
    },
    {
      id: 'task-5',
      title: 'Upload employee handbook and policies',
      description: 'Provide complete employee handbook including remote work policy, code of conduct, and performance review process',
      status: 'Overdue',
      priority: 'Medium',
      assignee: 'Jennifer Adams',
      assigneeRole: 'Head of Finance',
      assignedBy: 'David Kim',
      createdAt: '2024-01-08T10:00:00Z',
      dueDate: '2024-01-14T17:00:00Z',
      completedAt: null,
      category: 'HR',
      relatedFolder: 'HR & People',
      relatedDocuments: ['f5-d4', 'f5-d7'],
      comments: [
        {
          id: 'tc4',
          author: 'Jennifer Adams',
          message: 'Apologies for the delay. Finalizing the remote work policy updates. Will have this completed by end of week.',
          timestamp: '2024-01-15T09:45:00Z'
        }
      ]
    },
    {
      id: 'task-6',
      title: 'Document IP portfolio and patent status',
      description: 'Compile comprehensive documentation of all intellectual property including patents, trademarks, and licensing agreements',
      status: 'Pending',
      priority: 'High',
      assignee: 'Sarah Chen',
      assigneeRole: 'Co-Founder & CTO',
      assignedBy: 'David Kim',
      createdAt: '2024-01-15T11:30:00Z',
      dueDate: '2024-01-22T17:00:00Z',
      completedAt: null,
      category: 'Legal',
      relatedFolder: 'Legal Documents',
      relatedDocuments: ['f2-d6', 'f2-d17'],
      comments: []
    }
  ]

  // Helper functions for task management
  const getTaskStatusColor = (status) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Overdue':
        return 'bg-red-100 text-red-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-100 text-red-800'
      case 'High':
        return 'bg-orange-100 text-orange-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getDaysUntilDue = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const isTaskOverdue = (task) => {
    if (task.status === 'Complete' || task.status === 'Overdue') return false
    return getDaysUntilDue(task.dueDate) < 0
  }

  const getTasksByStatus = (status) => {
    return tasksData.filter(task => task.status === status)
  }

  const getOverdueTasks = () => {
    return tasksData.filter(task => isTaskOverdue(task) || task.status === 'Overdue')
  }

  // 🔗 SMART INTEGRATION SYSTEM - Links Tasks, Due Diligence & Folders
  const getDueDiligenceItemById = (itemId) => {
    const dueDiligenceItems = [
      { id: 'dd-cap-table', title: 'Cap Table Documentation', category: 'Legal', folderId: 'f2', status: 'Missing', assignedTo: 'Mike Johnson' },
      { id: 'dd-financials', title: 'Q4 Management Accounts', category: 'Financial', folderId: 'f1', status: 'Missing', assignedTo: 'Jennifer Adams' },
      { id: 'dd-architecture', title: 'Technical Architecture Diagram', category: 'Technical', folderId: 'f3', status: 'Complete', assignedTo: 'Alex Martinez' },
      { id: 'dd-references', title: 'Customer Reference Letters', category: 'Commercial', folderId: 'f6', status: 'In Progress', assignedTo: 'David Kim' },
      { id: 'dd-handbook', title: 'Employee Handbook', category: 'HR', folderId: 'f5', status: 'Overdue', assignedTo: 'Jennifer Adams' },
      { id: 'dd-ip-docs', title: 'IP Portfolio Documentation', category: 'Legal', folderId: 'f2', status: 'Pending', assignedTo: 'Sarah Chen' }
    ]
    return dueDiligenceItems.find(item => item.id === itemId)
  }

  const getTasksForFolder = (folderId) => {
    return allTasks.filter(task => {
      if (task.relatedFolder && folders.find(f => f.name === task.relatedFolder)?.id === folderId) {
        return true
      }
      const ddItem = getDueDiligenceItemById(task.dueDiligenceId)
      return ddItem?.folderId === folderId
    })
  }

  const getAutoGeneratedTasks = () => {
    const existingTaskDDIds = tasksData.map(t => t.dueDiligenceId).filter(Boolean)
    const autoTasks = []
    
    const missingItems = [
      { id: 'dd-cap-table', status: 'Missing' },
      { id: 'dd-financials', status: 'Missing' },
      { id: 'dd-handbook', status: 'Overdue' },
      { id: 'dd-ip-docs', status: 'Pending' }
    ]

    missingItems.forEach(item => {
      if (!existingTaskDDIds.includes(item.id)) {
        const ddItem = getDueDiligenceItemById(item.id)
        if (ddItem && ddItem.status !== 'Complete') {
          autoTasks.push({
            id: `auto-${item.id}`,
            title: `📋 ${ddItem.title}`,
            description: `Due diligence requirement: ${ddItem.title}`,
            status: item.status === 'Overdue' ? 'Overdue' : 'Pending',
            priority: item.status === 'Overdue' ? 'Critical' : 'High',
            assignee: ddItem.assignedTo,
            assigneeRole: teamMembers.find(m => m.name === ddItem.assignedTo)?.role || 'Team Member',
            assignedBy: 'DueReady System',
            category: ddItem.category,
            dueDiligenceId: item.id,
            relatedFolder: folders.find(f => f.id === ddItem.folderId)?.name,
            relatedDocuments: [],
            isAutoGenerated: true,
            createdAt: new Date().toISOString(),
            dueDate: item.status === 'Overdue' ? new Date(Date.now() - 86400000).toISOString() : new Date(Date.now() + 3 * 86400000).toISOString(),
            completedAt: null,
            comments: []
          })
        }
      }
    })

    return autoTasks
  }

  const allTasks = [...tasksData, ...getAutoGeneratedTasks()]

  const getIntegratedTaskStatus = (task) => {
    if (task.dueDiligenceId) {
      const ddItem = getDueDiligenceItemById(task.dueDiligenceId)
      if (ddItem?.status === 'Complete') return 'Complete'
    }
    return task.status
  }

  const getFolderTasksSummary = (folder) => {
    const folderTasks = getTasksForFolder(folder.id)
    const pendingTasks = folderTasks.filter(task => ['Pending', 'In Progress'].includes(getIntegratedTaskStatus(task)))
    const overdueTasks = folderTasks.filter(task => getIntegratedTaskStatus(task) === 'Overdue')
    
    return {
      total: folderTasks.length,
      pending: pendingTasks.length,
      overdue: overdueTasks.length,
      hasCriticalTasks: folderTasks.some(task => task.priority === 'Critical'),
      hasAutoTasks: folderTasks.some(task => task.isAutoGenerated)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">DR</span>
            </div>
            <span className="font-semibold text-gray-900">DueReady</span>
          </div>
          
          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="/due-diligence" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <CheckCircle className="w-5 h-5" />
              <span>Due Diligence</span>
            </Link>
            <div className="flex items-center gap-3 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">
              <Database className="w-5 h-5" />
              <span>Data Room</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Users className="w-5 h-5" />
              <span>Team</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </div>
          </nav>
        </div>
        
        {/* User Profile - Bottom of Sidebar */}
        <div className="mt-auto p-6 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">{session.user.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{session.user.name}</div>
              <div className="text-xs text-gray-500 truncate">{session.user.email}</div>
              <div className="text-xs text-purple-600">{session.user.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {selectedFolder && (
                <Button variant="ghost" size="sm" onClick={handleBackToFolders}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Folders
                </Button>
              )}
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {selectedFolder ? selectedFolder.name : 'Data Room'}
                </h1>
                <p className="text-sm text-gray-500">
                  {selectedFolder 
                    ? selectedFolder.description 
                    : 'Secure document sharing and investor access'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <UserPlus className="w-4 h-4 mr-2" />
                Invite User
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Share2 className="w-4 h-4 mr-2" />
                Share Data Room
              </Button>
            </div>
          </div>
        </header>

        {/* Data Room Content */}
        <main className="p-8">
          {/* Show folder details when a folder is selected */}
          {selectedFolder ? (
            <div>
              {/* Breadcrumb Navigation */}
              <div className="mb-6">
                <nav className="flex items-center space-x-2 text-sm text-gray-500">
                  <button 
                    onClick={handleBackToFolders}
                    className="hover:text-purple-600 transition-colors"
                  >
                    Data Room
                  </button>
                  <ChevronRight className="w-4 h-4" />
                  <button 
                    onClick={selectedSubfolder ? handleBackToSubfolders : undefined}
                    className={`${selectedSubfolder ? 'hover:text-purple-600 transition-colors' : 'text-gray-900 font-medium'}`}
                  >
                    {selectedFolder.name}
                  </button>
                  {selectedSubfolder && (
                    <>
                      <ChevronRight className="w-4 h-4" />
                      <span className="text-gray-900 font-medium">{selectedSubfolder.name}</span>
                    </>
                  )}
                </nav>
              </div>

              {/* Show subfolders when folder selected but no subfolder */}
              {!selectedSubfolder ? (
                <div>
                  {/* Folder Statistics */}
                  <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <Card className="bg-white border border-gray-100">
                        <CardContent className="p-4">
                          <div className="text-center space-y-1">
                            <div className="text-2xl font-light text-gray-900">{selectedFolder.documentCount}</div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Documents</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border border-gray-100">
                        <CardContent className="p-4">
                          <div className="text-center space-y-1">
                            <div className="text-2xl font-light text-blue-600">{selectedFolder.subfolders?.length || 0}</div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Categories</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border border-gray-100">
                        <CardContent className="p-4">
                          <div className="text-center space-y-1">
                            <div className="text-2xl font-light text-green-600">{selectedFolder.userCount}</div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Users</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border border-gray-100">
                        <CardContent className="p-4">
                          <div className="text-center space-y-1">
                            <div className="text-xl font-light text-gray-900">{formatDate(selectedFolder.lastAccessed)}</div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Last Accessed</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Subfolders Grid */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">Document Categories</h2>
                        <p className="text-sm text-gray-500">Organized by document type for easier navigation</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-green-100 text-green-800" variant="secondary">
                          {selectedFolder.completedDocs} Complete
                        </Badge>
                        <Badge className="bg-red-100 text-red-800" variant="secondary">
                          {selectedFolder.totalDocs - selectedFolder.completedDocs} Missing
                        </Badge>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Documents
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedFolder.subfolders?.map((subfolder) => {
                        const categoryColors = getCategoryColor(selectedFolder.category)
                        const CategoryIcon = getCategoryIcon(selectedFolder.category)
                        const subfolderDocs = getCurrentDocuments()
                        const completedCount = subfolder.documents.map(docId => 
                          folderDocuments[selectedFolder.id]?.find(doc => doc.id === docId)
                        ).filter(doc => doc && doc.status === 'Complete').length
                        const needsReviewCount = subfolder.documents.map(docId => 
                          folderDocuments[selectedFolder.id]?.find(doc => doc.id === docId)
                        ).filter(doc => doc && doc.status === 'Needs Review').length
                        const missingCount = subfolder.documents.map(docId => 
                          folderDocuments[selectedFolder.id]?.find(doc => doc.id === docId)
                        ).filter(doc => doc && doc.status === 'Missing').length
                        const completionPercentage = ((completedCount / subfolder.documentCount) * 100).toFixed(0)
                        
                        return (
                          <Card 
                            key={subfolder.id} 
                            className="bg-white border border-gray-200 hover:border-gray-300 transition-all cursor-pointer hover:shadow-md"
                            onClick={() => handleSubfolderClick(subfolder)}
                          >
                            <CardContent className="p-5">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 ${categoryColors.icon} rounded-lg flex items-center justify-center`}>
                                    <CategoryIcon className={`w-5 h-5 ${categoryColors.iconColor}`} />
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-gray-900 text-sm">{subfolder.name}</h3>
                                    <p className="text-xs text-gray-600">{subfolder.description}</p>
                                  </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                              </div>
                              
                              {/* Metrics Row */}
                              {(missingCount + needsReviewCount) > 0 ? (
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="text-center">
                                    <div className="text-lg font-light text-gray-900">{subfolder.documentCount}</div>
                                    <div className="text-xs text-gray-500">Total</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-lg font-light text-red-600">{missingCount + needsReviewCount}</div>
                                    <div className="text-xs text-gray-500">
                                      {missingCount > 0 && needsReviewCount > 0 ? 'Issues' :
                                       missingCount > 0 ? 'Missing' : 'Review'}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="text-center">
                                  <div className="text-lg font-light text-gray-900">{subfolder.documentCount}</div>
                                  <div className="text-xs text-gray-500">Total Documents</div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                /* Show documents when subfolder is selected */
                <div>
                  {/* Subfolder Header with Enhanced Metrics */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">{selectedSubfolder.name}</h2>
                        <p className="text-sm text-gray-600">{selectedSubfolder.description}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview All
                        </Button>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload to {selectedSubfolder.name}
                        </Button>
                      </div>
                    </div>

                    {/* Subfolder Analytics */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                      <Card className="bg-white border border-gray-100">
                        <CardContent className="p-4">
                          <div className="text-center space-y-1">
                            <div className="text-2xl font-light text-gray-900">{getCurrentDocuments().length}</div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Documents</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border border-gray-100">
                        <CardContent className="p-4">
                          <div className="text-center space-y-1">
                            <div className="text-2xl font-light text-green-600">
                              {getCurrentDocuments().filter(doc => doc.status === 'Complete').length}
                            </div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Complete</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border border-gray-100">
                        <CardContent className="p-4">
                          <div className="text-center space-y-1">
                            <div className="text-2xl font-light text-yellow-600">
                              {getCurrentDocuments().filter(doc => doc.status === 'Needs Review').length}
                            </div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Needs Review</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border border-gray-100">
                        <CardContent className="p-4">
                          <div className="text-center space-y-1">
                            <div className="text-2xl font-light text-red-600">
                              {getCurrentDocuments().filter(doc => doc.status === 'Missing').length}
                            </div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Missing</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border border-gray-100">
                        <CardContent className="p-4">
                          <div className="text-center space-y-1">
                            <div className="text-2xl font-light text-purple-600">
                              {getCurrentDocuments().reduce((total, doc) => total + (doc.viewCount || 0), 0)}
                            </div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Views</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>


                  </div>

                  {/* Documents Table */}
                  <Card className="bg-white border-gray-200">
                    <CardHeader className="border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg font-semibold text-gray-900">Documents</CardTitle>
                          <CardDescription className="text-sm text-gray-500">
                            {getCurrentDocuments().length} documents in {selectedSubfolder.name}
                          </CardDescription>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Search documents..."
                              value={documentFilters.search}
                              onChange={(e) => handleDocumentFilterChange('search', e.target.value)}
                              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                            />
                          </div>
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                              <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Document</th>
                              <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Uploaded By</th>
                              <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Upload Date</th>
                              <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Size</th>
                              <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Views</th>
                              <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {getCurrentDocuments().map((document) => (
                              <tr key={document.id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-6">
                                  <div className="flex items-center gap-3">
                                    <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-gray-900 text-sm">{document.name}</div>
                                      <div className="flex items-center gap-2 mt-1">
                                        <Badge className={
                                          document.status === 'Complete' ? 'bg-green-100 text-green-800' :
                                          document.status === 'Missing' ? 'bg-red-100 text-red-800' :
                                          document.status === 'Needs Review' ? 'bg-yellow-100 text-yellow-800' :
                                          'bg-gray-100 text-gray-800'
                                        } variant="secondary">
                                          {document.status}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-700">{document.uploadedBy}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-700">{formatDate(document.uploadedAt)}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <span className="text-sm text-gray-700">{formatFileSize(document.size)}</span>
                                </td>
                                <td className="py-4 px-4">
                                  <span className="text-sm text-gray-700">{document.viewCount}</span>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-1">
                                    <Button variant="ghost" size="sm">
                                      <Eye className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                      <Download className="w-4 h-4" />
                                    </Button>
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      onClick={() => handleOpenComments(document)}
                                      className="relative"
                                    >
                                      <MessageCircle className="w-4 h-4" />
                                      {getCommentCount(document.id) > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                          {getCommentCount(document.id)}
                                        </span>
                                      )}
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Document Analytics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
                <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
                  <CardContent className="p-4">
                    <div className="text-center space-y-1">
                      <div className="text-2xl font-light text-gray-900">{analytics.totalDocuments}</div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Documents</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
                  <CardContent className="p-4">
                    <div className="text-center space-y-1">
                      <div className="text-2xl font-light text-green-600">{analytics.uploadedDocuments}</div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Uploaded</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
                  <CardContent className="p-4">
                    <div className="text-center space-y-1">
                      <div className="text-2xl font-light text-red-600">{analytics.missingDocuments}</div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Missing</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
                  <CardContent className="p-4">
                    <div className="text-center space-y-1">
                      <div className="text-2xl font-light text-purple-600">{analytics.completionRate}%</div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Completion Rate</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
                  <CardContent className="p-4">
                    <div className="text-center space-y-1">
                      <div className="text-2xl font-light text-orange-600">{analytics.needsReviewDocuments}</div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Needs Review</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
                  <CardContent className="p-4">
                    <div className="text-center space-y-1">
                      <div className="text-2xl font-light text-blue-600">{analytics.uploadedThisWeek}</div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Added This Week</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tabs */}
              <div className="mb-8">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    <button
                      onClick={() => setActiveTab('folders')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'folders'
                          ? 'border-purple-500 text-purple-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <FolderOpen className="w-4 h-4 inline mr-2" />
                      Folders
                    </button>
                    <button
                      onClick={() => setActiveTab('users')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'users'
                          ? 'border-purple-500 text-purple-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Users className="w-4 h-4 inline mr-2" />
                      User Access
                    </button>
                    <button
                      onClick={() => setActiveTab('activity')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'activity'
                          ? 'border-purple-500 text-purple-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Activity className="w-4 h-4 inline mr-2" />
                      Activity
                    </button>
                    <button
                      onClick={() => setActiveTab('downloads')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'downloads'
                          ? 'border-purple-500 text-purple-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Download className="w-4 h-4 inline mr-2" />
                      Download Logs
                    </button>
                    <button
                      onClick={() => setActiveTab('qna')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'qna'
                          ? 'border-purple-500 text-purple-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      Q&A
                    </button>
                    <button
                      onClick={() => setActiveTab('tasks')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'tasks'
                          ? 'border-purple-500 text-purple-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      Tasks
                    </button>
                  </nav>
                </div>
              </div>

              {/* Folders Tab */}
              {activeTab === 'folders' && (
                <div>
                  {/* Search and Filter Controls */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-900">Search & Filter Folders</h3>
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        <X className="w-4 h-4 mr-2" />
                        Clear All
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {/* Search */}
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search folders..."
                          value={folderSearch}
                          onChange={(e) => setFolderSearch(e.target.value)}
                          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      
                      {/* Category Filter */}
                      <select
                        value={folderFilters.category}
                        onChange={(e) => setFolderFilters(prev => ({...prev, category: e.target.value}))}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="All">All Categories</option>
                        <option value="Financial">Financial</option>
                        <option value="Legal">Legal</option>
                        <option value="Technical">Technical</option>
                        <option value="Corporate">Corporate</option>
                        <option value="HR">HR & People</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Product">Product</option>
                        <option value="Compliance">Compliance</option>
                      </select>
                      
                      {/* Status Filter */}
                      <select
                        value={folderFilters.status}
                        onChange={(e) => setFolderFilters(prev => ({...prev, status: e.target.value}))}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="All">All Status</option>
                        <option value="Complete">Complete</option>
                        <option value="Needs Review">Needs Review</option>
                        <option value="Missing">Missing</option>
                      </select>
                      
                      {/* Completion Filter */}
                      <select
                        value={folderFilters.completion}
                        onChange={(e) => setFolderFilters(prev => ({...prev, completion: e.target.value}))}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="All">All Completion</option>
                        <option value="Complete">100% Complete</option>
                        <option value="High">80-99% Complete</option>
                        <option value="Medium">50-79% Complete</option>
                        <option value="Low">Under 50%</option>
                      </select>
                    </div>
                    
                    {/* Results Summary */}
                    <div className="mt-3 text-xs text-gray-500">
                      Showing {getFilteredFolders().length} of {folders.length} folders
                    </div>
                  </div>
                  
                  {/* Folders Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {getFilteredFolders().map((folder) => {
                      const categoryColors = getCategoryColor(folder.category)
                      const CategoryIcon = getCategoryIcon(folder.category)
                      return (
                        <Card 
                          key={folder.id} 
                          className="bg-white border border-gray-200 hover:border-gray-300 transition-all cursor-pointer hover:shadow-md"
                          onClick={() => handleFolderClick(folder)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 ${categoryColors.icon} rounded-lg flex items-center justify-center`}>
                                  <CategoryIcon className={`w-6 h-6 ${categoryColors.iconColor}`} />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">{folder.name}</h3>
                                  <p className="text-sm text-gray-600">{folder.description}</p>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-2xl font-light text-gray-900">{folder.documentCount}</div>
                                <div className="text-xs text-gray-500">Documents</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-light text-gray-900">{folder.viewCount}</div>
                                <div className="text-xs text-gray-500">Views</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                              <span>Last accessed: {formatDate(folder.lastAccessed)}</span>
                              <span>{folder.userCount} users</span>
                            </div>

                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                {folder.permissions.map((permission) => (
                                  <Badge key={permission} variant="secondary" className="text-xs">
                                    {permission}
                                  </Badge>
                                ))}
                              </div>
                              {getDocumentStatusBadge(folder.status)}
                            </div>

                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span>{folder.completedDocs}/{folder.totalDocs} complete</span>
                              <div className="w-20">
                                <Progress value={(folder.completedDocs / folder.totalDocs) * 100} className="h-1.5" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                  
                  {/* No Results Message */}
                  {getFilteredFolders().length === 0 && (
                    <div className="text-center py-12">
                      <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No folders found</h3>
                      <p className="text-gray-500 mb-4">Try adjusting your search criteria or filters</p>
                      <Button variant="outline" onClick={clearFilters}>
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Users Tab */}
              {activeTab === 'users' && (
                <Card className="bg-white border-gray-200">
                  <CardHeader className="border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900">User Access Management</CardTitle>
                        <CardDescription className="text-sm text-gray-500">{getFilteredUsers().length} users with access</CardDescription>
                      </div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add User
                      </Button>
                    </div>
                    
                    {/* User Search and Filter Controls */}
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="relative">
                          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search users..."
                            value={userSearch}
                            onChange={(e) => setUserSearch(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        
                        {/* User Type Filter */}
                        <select
                          value={userFilters.userType}
                          onChange={(e) => setUserFilters(prev => ({...prev, userType: e.target.value}))}
                          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="All">All Types</option>
                          <option value="internal">Internal</option>
                          <option value="external">External</option>
                        </select>
                        
                        {/* Access Level Filter */}
                        <select
                          value={userFilters.accessLevel}
                          onChange={(e) => setUserFilters(prev => ({...prev, accessLevel: e.target.value}))}
                          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="All">All Access Levels</option>
                          <option value="Full Access">Full Access</option>
                          <option value="Limited Access">Limited Access</option>
                          <option value="Legal Access">Legal Access</option>
                          <option value="View Only">View Only</option>
                        </select>
                        
                        {/* Status Filter */}
                        <select
                          value={userFilters.status}
                          onChange={(e) => setUserFilters(prev => ({...prev, status: e.target.value}))}
                          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="All">All Status</option>
                          <option value="active">Active</option>
                          <option value="expired">Expired</option>
                        </select>
                      </div>
                      
                      {/* Results Summary and Clear Filter */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="text-xs text-gray-500">
                          Showing {getFilteredUsers().length} of {users.length} users
                        </div>
                        <Button variant="ghost" size="sm" onClick={clearFilters}>
                          <X className="w-4 h-4 mr-2" />
                          Clear Filters
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">User</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Type</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Access Level</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Download</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Expiry</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Activity</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {getFilteredUsers().length > 0 ? (
                            getFilteredUsers().map((user) => (
                              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-6">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                      <span className="text-purple-600 text-xs font-medium">{user.name.split(' ').map(n => n[0]).join('')}</span>
                                    </div>
                                    <div>
                                      <div className="font-medium text-gray-900 text-sm">{user.name}</div>
                                      <div className="text-xs text-gray-500">{user.email}</div>
                                      <div className="text-xs text-gray-500">{user.role} • {user.company}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <Badge 
                                    className={user.userType === 'internal' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'} 
                                    variant="secondary"
                                  >
                                    {user.userType === 'internal' ? 'Internal' : 'External'}
                                  </Badge>
                                </td>
                                <td className="py-4 px-4">
                                  <Badge className={getAccessLevelColor(user.accessLevel)} variant="secondary">
                                    {user.accessLevel}
                                  </Badge>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2">
                                    {user.canDownload ? (
                                      <Badge className="bg-green-100 text-green-800" variant="secondary">
                                        <Download className="w-3 h-3 mr-1" />
                                        Enabled
                                      </Badge>
                                    ) : (
                                      <Badge className="bg-red-100 text-red-800" variant="secondary">
                                        <Lock className="w-3 h-3 mr-1" />
                                        Restricted
                                      </Badge>
                                    )}
                                    {getExpiringLinksCount(user) > 0 && (
                                      <Badge className="bg-purple-100 text-purple-800" variant="secondary">
                                        {getExpiringLinksCount(user)} Links
                                      </Badge>
                                    )}
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  {user.accessExpiry ? (
                                    <div className="text-sm">
                                      <div className={`font-medium ${isAccessExpired(user) ? 'text-red-600' : getDaysUntilExpiry(user.accessExpiry) <= 7 ? 'text-orange-600' : 'text-gray-900'}`}>
                                        {isAccessExpired(user) ? 'Expired' : `${getDaysUntilExpiry(user.accessExpiry)} days`}
                                      </div>
                                      <div className="text-xs text-gray-500">{formatDate(user.accessExpiry)}</div>
                                    </div>
                                  ) : (
                                    <span className="text-sm text-gray-500">No expiry</span>
                                  )}
                                </td>
                                <td className="py-4 px-4">
                                  <div className="text-sm text-gray-700">
                                    <div>{user.documentsViewed} docs viewed</div>
                                    <div className="text-xs text-gray-500">{formatDate(user.lastActive)}</div>
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-1">
                                    <Button variant="ghost" size="sm" title="Manage Access">
                                      <Settings className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm" title="Generate Link">
                                      <Share2 className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                      <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="7" className="py-12 text-center">
                                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
                                <p className="text-gray-500 mb-4">Try adjusting your search criteria or filters</p>
                                <Button variant="outline" onClick={clearFilters}>
                                  Clear Filters
                                </Button>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Activity Tab */}
              {activeTab === 'activity' && (
                <Card className="bg-white border-gray-200">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
                    <CardDescription className="text-sm text-gray-500">Real-time document access and engagement</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 text-sm font-medium">
                                {activity.user.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                <span className="font-semibold">{activity.user}</span> {activity.action.toLowerCase()} <span className="font-semibold">{activity.document}</span>
                              </div>
                              <div className="text-xs text-gray-500">
                                in {activity.folder} • {formatDate(activity.timestamp)} at {formatTime(activity.timestamp)}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {activity.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Download Logs Tab */}
              {activeTab === 'downloads' && (
                <Card className="bg-white border-gray-200">
                  <CardHeader className="border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-900">Download Audit Trail</CardTitle>
                    <CardDescription className="text-sm text-gray-500">Complete log of all document downloads with version tracking</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">User</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Document</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Version</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Downloaded</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Method</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Size</th>
                            <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">IP Address</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {downloadLogs.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                              <td className="py-4 px-6">
                                <div>
                                  <div className="font-medium text-gray-900 text-sm">{log.user}</div>
                                  <div className="text-xs text-gray-500">{log.userEmail}</div>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-gray-400" />
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">{log.document}</div>
                                    <div className="text-xs text-gray-500">{log.folder}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <Badge 
                                    className={log.isLatestVersion ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} 
                                    variant="secondary"
                                  >
                                    {log.version}
                                  </Badge>
                                  {!log.isLatestVersion && (
                                    <Badge className="bg-orange-100 text-orange-800" variant="secondary">
                                      Outdated
                                    </Badge>
                                  )}
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="text-sm">
                                  <div className="text-gray-900">{formatDate(log.downloadedAt)}</div>
                                  <div className="text-xs text-gray-500">{formatTime(log.downloadedAt)}</div>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <Badge 
                                  className={log.downloadMethod === 'expiring_link' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'} 
                                  variant="secondary"
                                >
                                  {log.downloadMethod === 'expiring_link' ? 'Expiring Link' : 'Direct'}
                                </Badge>
                              </td>
                              <td className="py-4 px-4">
                                <span className="text-sm text-gray-700">{log.fileSize}</span>
                              </td>
                              <td className="py-4 px-4">
                                <div className="text-sm">
                                  <div className="text-gray-900 font-mono">{log.ipAddress}</div>
                                  <div className="text-xs text-gray-500">{log.userAgent}</div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Q&A Tab */}
              {activeTab === 'qna' && (
                <div>
                  {/* Ask a Question Form */}
                  <Card className="bg-white border-gray-200 mb-6">
                    <CardHeader className="border-b border-gray-200">
                      <CardTitle className="text-lg font-semibold text-gray-900">Ask a Question</CardTitle>
                      <CardDescription className="text-sm text-gray-500">Submit questions about the business or documents</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Question Input */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                          <textarea
                            placeholder="What would you like to know about the business?"
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                            rows={3}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Category Dropdown */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category (Optional)</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                              <option value="">Select category...</option>
                              <option value="Financial">Financial</option>
                              <option value="Legal">Legal</option>
                              <option value="Technical">Technical</option>
                              <option value="Commercial">Commercial</option>
                              <option value="HR">HR & People</option>
                              <option value="Strategy">Strategy</option>
                            </select>
                          </div>
                          
                          {/* Related Folder Dropdown */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Related Folder (Optional)</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                              <option value="">Select folder...</option>
                              {folders.map(folder => (
                                <option key={folder.id} value={folder.id}>{folder.name}</option>
                              ))}
                            </select>
                          </div>
                          
                          {/* Assign To Dropdown */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Assign To</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                              <option value="">Select team member...</option>
                              {teamMembers.map(member => (
                                <option key={member.id} value={member.id}>{member.name} ({member.role})</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Submit Question
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Q&A List - Clean Simple Design */}
                  <Card className="bg-white border-gray-200">
                    <CardHeader className="border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg font-semibold text-gray-900">Questions & Answers</CardTitle>
                          <CardDescription className="text-sm text-gray-500">{qnaData.length} questions submitted</CardDescription>
                        </div>
                        
                        {/* Simple Status Filter */}
                        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option value="All">All Questions</option>
                          <option value="Open">Open</option>
                          <option value="Answered">Answered</option>
                        </select>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-6 p-6">
                        {qnaData.map((qa) => (
                          <div key={qa.id} className="border border-gray-100 rounded-lg p-5 hover:border-gray-200 transition-colors">
                            {/* Header Row: Question + Status */}
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-base font-medium text-gray-900 flex-1 pr-4">{qa.question}</h3>
                              <Badge className={
                                qa.status === 'Answered' ? 'bg-green-100 text-green-800' :
                                qa.status === 'In Review' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              } variant="secondary">
                                {qa.status === 'Pending' ? 'Open' : qa.status}
                              </Badge>
                            </div>
                            
                            {/* Meta Info Row */}
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                              <span>Asked by <strong>{qa.askedBy}</strong> ({qa.askedByCompany})</span>
                              <span>•</span>
                              <span>{formatDate(qa.askedAt)}</span>
                              {qa.category && (
                                <>
                                  <span>•</span>
                                  <span className="text-purple-600">{qa.category}</span>
                                </>
                              )}
                            </div>
                            
                            {/* Answer or Action */}
                            {qa.answer ? (
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <span className="text-sm font-medium text-green-800">Answered by {qa.answeredBy}</span>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">{qa.answer}</p>
                              </div>
                            ) : (
                              <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center gap-2">
                                  <MessageCircle className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-600">
                                    {qa.answeredBy ? `Assigned to ${qa.answeredBy}` : 'Not yet assigned'}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    <UserCheck className="w-4 h-4 mr-1" />
                                    Assign
                                  </Button>
                                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                    Answer
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Tasks Tab - Interactive Task Management */}
              {activeTab === 'tasks' && (
                <div>
                  {/* Task Overview Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <Card className="bg-white border border-gray-100">
                      <CardContent className="p-4">
                        <div className="text-center space-y-1">
                          <div className="text-2xl font-light text-gray-900">{allTasks.length}</div>
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Tasks</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white border border-gray-100">
                      <CardContent className="p-4">
                        <div className="text-center space-y-1">
                          <div className="text-2xl font-light text-blue-600">{allTasks.filter(task => getIntegratedTaskStatus(task) === 'In Progress').length}</div>
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">In Progress</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white border border-gray-100">
                      <CardContent className="p-4">
                        <div className="text-center space-y-1">
                          <div className="text-2xl font-light text-red-600">{allTasks.filter(task => getIntegratedTaskStatus(task) === 'Overdue' || isTaskOverdue(task)).length}</div>
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Overdue</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white border border-gray-100">
                      <CardContent className="p-4">
                        <div className="text-center space-y-1">
                          <div className="text-2xl font-light text-green-600">{allTasks.filter(task => getIntegratedTaskStatus(task) === 'Complete').length}</div>
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Complete</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Auto-Generated Tasks Alert */}
                  {getAutoGeneratedTasks().length > 0 && (
                    <Card className="bg-blue-50 border-blue-200 mb-6">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-blue-900">
                              {getAutoGeneratedTasks().length} tasks auto-generated from Due Diligence gaps
                            </h3>
                            <p className="text-xs text-blue-700 mt-1">
                              These tasks were automatically created based on missing due diligence items
                            </p>
                          </div>
                          <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                            View Due Diligence
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Create Task Form */}
                  <Card className="bg-white border-gray-200 mb-6">
                    <CardHeader className="border-b border-gray-200">
                      <CardTitle className="text-lg font-semibold text-gray-900">Create New Task</CardTitle>
                      <CardDescription className="text-sm text-gray-500">Add a new task to the project timeline</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
                            <input
                              type="text"
                              placeholder="Enter task title..."
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                              <option value="">Select category...</option>
                              <option value="Financial">Financial</option>
                              <option value="Legal">Legal</option>
                              <option value="Technical">Technical</option>
                              <option value="Commercial">Commercial</option>
                              <option value="HR">HR & People</option>
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                          <textarea
                            placeholder="Describe what needs to be done..."
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                            rows={3}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Assign To</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                              <option value="">Select team member...</option>
                              {teamMembers.map(member => (
                                <option key={member.id} value={member.id}>{member.name} ({member.role})</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                              <option value="Low">Low</option>
                              <option value="Medium">Medium</option>
                              <option value="High">High</option>
                              <option value="Critical">Critical</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                            <input
                              type="date"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Create Task
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tasks List */}
                  <Card className="bg-white border-gray-200">
                    <CardHeader className="border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg font-semibold text-gray-900">Tasks</CardTitle>
                          <CardDescription className="text-sm text-gray-500">{allTasks.length} tasks in the pipeline</CardDescription>
                        </div>
                        
                        {/* Task Filters */}
                        <div className="flex items-center gap-3">
                          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="All">All Status</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Complete">Complete</option>
                            <option value="Overdue">Overdue</option>
                          </select>
                          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="All">All Priorities</option>
                            <option value="Critical">Critical</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                          </select>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4 p-6">
                        {allTasks.map((task) => {
                          const daysUntilDue = getDaysUntilDue(task.dueDate)
                          const isOverdue = isTaskOverdue(task)
                          const integratedStatus = getIntegratedTaskStatus(task)
                          
                          return (
                            <div key={task.id} className={`border rounded-lg p-5 transition-all hover:shadow-md ${
                              integratedStatus === 'Complete' ? 'border-green-200 bg-green-50' :
                              isOverdue || integratedStatus === 'Overdue' ? 'border-red-200 bg-red-50' :
                              task.priority === 'Critical' ? 'border-red-200 bg-red-50' :
                              task.isAutoGenerated ? 'border-blue-200 bg-blue-50' :
                              'border-gray-200 bg-white hover:border-gray-300'
                            }`}>
                              {/* Task Header */}
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h3 className={`text-base font-medium ${
                                      integratedStatus === 'Complete' ? 'text-green-900 line-through' : 'text-gray-900'
                                    }`}>
                                      {task.title}
                                    </h3>
                                    {task.isAutoGenerated && (
                                      <Badge className="bg-blue-100 text-blue-800 text-xs" variant="secondary">
                                        <CheckCircle className="w-3 h-3 mr-1" />
                                        Auto-Generated
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600 leading-relaxed">{task.description}</p>
                                  {task.dueDiligenceId && (
                                    <div className="mt-2 p-2 bg-purple-50 rounded-lg">
                                      <div className="flex items-center gap-2 text-xs text-purple-700">
                                        <CheckCircle className="w-3 h-3" />
                                        <span>Linked to Due Diligence: {getDueDiligenceItemById(task.dueDiligenceId)?.title}</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="flex items-center gap-2 ml-4">
                                  {/* Priority Badge */}
                                  <Badge className={getPriorityColor(task.priority)} variant="secondary">
                                    {task.priority === 'Critical' && <AlertTriangle className="w-3 h-3 mr-1" />}
                                    {task.priority}
                                  </Badge>
                                  
                                  {/* Status Badge */}
                                  <Badge className={getTaskStatusColor(integratedStatus)} variant="secondary">
                                    {integratedStatus === 'Complete' && <CheckCircle className="w-3 h-3 mr-1" />}
                                    {integratedStatus === 'In Progress' && <Clock className="w-3 h-3 mr-1" />}
                                    {(isOverdue || integratedStatus === 'Overdue') && <AlertTriangle className="w-3 h-3 mr-1" />}
                                    {(isOverdue || integratedStatus === 'Overdue') ? 'Overdue' : integratedStatus}
                                  </Badge>
                                </div>
                              </div>
                              
                              {/* Task Meta Information */}
                              <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4" />
                                  <span>Assigned to <strong>{task.assignee}</strong> ({task.assigneeRole})</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>Due {formatDate(task.dueDate)}</span>
                                  {daysUntilDue >= 0 ? (
                                    <span className={`text-xs px-2 py-1 rounded ${
                                      daysUntilDue <= 1 ? 'bg-red-100 text-red-700' :
                                      daysUntilDue <= 3 ? 'bg-yellow-100 text-yellow-700' :
                                      'bg-gray-100 text-gray-600'
                                    }`}>
                                      {daysUntilDue === 0 ? 'Due today' : `${daysUntilDue} days left`}
                                    </span>
                                  ) : (
                                    <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700">
                                      {Math.abs(daysUntilDue)} days overdue
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                  <FolderOpen className="w-4 h-4" />
                                  <span>{task.category}</span>
                                </div>
                              </div>
                              
                              {/* Task Comments */}
                              {task.comments && task.comments.length > 0 && (
                                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                  <div className="flex items-center gap-2 mb-3">
                                    <MessageCircle className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Latest Update</span>
                                  </div>
                                  {task.comments.slice(-1).map(comment => (
                                    <div key={comment.id} className="text-sm">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium text-gray-900">{comment.author}</span>
                                        <span className="text-xs text-gray-500">{formatDate(comment.timestamp)}</span>
                                      </div>
                                      <p className="text-gray-700">{comment.message}</p>
                                    </div>
                                  ))}
                                  {task.comments.length > 1 && (
                                    <button className="text-xs text-purple-600 hover:text-purple-700 mt-2">
                                      View all {task.comments.length} comments
                                    </button>
                                  )}
                                </div>
                              )}
                              
                              {/* Task Actions */}
                              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                <div className="flex items-center gap-2">
                                  {task.relatedDocuments && task.relatedDocuments.length > 0 && (
                                    <Button variant="outline" size="sm">
                                      <FileText className="w-4 h-4 mr-1" />
                                      {task.relatedDocuments.length} docs
                                    </Button>
                                  )}
                                  {task.relatedFolder && (
                                    <Button variant="outline" size="sm">
                                      <FolderOpen className="w-4 h-4 mr-1" />
                                      {task.relatedFolder}
                                    </Button>
                                  )}
                                  <Button variant="outline" size="sm">
                                    <MessageCircle className="w-4 h-4 mr-1" />
                                    Comment
                                  </Button>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  {integratedStatus !== 'Complete' && (
                                    <>
                                      <select className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        <option value={integratedStatus}>{integratedStatus}</option>
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Complete">Complete</option>
                                      </select>
                                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                        <CheckCircle className="w-4 h-4 mr-1" />
                                        Mark Complete
                                      </Button>
                                    </>
                                  )}
                                  
                                  {integratedStatus === 'Complete' && (
                                    <div className="flex items-center gap-2 text-green-700">
                                      <CheckCircle className="w-4 h-4" />
                                      <span className="text-sm font-medium">
                                        {task.completedAt ? `Completed ${formatDate(task.completedAt)}` : 'Complete'}
                                      </span>
                                    </div>
                                  )}
                                  
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Comments Modal */}
      {showComments && selectedDocument && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Comments</h3>
                  <p className="text-sm text-gray-500 truncate max-w-md">{selectedDocument.name}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={handleCloseComments}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {getDocumentComments(selectedDocument.id).map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-xs font-medium">{comment.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-900">{comment.author}</span>
                      <span className="text-xs text-gray-500">{comment.role}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{formatDate(comment.timestamp)} at {formatTime(comment.timestamp)}</span>
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">
                      {comment.message.split(' ').map((word, index) => {
                        if (word.startsWith('@')) {
                          const mentionId = word.substring(1)
                          const mentionedUser = teamMembers.find(member => member.id === mentionId)
                          return (
                            <span key={index} className="bg-purple-100 text-purple-700 px-1 rounded">
                              @{mentionedUser ? mentionedUser.name : mentionId}
                            </span>
                          )
                        }
                        return word + ' '
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {getDocumentComments(selectedDocument.id).length === 0 && (
                <div className="text-center py-8">
                  <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">No comments yet</p>
                  <p className="text-gray-400 text-xs">Start the conversation by adding a comment below</p>
                </div>
              )}
            </div>

            {/* Add Comment Section */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-medium">DK</span>
                </div>
                <div className="flex-1">
                  <textarea
                    className="comment-textarea w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Add a comment... Use @username to mention team members"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                  
                  {/* @Mention Suggestions */}
                  {newComment.includes('@') && newComment.split('@').pop().length > 0 && (
                    <div className="mt-2 border border-gray-200 rounded-lg bg-white shadow-lg max-h-32 overflow-y-auto">
                      {teamMembers.filter(member => 
                        member.name.toLowerCase().includes(newComment.split('@').pop().toLowerCase()) ||
                        member.id.toLowerCase().includes(newComment.split('@').pop().toLowerCase())
                      ).map(member => (
                        <button
                          key={member.id}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2"
                          onClick={() => handleMentionSelect(member)}
                        >
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 text-xs font-medium">{member.avatar}</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                            <div className="text-xs text-gray-500">{member.role}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-3">
                    <div className="text-xs text-gray-500">
                      Comments are visible to team members with access to this document
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={handleCloseComments}>
                        Cancel
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-purple-600 hover:bg-purple-700"
                        onClick={handleAddComment}
                        disabled={!newComment.trim()}
                      >
                        Add Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}