export default function Footer() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#441752] p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-[#B5828C] text-center mb-6">
          Contact Us
        </h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-[#E5989B] font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-[#FFB4A2] rounded-lg focus:ring-2 focus:ring-[#E5989B] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#E5989B] font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-[#FFB4A2] rounded-lg focus:ring-2 focus:ring-[#E5989B] focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#E5989B] font-semibold mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 border border-[#FFB4A2] rounded-lg focus:ring-2 focus:ring-[#E5989B] focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#E5989B] text-white py-3 rounded-lg hover:bg-[#B5828C] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
