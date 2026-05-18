export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Open Source Maintainers
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Turn Your README Into a{' '}
          <span className="text-[#58a6ff]">Star Machine</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Track README view-to-star conversion rates, A/B test different versions, and get AI-powered optimization suggestions — all connected to your GitHub repos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Tracking — $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[['2.4x', 'Avg Star Lift'], ['A/B', 'README Testing'], ['Live', 'Webhook Sync']].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-bold text-white">$9</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to grow your open source project</p>
          <ul className="space-y-3 mb-8">
            {[
              'Connect unlimited GitHub repos',
              'Real-time view-to-star analytics',
              'A/B test README versions',
              'Webhook-powered change tracking',
              'AI optimization suggestions',
              'Weekly performance reports',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg text-center transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] text-center mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does README view tracking work?',
              a: 'We use GitHub webhooks and the GitHub Traffic API to capture README views and correlate them with star/fork events over time, giving you a true conversion funnel.',
            },
            {
              q: 'What does A/B testing look like for a README?',
              a: 'You submit two README variants through our dashboard. We track which version is live when new stars arrive and calculate statistical significance to declare a winner.',
            },
            {
              q: 'Do I need to change anything in my repository?',
              a: 'No code changes needed. Just connect your GitHub account via OAuth, select your repos, and we handle the rest through the GitHub API and webhooks.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} README Performance Tracker. All rights reserved.
      </footer>
    </main>
  )
}
