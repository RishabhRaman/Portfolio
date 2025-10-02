import { contactEmail, socials } from '../content'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import IconLink from '../components/ui/IconLink'

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something great together">
      <Card style={{ padding: 24 }}>
        <div style={{ textAlign: 'center' }}>
          <p>Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8, justifyContent: 'center' }}>
            {socials.map((s) => (
              <IconLink key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</IconLink>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  )
}

export default Contact


