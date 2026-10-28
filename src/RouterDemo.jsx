import { useState } from 'react'
import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
} from 'react-router-dom'

import {
  DemoNavbar,
  Home,
  About,
  Contact,
  NotFound,
} from './DemoPages'

function RouterContent({ routerType }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
      <DemoNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div className="mt-5 rounded-lg bg-gray-50 p-4">
        <h3 className="font-semibold text-gray-800">
          Current router: {routerType}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {routerType === 'HashRouter'
            ? 'Look at the browser address bar. The page path appears after the # symbol.'
            : 'The browser address bar does not change when you navigate. The route is stored in memory.'}
        </p>
      </div>
    </div>
  )
}

export default function RouterDemo() {
  const [routerType, setRouterType] = useState('HashRouter')

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Interactive Router Demo
        </h2>

        <p className="mt-2 text-gray-500">
          Select a router and navigate between Home, About, and Contact.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setRouterType('HashRouter')}
          className={`rounded-lg px-5 py-3 font-semibold transition ${
            routerType === 'HashRouter'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50'
          }`}
        >
          HashRouter
        </button>

        <button
          type="button"
          onClick={() => setRouterType('MemoryRouter')}
          className={`rounded-lg px-5 py-3 font-semibold transition ${
            routerType === 'MemoryRouter'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50'
          }`}
        >
          MemoryRouter
        </button>
      </div>

      {routerType === 'HashRouter' ? (
        <HashRouter>
          <RouterContent routerType="HashRouter" />
        </HashRouter>
      ) : (
        <MemoryRouter>
          <RouterContent routerType="MemoryRouter" />
        </MemoryRouter>
      )}
    </section>
  )
}