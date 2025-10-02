import { skills } from '../content'
import Section from '../components/ui/Section'
import Badge from '../components/ui/Badge'

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and concepts I Know">
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {skills.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </Section>
  )
}

export default Skills


