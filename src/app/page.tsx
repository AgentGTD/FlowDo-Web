import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Master Your Workflow with FlowDo
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The intuitive personal productivity app built on GTD principles.
          </p>
          <Link href="/signup" className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">How FlowDo Works (GTD in Action)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Feature Card 1: Inbox */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-5xl mb-4 text-blue-500">📥</div> {/* Inbox Icon */}
              <h3 className="text-2xl font-semibold mb-2">Capture Everything</h3>
              <p className="text-gray-600">Quickly jot down ideas, tasks, and commitments as they arise.</p>
            </div>

            {/* Feature Card 2: Organize */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-5xl mb-4 text-green-500">🗂️</div> {/* Organize Icon */}
              <h3 className="text-2xl font-semibold mb-2">Clarify and Structure</h3>
              <p className="text-gray-600">Process your inbox, define next actions, and organize projects.</p>
            </div>

            {/* Feature Card 3: Next Actions */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-5xl mb-4 text-yellow-500">▶️</div> {/* Next Actions Icon */}
              <h3 className="text-2xl font-semibold mb-2">Focus on What's Next</h3>
              <p className="text-gray-600">See your actionable tasks clearly, categorized by context.</p>
            </div>

            {/* Feature Card 4: Projects */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-5xl mb-4 text-red-500">🎯</div> {/* Projects Icon */}
              <h3 className="text-2xl font-semibold mb-2">Break Down Big Goals</h3>
              <p className="text-gray-600">Manage complex projects by breaking them into manageable steps.</p>
            </div>

            {/* Feature Card 5: Review */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-5xl mb-4 text-purple-500">🔄</div> {/* Review Icon */}
              <h3 className="text-2xl font-semibold mb-2">Stay on Track</h3>
              <p className="text-gray-600">Regularly review your system to ensure clarity and control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Productivity?</h2>
          <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}
