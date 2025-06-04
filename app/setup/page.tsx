import React from 'react';

export default function SetupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 mx-auto">
        <h1 className="text-3xl font-bold text-[#012169] mb-6">Set Up Your Directory</h1>
        <form action="https://formspree.io/f/mjkrkwkj" method="POST" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name*</label>
            <input name="Organization Name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type*</label>
            <input name="Organization Type" type="text" required placeholder="e.g. Fraternity, Club, Nonprofit, etc." className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="md:flex md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
              <input name="Your Name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email*</label>
              <input name="Your Email" type="email" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Role*</label>
            <input name="Your Role" type="text" required placeholder="e.g. President, Alumni Chair, Admin" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">What features do you want?</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="Features" value="Directory" className="rounded" /> Directory
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="Features" value="Events" className="rounded" /> Events
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="Features" value="Payments" className="rounded" /> Payments
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="Features" value="Newsletters" className="rounded" /> Newsletters
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="Features" value="Custom" className="rounded" /> Custom
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Anything else?</label>
            <textarea name="Anything else" rows={3} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Let us know any special requests, integrations, or questions!" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-indigo-600 text-white font-semibold rounded-full px-8 py-3 shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 