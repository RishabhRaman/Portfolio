import { projects } from '../content'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

export function Projects() {
  const items = projects.filter((p) => p && p.title && p.description && p.href)

  return (
    <Section id="projects" title="Projects" subtitle="Selected work">
      <div className="grid grid-auto grid-equal">
        {items.map((p) => (
          <Card key={p.title} className="project-card">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="project-actions">
              <Button href={p.href} target="_blank" rel="noreferrer">View</Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Projects


