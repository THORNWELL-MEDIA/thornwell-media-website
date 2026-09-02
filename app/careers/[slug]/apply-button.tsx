'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react'
import PhoneInput, { isValidPhoneNumber, type Country } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { BRAND } from '@/lib/constants'

interface Props {
  role: string
  jobId: string
  jobOpeningId?: string
  locId?: string | number
  workType?: string
  jobType?: string
  className?: string
  variant?: 'primary' | 'ghost'
  label?: string
  isSticky?: boolean
}

export function ApplyButton({
  role,
  jobId,
  jobOpeningId,
  locId,
  workType,
  jobType,
  className = '',
  variant = 'primary',
  label = 'Apply Now',
  isSticky = false,
}: Props) {
  const [open, setOpen] = useState(false)

  const triggerBase =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all whitespace-nowrap'

  const triggerVariant =
    variant === 'primary'
      ? 'bg-[#C9A96E] text-navy-950 hover:bg-[#b8985d] shadow-sm'
      : 'border border-paper/20 bg-white/10 text-paper hover:bg-white/20'

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-apply-trigger
        {...(isSticky ? { 'data-sticky-trigger': true } : {})}
        className={`${triggerBase} ${triggerVariant} ${className} group`}
      >
        <span>{label}</span>
        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </button>

      {open && (
        <ApplyModal
          role={role}
          jobId={jobId}
          jobOpeningId={jobOpeningId}
          locId={locId}
          workType={workType}
          jobType={jobType}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

function getSpecialPortfolioConfig(role: string) {
  if (!role) return null
  const r = role.toLowerCase().replace(/\s+/g, ' ').trim()

  const isSocialMediaManager =
    r === 'group social media & content manager' ||
    r === 'group social media and content manager' ||
    (r.includes('group social media') && r.includes('content manager'))

  if (isSocialMediaManager) {
    return {
      label: 'Portfolio or Work-Sample Link',
      helperText:
        'Provide an accessible link to content you personally created, brands or accounts you managed, and examples of different brand styles. Ensure no login or access request is required.',
      placeholder: 'https://...',
    }
  }

  const isSeoManager =
    r === 'senior seo manager' ||
    r.includes('senior seo manager')

  if (isSeoManager) {
    return {
      label: 'SEO Portfolio or Case Study Link',
      helperText:
        'Provide an accessible link showing websites or brands whose SEO you personally managed, your exact contribution, relevant content samples, and measurable SEO or online-reputation results. Ensure no login or access request is required.',
      placeholder: 'https://...',
    }
  }

  return null
}

function ApplyModal({
  role,
  jobId,
  jobOpeningId,
  locId,
  workType,
  jobType,
  onClose,
}: {
  role: string
  jobId: string
  jobOpeningId?: string
  locId?: string | number
  workType?: string
  jobType?: string
  onClose: () => void
}) {
  const specialPortfolio = getSpecialPortfolioConfig(role)

  // Remote/Hybrid condition evaluates strictly on Job_Type (jobType)
  const targetType = jobType || workType || ''
  const isRemoteForm = !targetType || /remote|hybrid/i.test(String(targetType))

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [errorMsg, setErrorMsg] = useState('')
  const [mounted, setMounted] = useState(false)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState<string>('CA')
  const [businessType, setBusinessType] = useState('')
  const [hasVehicle, setHasVehicle] = useState('')

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code) {
          setCountryCode(data.country_code)
        }
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    setMounted(true)
    setNum1(Math.floor(Math.random() * 10) + 1)
    setNum2(Math.floor(Math.random() * 10) + 1)
  }, [])

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden', 'apply-modal-open')
    window.dispatchEvent(new CustomEvent('apply-modal-state', { detail: true }))
    document.documentElement.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden', 'apply-modal-open')
      window.dispatchEvent(new CustomEvent('apply-modal-state', { detail: false }))
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [])

  // Close on Escape.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    setFieldErrors({})
    const form = e.currentTarget
    const fd = new FormData(form)

    const errors: Record<string, string> = {}

    const firstName = fd.get('first_name') as string
    if (!firstName?.trim()) errors.first_name = 'First name is required'

    const lastName = fd.get('last_name') as string
    if (!lastName?.trim()) errors.last_name = 'Last name is required'

    const email = fd.get('email') as string
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!phone || !isValidPhoneNumber(phone)) {
      errors.phone = 'Please enter a valid phone number'
    }

    const resume = fd.get('resume') as File | null
    if (!resume || resume.size === 0) {
      errors.resume = 'Please upload a resume'
    }

    const isPortfolioRequiredRole = (() => {
      if (!role) return false
      const r = role.toLowerCase().trim()
      return (
        r.includes('ux/ui') ||
        r.includes('ui/ux') ||
        r.includes('video editor') ||
        r.includes('graphics designer') ||
        r.includes('graphic designer')
      )
    })()

    if (isPortfolioRequiredRole) {
      const portfolioFile = fd.get('attached_portfolio') as File | null
      const hasPortfolio = Boolean(portfolioFile && portfolioFile.size > 0)

      const behanceUrl = (fd.get('behance_url') as string || '').trim()
      const hasBehance = behanceUrl.length > 0

      if (!hasPortfolio && !hasBehance) {
        errors.attached_portfolio = 'Please upload your portfolio or provide a Behance URL'
        errors.behance_url = 'Please upload your portfolio or provide a Behance URL'
      } else if (hasBehance) {
        let urlToTest = behanceUrl
        if (!/^https?:\/\//i.test(urlToTest)) {
          urlToTest = 'https://' + urlToTest
        }
        try {
          const urlObj = new URL(urlToTest)
          if (!urlObj.hostname || !urlObj.hostname.includes('.')) {
            errors.behance_url = 'Please enter a valid URL (e.g. https://behance.net/username)'
          } else {
            fd.set('behance_url', urlToTest)
          }
        } catch {
          errors.behance_url = 'Please enter a valid URL (e.g. https://behance.net/username)'
        }
      }
    }

    if (specialPortfolio) {
      const rawUrl = ((fd.get('portfolio_link') as string) || '').trim()
      if (!rawUrl) {
        errors.portfolio_link = 'This field is required'
      } else {
        let urlToTest = rawUrl
        if (!/^https?:\/\//i.test(urlToTest)) {
          urlToTest = 'https://' + urlToTest
        }
        const isValidUrl = /^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/i.test(urlToTest)
        if (!isValidUrl) {
          errors.portfolio_link = 'Please enter a valid URL (e.g. https://example.com/portfolio)'
        } else {
          fd.set('portfolio_link', urlToTest)
        }
      }
    }

    if (isRemoteForm) {
      const workedFromHome = fd.get('worked_from_home') as string
      if (!workedFromHome) errors.worked_from_home = 'This field is required'

      const noiseCancelling = fd.get('noise_cancelling_headset') as string
      if (!noiseCancelling) errors.noise_cancelling_headset = 'This field is required'

      const ram = fd.get('computer_ram') as string
      if (!ram) errors.computer_ram = 'Computer RAM is required'

      const internet = fd.get('internet_speed') as string
      if (!internet) errors.internet_speed = 'Internet speed is required'
    } else {
      const bType = fd.get('business_type') as string
      if (!bType) errors.business_type = 'This field is required'

      if (bType === 'Yes, Sole Proprietorship' || bType === 'Yes, Corporation under my name') {
        if (!fd.get('legal_business_name')) errors.legal_business_name = 'Business name is required'
        if (!fd.get('business_number')) errors.business_number = 'Business Number is required'
      }

      const hasLicense = fd.get('has_drivers_license') as string
      if (!hasLicense) errors.has_drivers_license = 'This field is required'

      const hasVeh = fd.get('has_vehicle') as string
      if (!hasVeh) errors.has_vehicle = 'This field is required'

      if (hasVeh === 'Yes') {
        if (!fd.get('vehicle_make')) errors.vehicle_make = 'Make is required'
        if (!fd.get('vehicle_model')) errors.vehicle_model = 'Model is required'
        if (!fd.get('vehicle_year')) errors.vehicle_year = 'Year is required'
        if (!fd.get('vehicle_mileage')) errors.vehicle_mileage = 'Mileage is required'
      }

      if (!fd.get('smartphone_model')) errors.smartphone_model = 'Smartphone model is required'
    }

    const captchaVal = parseInt(fd.get('captcha') as string, 10)
    if (captchaVal !== num1 + num2) {
      errors.captcha = 'Incorrect math verification'
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setStatus('idle')
      return
    }

    // Append hidden fields
    fd.append('job_id', jobId)
    if (jobOpeningId) fd.append('job_opening_id', jobOpeningId)
    if (locId) {
      fd.append('location_id', String(locId))
      fd.append('loc_id', String(locId))
      fd.append('job_location_id', String(locId))
      fd.append('location', String(locId))
      fd.append('location_Id', String(locId))
    }
    if (workType) {
      fd.append('work_type', workType)
    }
    if (jobType) {
      fd.append('job_type', jobType)
    }
    fd.append('source', 'thornwell')

    // Process mobile
    fd.set('mobile', phone)

    const baseUrl = process.env.NEXT_PUBLIC_PORTAL_BASE_URL || 'https://phpstack-1217932-6516253.cloudwaysapps.com'

    try {
      const res = await fetch(`${baseUrl}/api/v1/job-postings/apply`, {
        method: 'POST',
        body: fd,
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.message || data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (!mounted) return null

  return createPortal(
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-navy-950/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pb-8 sm:p-6 sm:pb-6"
      >
        <div className="relative flex w-full max-w-2xl max-h-full sm:max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-paper shadow-2xl ring-1 ring-paper-edge">
          <div className="flex shrink-0 items-center justify-between border-b border-paper-edge bg-paper px-6 py-5">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A96E] font-semibold">
                Apply Now
              </p>
              <h2
                id="apply-modal-title"
                className="mt-1 font-serif text-xl font-semibold text-navy-900"
              >
                {role}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-navy-400 transition-colors hover:bg-paper-deep hover:text-navy-900"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 pb-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#C9A96E]" />
                <h3 className="font-serif text-2xl font-semibold text-navy-900">
                  Application Received
                </h3>
                <div className="space-y-3 text-sm text-navy-700 max-w-md leading-relaxed">
                  <p>Thank you for applying to join {BRAND.name}.</p>
                  <p>
                    Our operations team will review your submission and contact you via email and phone if you are selected for the initial working session.
                  </p>
                  <p className="font-semibold text-navy-900">
                    Please keep an eye on your inbox for follow-up details.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A96E] px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-[#b8985d]"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {(() => {
                  const getInputClass = (name: string) =>
                    `w-full rounded-xl border ${
                      fieldErrors[name] ? 'border-red-500' : 'border-paper-edge'
                    } bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]`

                  return (
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-navy-900">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="first_name"
                            required
                            className={getInputClass('first_name')}
                            placeholder="Jane"
                          />
                          {fieldErrors['first_name'] && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors['first_name']}</p>
                          )}
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-navy-900">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="last_name"
                            required
                            className={getInputClass('last_name')}
                            placeholder="Smith"
                          />
                          {fieldErrors['last_name'] && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors['last_name']}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-navy-900">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            required
                            className={getInputClass('email')}
                            placeholder="you@email.com"
                          />
                          {fieldErrors['email'] && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors['email']}</p>
                          )}
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-navy-900">
                            Mobile <span className="text-red-500">*</span>
                          </label>
                          <style dangerouslySetInnerHTML={{
                            __html: `
                              .PhoneInput {
                                display: flex;
                                items-center;
                              }
                              .PhoneInputInput {
                                flex: 1;
                                border: none;
                                background: transparent;
                                outline: none;
                                padding: 0.625rem;
                                font-size: 0.875rem;
                                color: #0A1530;
                              }
                              .PhoneInputCountry {
                                display: flex;
                                align-items: center;
                                margin-right: 0.5rem;
                              }
                              .PhoneInputCountryIcon {
                                width: 1.5rem;
                                height: 1rem;
                              }
                              .PhoneInputCountryIcon--square {
                                width: 1rem;
                              }
                              .PhoneInputCountryIcon--border {
                                border: 1px solid rgba(0,0,0,0.12);
                                box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                              }
                              .PhoneInputCountryIconImg {
                                display: block;
                                width: 100%;
                                height: 100%;
                              }
                              input[type=number]::-webkit-inner-spin-button, 
                              input[type=number]::-webkit-outer-spin-button { 
                                -webkit-appearance: none; 
                                margin: 0; 
                              }
                              input[type=number] {
                                -moz-appearance: textfield;
                              }
                            `
                          }} />
                          <div className={`flex w-full overflow-hidden rounded-xl border ${fieldErrors['phone'] ? 'border-red-500' : 'border-paper-edge'} bg-white px-3 focus-within:ring-2 focus-within:ring-[#C9A96E]`}>
                            <PhoneInput
                              international
                              defaultCountry={countryCode as Country}
                              value={phone}
                              onChange={(val: string) => setPhone(val || '')}
                              className="w-full"
                            />
                          </div>
                          {fieldErrors['phone'] && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors['phone']}</p>
                          )}
                        </div>
                      </div>

                      {isRemoteForm && (
                        <>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label className="mb-1 block text-xs font-semibold text-navy-900">
                                Worked from home for minimum 2 years? <span className="text-red-500">*</span>
                              </label>
                              <select
                                name="worked_from_home"
                                required
                                className={getInputClass('worked_from_home')}
                              >
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                              {fieldErrors['worked_from_home'] && (
                                <p className="mt-1 text-xs text-red-500">{fieldErrors['worked_from_home']}</p>
                              )}
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-semibold text-navy-900">
                                Own a noise-cancelling headset? <span className="text-red-500">*</span>
                              </label>
                              <select
                                name="noise_cancelling_headset"
                                required
                                className={getInputClass('noise_cancelling_headset')}
                              >
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                              {fieldErrors['noise_cancelling_headset'] && (
                                <p className="mt-1 text-xs text-red-500">{fieldErrors['noise_cancelling_headset']}</p>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label className="mb-1 block text-xs font-semibold text-navy-900">
                                Computer RAM (in GB)? <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <input
                                  name="computer_ram"
                                  type="number"
                                  min="1"
                                  required
                                  className={getInputClass('computer_ram')}
                                  placeholder="e.g., 16"
                                />
                                <span className="absolute inset-y-0 right-3.5 flex items-center text-xs font-semibold text-navy-400 pointer-events-none">
                                  GB
                                </span>
                              </div>
                              {fieldErrors['computer_ram'] && (
                                <p className="mt-1 text-xs text-red-500">{fieldErrors['computer_ram']}</p>
                              )}
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-semibold text-navy-900">
                                Internet speed (Download Mbps)? <span className="text-red-500">*</span>
                              </label>
                              <input
                                name="internet_speed"
                                type="number"
                                min="1"
                                required
                                className={getInputClass('internet_speed')}
                                placeholder="e.g., 100"
                              />
                              {fieldErrors['internet_speed'] && (
                                <p className="mt-1 text-xs text-red-500">{fieldErrors['internet_speed']}</p>
                              )}
                            </div>
                          </div>
                        </>
                      )}

                      {!isRemoteForm && (
                        <>
                          <div>
                            <label className="mb-1 block text-xs font-semibold text-navy-900">
                              Operate a business / sole proprietorship / corporation? <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="business_type"
                              required
                              value={businessType}
                              onChange={(e) => setBusinessType(e.target.value)}
                              className={getInputClass('business_type')}
                            >
                              <option value="">Select an option</option>
                              <option value="Yes, Sole Proprietorship">Yes, Sole Proprietorship</option>
                              <option value="Yes, Corporation under my name">Yes, Corporation under my name</option>
                              <option value="No">No</option>
                            </select>
                            {fieldErrors['business_type'] && (
                              <p className="mt-1 text-xs text-red-500">{fieldErrors['business_type']}</p>
                            )}
                          </div>

                          {(businessType === 'Yes, Sole Proprietorship' || businessType === 'Yes, Corporation under my name') && (
                            <>
                              <div>
                                <label className="mb-1 block text-xs font-semibold text-navy-900">
                                  Legal Business Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                  name="legal_business_name"
                                  type="text"
                                  required
                                  className={getInputClass('legal_business_name')}
                                  placeholder="Enter business name"
                                />
                                {fieldErrors['legal_business_name'] && (
                                  <p className="mt-1 text-xs text-red-500">{fieldErrors['legal_business_name']}</p>
                                )}
                              </div>
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                  <label className="mb-1 block text-xs font-semibold text-navy-900">
                                    Business Number <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    name="business_number"
                                    type="text"
                                    required
                                    className={getInputClass('business_number')}
                                    placeholder="Enter Business Number"
                                  />
                                  {fieldErrors['business_number'] && (
                                    <p className="mt-1 text-xs text-red-500">{fieldErrors['business_number']}</p>
                                  )}
                                </div>
                                <div>
                                  <label className="mb-1 block text-xs font-semibold text-navy-900">
                                    HST Number (Optional)
                                  </label>
                                  <input
                                    name="hst_number"
                                    type="text"
                                    className={getInputClass('hst_number')}
                                    placeholder="Enter HST Number"
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label className="mb-1 block text-xs font-semibold text-navy-900">
                                Valid driver&apos;s license? <span className="text-red-500">*</span>
                              </label>
                              <select
                                name="has_drivers_license"
                                required
                                className={getInputClass('has_drivers_license')}
                              >
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                              {fieldErrors['has_drivers_license'] && (
                                <p className="mt-1 text-xs text-red-500">{fieldErrors['has_drivers_license']}</p>
                              )}
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-semibold text-navy-900">
                                Reliable vehicle available? <span className="text-red-500">*</span>
                              </label>
                              <select
                                name="has_vehicle"
                                required
                                value={hasVehicle}
                                onChange={(e) => setHasVehicle(e.target.value)}
                                className={getInputClass('has_vehicle')}
                              >
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                              {fieldErrors['has_vehicle'] && (
                                <p className="mt-1 text-xs text-red-500">{fieldErrors['has_vehicle']}</p>
                              )}
                            </div>
                          </div>

                          {hasVehicle === 'Yes' && (
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1 block text-xs font-semibold text-navy-900">
                                  Vehicle Make <span className="text-red-500">*</span>
                                </label>
                                <input
                                  name="vehicle_make"
                                  type="text"
                                  required
                                  className={getInputClass('vehicle_make')}
                                  placeholder="e.g. Toyota"
                                />
                                {fieldErrors['vehicle_make'] && (
                                  <p className="mt-1 text-xs text-red-500">{fieldErrors['vehicle_make']}</p>
                                )}
                              </div>
                              <div>
                                <label className="mb-1 block text-xs font-semibold text-navy-900">
                                  Vehicle Model <span className="text-red-500">*</span>
                                </label>
                                <input
                                  name="vehicle_model"
                                  type="text"
                                  required
                                  className={getInputClass('vehicle_model')}
                                  placeholder="e.g. Corolla"
                                />
                                {fieldErrors['vehicle_model'] && (
                                  <p className="mt-1 text-xs text-red-500">{fieldErrors['vehicle_model']}</p>
                                )}
                              </div>
                            </div>
                          )}

                          <div>
                            <label className="mb-1 block text-xs font-semibold text-navy-900">
                              Current smartphone model? <span className="text-red-500">*</span>
                            </label>
                            <input
                              name="smartphone_model"
                              type="text"
                              required
                              className={getInputClass('smartphone_model')}
                              placeholder="e.g. iPhone 14, Samsung S22"
                            />
                            {fieldErrors['smartphone_model'] && (
                              <p className="mt-1 text-xs text-red-500">{fieldErrors['smartphone_model']}</p>
                            )}
                          </div>
                        </>
                      )}

                      {(() => {
                        const isPortfolioRequiredRole = (() => {
                          if (!role) return false
                          const r = role.toLowerCase().trim()
                          return (
                            r.includes('ux/ui') ||
                            r.includes('ui/ux') ||
                            r.includes('video editor') ||
                            r.includes('graphics designer') ||
                            r.includes('graphic designer')
                          )
                        })()
                        if (!isPortfolioRequiredRole) return null
                        return (
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label className="mb-1 block text-xs font-semibold text-navy-900">
                                Attach Portfolio <span className="text-red-500">*</span>
                              </label>
                              <input
                                name="attached_portfolio"
                                type="file"
                                accept=".pdf,.doc,.docx,.zip,.rar,.png,.jpg,.jpeg"
                                className={`w-full rounded-xl border ${
                                  fieldErrors['attached_portfolio'] ? 'border-red-500' : 'border-paper-edge'
                                } bg-white px-3 py-2 text-sm text-navy-900 file:mr-4 file:rounded-full file:border-0 file:bg-paper-deep file:px-4 file:py-1 file:text-xs file:font-semibold file:text-navy-900 hover:file:bg-[#C9A96E]/20 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]`}
                              />
                              {fieldErrors['attached_portfolio'] && (
                                <p className="mt-1 text-xs text-red-500">{fieldErrors['attached_portfolio']}</p>
                              )}
                            </div>

                            <div>
                              <label className="mb-1 block text-xs font-semibold text-navy-900">
                                Behance URL <span className="text-red-500">*</span>
                              </label>
                              <input
                                name="behance_url"
                                type="url"
                                className={getInputClass('behance_url')}
                                placeholder="https://behance.net/username"
                              />
                              {fieldErrors['behance_url'] && (
                                <p className="mt-1 text-xs text-red-500">{fieldErrors['behance_url']}</p>
                              )}
                            </div>
                          </div>
                        )
                      })()}

                      {specialPortfolio && (
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-navy-900">
                            {specialPortfolio.label} <span className="text-red-500">*</span>
                          </label>
                          <p className="mb-1.5 text-xs text-navy-600 leading-relaxed">
                            {specialPortfolio.helperText}
                          </p>
                          <input
                            name="portfolio_link"
                            type="url"
                            required
                            className={getInputClass('portfolio_link')}
                            placeholder={specialPortfolio.placeholder}
                          />
                          {fieldErrors['portfolio_link'] && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors['portfolio_link']}</p>
                          )}
                        </div>
                      )}

                      <div>
                        <label className="mb-1 block text-xs font-semibold text-navy-900">
                          Resume / CV <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="resume"
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          className={`w-full rounded-xl border ${
                            fieldErrors['resume'] ? 'border-red-500' : 'border-paper-edge'
                          } bg-white px-3 py-2 text-sm text-navy-900 file:mr-4 file:rounded-full file:border-0 file:bg-paper-deep file:px-4 file:py-1 file:text-xs file:font-semibold file:text-navy-900 hover:file:bg-[#C9A96E]/20 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]`}
                        />
                        {fieldErrors['resume'] && (
                          <p className="mt-1 text-xs text-red-500">{fieldErrors['resume']}</p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-semibold text-navy-900">
                          Verification: What is {num1} + {num2}? <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="captcha"
                          type="number"
                          required
                          className={getInputClass('captcha')}
                          placeholder="Enter the answer"
                        />
                        {fieldErrors['captcha'] && (
                          <p className="mt-1 text-xs text-red-500">{fieldErrors['captcha']}</p>
                        )}
                      </div>

                      {status === 'error' && (
                        <p className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs text-red-600">
                          {errorMsg}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A96E] px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-[#b8985d] w-full mt-2 disabled:opacity-60"
                      >
                        <span>{status === 'loading' ? 'Submitting...' : 'Submit Application'}</span>
                      </button>
                    </form>
                  )
                })()}
              </>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}

export function StickyApplyButton(props: Props) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const triggers = Array.from(document.querySelectorAll('[data-apply-trigger]')).filter(
      (el) => !el.hasAttribute('data-sticky-trigger')
    )

    if (triggers.length === 0) {
      setIsVisible(true)
      return
    }

    const visibilityMap = new Map<Element, boolean>()

    const observer = new IntersectionObserver(
      (entries) => {
        let changed = false
        entries.forEach((entry) => {
          visibilityMap.set(entry.target, entry.isIntersecting)
          changed = true
        })

        if (changed) {
          const isAnyVisible = Array.from(visibilityMap.values()).some(Boolean)
          setIsVisible(!isAnyVisible)
        }
      },
      { threshold: 0, rootMargin: '50px' }
    )

    triggers.forEach((t) => {
      visibilityMap.set(t, false)
      observer.observe(t)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-paper-edge bg-paper p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
    >
      <ApplyButton {...props} isSticky className="w-full shadow-sm" />
    </div>
  )
}
