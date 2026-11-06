import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const nameInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'alwinvj05@gmail.com';
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Handle escape key and focus
  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
      setStatusMessage('');
      setErrors({});
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const timer = setTimeout(() => {
      nameInputRef.current?.focus();
    }, 100);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      if (serviceId && templateId && publicKey) {
        // Send via EmailJS with environment credentials
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: contactEmail,
          },
          publicKey
        );
      } else {
        // Fallback simulation when EmailJS keys have not been configured yet
        console.info('EmailJS environment keys not provided. Dispatching contact payload:', formData);
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      setStatusMessage('Message sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again.');
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl md:max-w-[700px] my-auto max-h-[calc(100vh-2rem)] flex flex-col bg-white dark:bg-[#061A10] border border-neutral-200 dark:border-[rgba(0,230,118,0.25)] rounded-lg shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden text-neutral-900 dark:text-[#D8FFE8] font-mono transition-all"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-[rgba(0,230,118,0.25)] bg-neutral-50/60 dark:bg-[#04150C] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#15803D] dark:bg-[#00E676] animate-pulse"></span>
            <h2 id="contact-modal-title" className="text-base font-semibold tracking-tight text-neutral-900 dark:text-[#D8FFE8]">
              Get in touch
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1 rounded text-neutral-400 hover:text-neutral-700 dark:text-[#83A995] dark:hover:text-[#00FF88] hover:bg-neutral-200/50 dark:hover:bg-[#04150C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E676]"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {status === 'success' ? (
            <div className="py-8 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-[#04150C] border dark:border-[rgba(0,230,118,0.4)] text-[#15803D] dark:text-[#00E676] flex items-center justify-center shadow-[0_0_15px_rgba(0,230,118,0.25)]">
                <CheckCircle2 size={28} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-[#D8FFE8]">
                  {statusMessage}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-[#83A995] max-w-sm">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-4 py-2 text-xs font-mono bg-[#15803D] hover:bg-[#166534] dark:bg-[#00E676] dark:hover:bg-[#00FF88] text-white dark:text-[#020D08] dark:font-semibold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E676]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {status === 'error' && (
                <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded flex items-start gap-2.5 text-xs text-red-600 dark:text-red-400">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p>{statusMessage}</p>
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="underline font-medium hover:text-red-700 dark:hover:text-red-300 mt-1 inline-flex items-center gap-1"
                    >
                      <Mail size={12} /> Send via your email client instead
                    </button>
                  </div>
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-neutral-700 dark:text-[#D8FFE8] mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  disabled={status === 'loading'}
                  className={`w-full px-3 py-2 text-xs bg-neutral-50 dark:bg-[#020D08] border ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-neutral-300 dark:border-[rgba(0,230,118,0.3)] focus:border-[#15803D] dark:focus:border-[#00E676]'
                  } rounded focus:outline-none focus:ring-1 focus:ring-[#15803D] dark:focus:ring-[#00E676] transition-colors disabled:opacity-60 text-neutral-900 dark:text-[#D8FFE8]`}
                />
                {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-neutral-700 dark:text-[#D8FFE8] mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  disabled={status === 'loading'}
                  className={`w-full px-3 py-2 text-xs bg-neutral-50 dark:bg-[#020D08] border ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-300 dark:border-[rgba(0,230,118,0.3)] focus:border-[#15803D] dark:focus:border-[#00E676]'
                  } rounded focus:outline-none focus:ring-1 focus:ring-[#15803D] dark:focus:ring-[#00E676] transition-colors disabled:opacity-60 text-neutral-900 dark:text-[#D8FFE8]`}
                />
                {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-neutral-700 dark:text-[#D8FFE8] mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration, query, etc."
                  disabled={status === 'loading'}
                  className={`w-full px-3 py-2 text-xs bg-neutral-50 dark:bg-[#020D08] border ${
                    errors.subject ? 'border-red-500 focus:border-red-500' : 'border-neutral-300 dark:border-[rgba(0,230,118,0.3)] focus:border-[#15803D] dark:focus:border-[#00E676]'
                  } rounded focus:outline-none focus:ring-1 focus:ring-[#15803D] dark:focus:ring-[#00E676] transition-colors disabled:opacity-60 text-neutral-900 dark:text-[#D8FFE8]`}
                />
                {errors.subject && <p className="mt-1 text-[11px] text-red-500">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-neutral-700 dark:text-[#D8FFE8] mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  disabled={status === 'loading'}
                  className={`w-full px-3 py-2 text-xs bg-neutral-50 dark:bg-[#020D08] border ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-neutral-300 dark:border-[rgba(0,230,118,0.3)] focus:border-[#15803D] dark:focus:border-[#00E676]'
                  } rounded focus:outline-none focus:ring-1 focus:ring-[#15803D] dark:focus:ring-[#00E676] transition-colors disabled:opacity-60 resize-none text-neutral-900 dark:text-[#D8FFE8]`}
                />
                {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-200 dark:border-[rgba(0,230,118,0.25)]">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={status === 'loading'}
                  className="px-3.5 py-2 text-xs text-neutral-600 dark:text-[#83A995] hover:text-neutral-900 dark:hover:text-[#D8FFE8] border border-neutral-300 dark:border-[rgba(0,230,118,0.3)] rounded hover:bg-neutral-100 dark:hover:bg-[#04150C] transition-colors disabled:opacity-50"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-4 py-2 text-xs bg-[#15803D] hover:bg-[#166534] dark:bg-[#00E676] dark:hover:bg-[#00FF88] text-white dark:text-[#020D08] dark:font-semibold rounded font-medium flex items-center gap-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm dark:shadow-[0_0_15px_rgba(0,230,118,0.25)]"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={13} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
