import { useState } from 'react'

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'cb38ebe2-da19-46f2-9903-64597b4d2cac'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const accessKey = WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('config-error')
      setTimeout(() => setStatus(''), 7000)
      return
    }

    try {
      const topic = formData.subject || 'general'
      const formPayload = new FormData(e.currentTarget)
      formPayload.append('access_key', accessKey)
      formPayload.append('from_name', 'Eric Eichinger Website')
      formPayload.append('subject', `Contact Form: ${topic}`)
      formPayload.set('message', `Topic: ${topic}\n\n${formData.message}`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      })

      const data = await response.json()
      const isSuccess = Boolean(data?.success)

      if (!response.ok || !isSuccess) {
        throw new Error(data?.message || 'Failed to submit form')
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      setErrorMessage(error?.message || 'Message could not be sent.')
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-red-500 font-medium tracking-[0.3em] text-xs mb-4 uppercase">Let&apos;s Connect</p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="divider-red w-24"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
              Whether you want to invite Eric to speak at your church or event, chat about a media opportunity, 
              request a signed book, or just say hello&mdash;he&apos;d love to hear from you.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-neutral-600 text-xs tracking-[0.2em] mb-2">LOCATION</p>
                <p className="text-white text-lg">Bethel Lutheran Church</p>
                <p className="text-neutral-400">Clearwater, Florida</p>
              </div>
              <div>
                <p className="text-neutral-600 text-xs tracking-[0.2em] mb-2">INQUIRIES</p>
                <p className="text-neutral-400">Speaking, Book Signings, Media</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-white/5">
              <p className="text-neutral-600 text-xs tracking-[0.2em] mb-6">FOLLOW</p>
              <div className="flex flex-wrap gap-6">
                <a href="https://www.facebook.com/eric.eichinger.9/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-red-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="http://www.youtube.com/user/AbsoluteSurrenderMov" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-red-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://twitter.com/SpartanEich" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-red-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.instagram.com/spartanfaith152" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-red-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-neutral-600 text-xs tracking-[0.2em] mb-3">NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 focus:border-red-500 transition-colors placeholder-neutral-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-neutral-600 text-xs tracking-[0.2em] mb-3">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 focus:border-red-500 transition-colors placeholder-neutral-700"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-neutral-600 text-xs tracking-[0.2em] mb-3">SUBJECT</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 focus:border-red-500 transition-colors"
                >
                  <option value="" className="bg-[#0a0a0a]">Select a topic</option>
                  <option value="speaking" className="bg-[#0a0a0a]">Speaking Engagement</option>
                  <option value="signed-book" className="bg-[#0a0a0a]">Request Signed Book</option>
                  <option value="media" className="bg-[#0a0a0a]">Media/Interview</option>
                  <option value="general" className="bg-[#0a0a0a]">General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-neutral-600 text-xs tracking-[0.2em] mb-3">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white focus:ring-0 focus:border-red-500 transition-colors resize-none placeholder-neutral-700"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-10 py-4 bg-red-800 hover:bg-red-700 disabled:bg-red-900 text-white text-sm font-bold tracking-wider transition-colors"
                >
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-red-400 text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">Message couldn&apos;t be sent: {errorMessage || 'Please try again in a minute.'}</p>
              )}
              {status === 'config-error' && (
                <p className="text-red-400 text-sm">Contact form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY in your deployment environment.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
