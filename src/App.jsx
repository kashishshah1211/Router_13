import RouterDemo from './RouterDemo'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
            React Router Tutorial
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Router Types
          </h1>

          <p className="mt-3 max-w-2xl text-indigo-100">
            Learn how HashRouter, MemoryRouter, and StaticRouter
            handle navigation in different environments.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6">
        <RouterDemo />

        <section className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-bold text-gray-900">
            StaticRouter Demonstration
          </h2>

          <p className="mt-2 leading-7 text-gray-600">
            StaticRouter is demonstrated separately using server-side
            rendering. It renders the page for a supplied URL instead
            of providing interactive browser navigation.
          </p>

          <div className="mt-4 rounded-lg bg-pink-50 p-4">
            <p className="font-semibold text-pink-800">
              Example server location: /about
            </p>

            <p className="mt-1 text-sm leading-6 text-pink-700">
              When the server renders this URL, the About component
              is selected. See the separate server demo below.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white px-4 py-5 text-center text-sm text-gray-500">
        React Router Types · Learning Project
      </footer>
    </div>
  )
}
