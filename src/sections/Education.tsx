import { education } from '../content'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

export function Education() {
  return (
    <Section id="about" title="Education" subtitle="" className="education-section">
      <div className="grid grid-2 center-last">
        {education.map((e) => (
          <Card key={e.institution}>
            <h3 style={{ marginTop: 0 }}>{e.institution}</h3>
            <p style={{ color: 'var(--color-muted)', margin: '4px 0' }}>{e.degree}</p>
            <p style={{ color: 'var(--color-muted)', margin: '0 0 10px' }}>{e.period}</p>
            {e.details && <p style={{ margin: 0 }}>{e.details}</p>}
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Education


