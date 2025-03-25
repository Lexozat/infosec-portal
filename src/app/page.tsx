export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6">AI-Driven Information Security Portal</h1>
        
        <p className="text-lg mb-8">
          Streamline your information security compliance and auditing with our AI-powered platform.
          Aligned with ISO 27001, NIST, GDPR, and NIS2 frameworks.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">ISO 27001 Compliance Made Simple</h2>
          <p className="text-gray-600 mb-4">With AI automation and guidance</p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-blue-500">✓</span>
              <span>AI-driven security self-evaluation aligned with ISO 27001</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">✓</span>
              <span>Automated security awareness training modules</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">✓</span>
              <span>Streamlined auditing processes for InfoSec compliance</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">✓</span>
              <span>Software project security evaluation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">✓</span>
              <span>CISO dashboard with real-time risk assessment</span>
            </li>
          </ul>
          
          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium">
            Start Free Trial
          </button>
        </div>
      </div>
    </main>
  );
}
