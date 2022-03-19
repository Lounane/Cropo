import tw from 'twin.macro'
import { steps } from '@/data'
import { Card_Container, Section } from '@layouts'
import { Title, Card } from '@atoms'

const Steps = () => (
  <Section>
    <Title>Free Image Resizer</Title>
    <Card_Container>
      {steps.map(step => (
        <Card key={step.id}>
          <span>0{step.id}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </Card>
      ))}
    </Card_Container>
  </Section>
)
export default Steps
