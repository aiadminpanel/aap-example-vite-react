import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: '3rem' }}>
      <h1>Vite + React</h1>
      <p>A single-page app like the ones Lovable or Bolt export. Marker: <code>aap-example:vite-react</code></p>
      <button onClick={() => setCount((c) => c + 1)}>clicked {count} times</button>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
