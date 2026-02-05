import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome to Tanstack Start!</h3>
      <p>This is your new Tanstack Start application.</p>
      <p>
        Get started by editing the files in the <code>app/routes</code> directory.
      </p>
    </div>
  )
}