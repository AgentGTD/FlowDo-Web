export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Delete Your FlowDo Account</h1>
          <p className="text-lg text-gray-600">
            We&apos;re sorry to see you go. This page explains how to delete your account and what happens to your data.
          </p>
        </div>

        {/* Warning Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">Important: Account Deletion is Permanent</h3>
              <p className="mt-2 text-red-700">
                Once you delete your account, all your data will be permanently removed and cannot be recovered. 
                This action cannot be undone.
              </p>
            </div>
          </div>
        </div>

        {/* Deletion Methods */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How to Delete Your Account</h2>
          
          <div className="space-y-6">
            {/* Method 1: In-App Deletion */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Account Through the App (Recommended)</h3>
                  <p className="text-gray-600 mb-4">
                    The easiest way to delete your account is directly through the FlowDo mobile app.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Steps:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Open the FlowDo app on your device</li>
                      <li>Go to <strong>Settings</strong> → <strong>Account</strong></li>
                      <li>Scroll down and tap <strong>Delete Account</strong></li>
                      <li>Enter your password to confirm</li>
                      <li>Read the deletion confirmation and tap <strong>Delete My Account</strong></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 2: Email Request */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">2</span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Request Deletion via Email</h3>
                  <p className="text-gray-600 mb-4">
                    If you prefer to request account deletion via email, you can contact our support team.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> <a href="mailto:support@flowdo.com" className="text-blue-600 hover:text-blue-800">support@flowdo.com</a>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Subject Line:</strong> &ldquo;Account Deletion Request - [Your Email]&rdquo;
                    </p>
                    <p className="text-gray-700">
                      <strong>Include in your email:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 text-gray-700 mt-1">
                      <li>Your registered email address</li>
                      <li>Reason for deletion (optional but helpful)</li>
                      <li>Confirmation that you understand the deletion is permanent</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 3: Support Form */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">3</span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Support Team</h3>
                  <p className="text-gray-600 mb-4">
                    Need help with the deletion process? Our support team is here to assist you.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-2">
                      <strong>Support Email:</strong> <a href="mailto:support@flowdo.com" className="text-blue-600 hover:text-blue-800">support@flowdo.com</a>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Response Time:</strong> Within 24-48 hours
                    </p>
                    <p className="text-gray-700">
                      <strong>Available:</strong> Monday to Friday, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Happens to Your Data */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Happens to Your Data</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Data Deletion Timeline */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">Data Deletion Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-blue-800"><strong>Immediately:</strong> Account access revoked</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-blue-800"><strong>Within 24 hours:</strong> Personal data anonymized</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-blue-800"><strong>Within 30 days:</strong> Complete data deletion</span>
                </div>
              </div>
            </div>

            {/* Data Retention Policy */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-900 mb-4">Data Retention Policy</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-800"><strong>Legal Requirements:</strong> 7 years (if applicable)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-800"><strong>Security Logs:</strong> 90 days</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-800"><strong>Analytics Data:</strong> 2 years (anonymized)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Data Breakdown */}
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-3">Data Deletion Breakdown:</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Completely Deleted:</h5>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Personal profile information</li>
                    <li>Tasks, projects, and notes</li>
                    <li>Account settings and preferences</li>
                    <li>AI interaction history</li>
                    <li>Authentication credentials</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Retained (Anonymized):</h5>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Usage analytics (no personal identifiers)</li>
                    <li>App performance metrics</li>
                    <li>Feature usage statistics</li>
                    <li>Error logs and crash reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before You Delete */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Before You Delete Your Account</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-yellow-800 mb-4">Important Considerations</h3>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>All your productivity data will be permanently lost</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>You&apos;ll lose access to all your organized tasks and projects</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>Any shared projects or collaborations will be affected</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>This action cannot be undone or reversed</span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-3">Alternative Options:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Temporarily Disable Account</h5>
                <p className="text-gray-600 text-sm">
                  Instead of deleting, you can temporarily disable your account and reactivate it later.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Export Your Data</h5>
                <p className="text-gray-600 text-sm">
                  Download a copy of your data before deletion for future reference.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">How long does account deletion take?</h3>
              <p className="text-gray-600">
                Account deletion is processed within 24-48 hours. Complete data removal occurs within 30 days.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">Can I recover my account after deletion?</h3>
              <p className="text-gray-600">
                No, account deletion is permanent and cannot be reversed. All data is permanently removed.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">What happens to my subscription?</h3>
              <p className="text-gray-600">
                Your subscription will be cancelled immediately upon account deletion. No refunds are provided for unused time.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">Can I delete specific data without deleting my account?</h3>
              <p className="text-gray-600">
                Yes, you can delete individual tasks, projects, or notes within the app without deleting your entire account.
              </p>
            </div>
            
            <div className="pb-4">
              <h3 className="font-medium text-gray-900 mb-2">How do I contact support for help?</h3>
              <p className="text-gray-600">
                Contact our support team at <a href="mailto:support@flowdo.com" className="text-blue-600 hover:text-blue-800">support@flowdo.com</a> for assistance with account deletion or any other questions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Need Help?</h2>
          <p className="text-blue-800 mb-6">
            Our support team is here to help you with the account deletion process or answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@flowdo.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </a>
            <a
              href="/privacy-policy"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>
            Last updated: August 18, 2025 | 
            <a href="/terms-of-service" className="text-blue-600 hover:text-blue-800 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
}
