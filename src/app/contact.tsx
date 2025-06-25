// components/ContactForm.tsx
'use client'

import { useState, useEffect } from 'react'
import { getBudgetRanges, getProjectTimelines, submitContact } from '../../lib/supabase'

// Types for the form data
interface FormData {
  contact_type: 'Business' | 'Personal'
  first_name: string
  last_name: string
  company_name: string
  email: string
  phone_number: string
  city: string
  zip_code: string
  az_county: string
  comments: string
  estimated_budget_id: string
  project_timeline_id: string
}

interface BudgetRange {
  id: number
  range_label: string
  display_order: number
}

interface ProjectTimeline {
  id: number
  timeline_label: string
  display_order: number
}

export default function ContactForm() {
  const [budgetRanges, setBudgetRanges] = useState<BudgetRange[]>([])
  const [projectTimelines, setProjectTimelines] = useState<ProjectTimeline[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [formData, setFormData] = useState<FormData>({
    contact_type: 'Business',
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    phone_number: '',
    city: '',
    zip_code: '',
    az_county: '',
    comments: '',
    estimated_budget_id: '',
    project_timeline_id: ''
  })

  // Load dropdown data on component mount
  useEffect(() => {
    loadDropdownData()
  }, [])

  const loadDropdownData = async (): Promise<void> => {
    try {
      const [budgets, timelines] = await Promise.all([
        getBudgetRanges(),
        getProjectTimelines()
      ])
      setBudgetRanges(budgets)
      setProjectTimelines(timelines)
    } catch (err) {
      console.error('Error loading dropdown data:', err)
      setError('Failed to load form options. Please refresh the page.')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (error) {
      setError('')
    }
  }

  const validateForm = (): boolean => {
    if (!formData.first_name.trim()) {
      setError('First name is required')
      return false
    }
    if (!formData.last_name.trim()) {
      setError('Last name is required')
      return false
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return false
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      // Convert string IDs to integers for submission
      const submitData = {
        ...formData,
        estimated_budget_id: formData.estimated_budget_id ? parseInt(formData.estimated_budget_id) : undefined,
        project_timeline_id: formData.project_timeline_id ? parseInt(formData.project_timeline_id) : undefined,
        name: `${formData.first_name} ${formData.last_name}`.trim(),
        message: formData.comments
      }
      
      await submitContact(submitData)
      setSuccess(true)
      
      // Reset form
      setFormData({
        contact_type: 'Business',
        first_name: '',
        last_name: '',
        company_name: '',
        email: '',
        phone_number: '',
        city: '',
        zip_code: '',
        az_county: '',
        comments: '',
        estimated_budget_id: '',
        project_timeline_id: ''
      })
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Failed to submit form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleNewForm = (): void => {
    setSuccess(false)
    setError('')
  }

  // Success state
  if (success) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h2>
        <p className="text-green-700 mb-4">
          Your contact form has been submitted successfully. We'll get back to you soon!
        </p>
        <button 
          onClick={handleNewForm}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Submit Another Form
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Smart Home Installation Contact Form</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact Type */}
        <div>
          <label className="block text-sm font-medium mb-2">Contact Type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contact_type"
                value="Business"
                checked={formData.contact_type === 'Business'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Business
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contact_type"
                value="Personal"
                checked={formData.contact_type === 'Personal'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Personal
            </label>
          </div>
        </div>

        {/* First Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Company Name (optional)</label>
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Phone and City Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">City / Location</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Zip Code and County Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Zip Code</label>
            <input
              type="text"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">AZ County</label>
            <input
              type="text"
              name="az_county"
              value={formData.az_county}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium mb-2">Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows={4}
            placeholder="Tell us about your smart home installation needs..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-medium mb-2">Estimated Budget</label>
          <select
            name="estimated_budget_id"
            value={formData.estimated_budget_id}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a budget range</option>
            {budgetRanges.map(range => (
              <option key={range.id} value={range.id}>
                {range.range_label}
              </option>
            ))}
          </select>
        </div>

        {/* Project Timeline */}
        <div>
          <label className="block text-sm font-medium mb-2">Project Timeline</label>
          <select
            name="project_timeline_id"
            value={formData.project_timeline_id}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a timeline</option>
            {projectTimelines.map(timeline => (
              <option key={timeline.id} value={timeline.id}>
                {timeline.timeline_label}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4">
        We respect your privacy. Your information will only be used to contact you about our smart home installation products and services. We will never share or sell your details to third parties.
      </p>
    </div>
  )
}