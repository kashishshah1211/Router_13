import { Link, NavLink } from 'react-router-dom'

export function DemoNavbar() {
  const linkStyle = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
    }`

  return (
    <nav className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
      <NavLink to="/" end className={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/about" className={linkStyle}>
        About
      </NavLink>

      <NavLink to="/contact" className={linkStyle}>
        Contact
      </NavLink>
    </nav>
  )
}

export function Home() {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-indigo-700">
        Home Page
      </h2>

      <p className="mt-3 leading-7 text-gray-600">
        Welcome! This page demonstrates client-side navigation
        using the selected router.
      </p>

      <Link
        to="/about"
        className="mt-5 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Explore About
      </Link>
    </section>
  )
}

export function About() {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-green-700">
        About Page
      </h2>

      <p className="mt-3 leading-7 text-gray-600">
        HashRouter stores the route in the URL hash.
        MemoryRouter stores navigation entries in memory.
      </p>
    </section>
  )
}

export function Contact() {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-purple-700">
        Contact Page
      </h2>

      <p className="mt-3 leading-7 text-gray-600">
        You have successfully navigated to the Contact page.
      </p>
    </section>
  )
}

export function NotFound() {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-red-600">
        404 - Page Not Found
      </h2>

      <Link to="/" className="mt-3 inline-block text-indigo-600 underline">
        Return Home
      </Link>
    </section>
  )
}