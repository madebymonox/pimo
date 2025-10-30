/** @format */
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./../../../App.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: string;
    error: string;
  }>({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ loading: false, success: "", error: "" });
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({
        loading: false,
        success: "",
        error: "All fields are required.",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({
        loading: false,
        success: "",
        error: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({ loading: true, success: "", error: "" });

    // ✅ Cast formData to Record<string, unknown> for EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData as unknown as Record<string, unknown>,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus({
          loading: false,
          success: "Message sent successfully!",
          error: "",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus({
          loading: false,
          success: "",
          error: "Failed to send message. Try again later.",
        });
      });
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t-2 border-teal-500 w-12 mb-4"></div>
        <h2 className="text-3xl text-gray-900 mb-6 font-soraBold">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8 font-axiformaBook">
          Have questions or want to connect? Fill out the form below and we’ll
          get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter a subject"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Type your message..."
            ></textarea>
          </div>

          {status.error && (
            <p className="text-red-600 text-sm font-medium">{status.error}</p>
          )}
          {status.success && (
            <p className="text-green-600 text-sm font-medium">
              {status.success}
            </p>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full md:w-auto bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-soraBold disabled:opacity-60"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
