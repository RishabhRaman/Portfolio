export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, textAlign: 'center', color: 'var(--color-muted)' }}>
        <span>© {year} Rishabh Raman Jha. All rights reserved.</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  )
}

export default Footer


