import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="p-2">
      <h3>About</h3>
      <p>This is the about page built with Tanstack Start.</p>
      <p>
        Tanstack Start is a full-stack React framework powered by TanStack Router.
      </p>
    </div>
  )
}