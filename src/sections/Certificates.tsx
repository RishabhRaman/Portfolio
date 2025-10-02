import { certificates } from '../content'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

export function Certificates() {
  return (
    <Section id="certificates" title="Certificates and Achievements" subtitle="Recognitions and coursework">
      <div className="grid grid-2">
        {certificates.map((c) => (
          <Card key={c.title}>
            <h3 style={{ marginTop: 0 }}>{c.title}</h3>
            <p style={{ color: 'var(--color-muted)' }}>{c.issuer} · {c.year}</p>
            {c.link && (
              <Button href={c.link} target="_blank" rel="noreferrer">View</Button>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Certificates


