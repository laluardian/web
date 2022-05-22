import Anchor from '../components/anchor'
import Container from '../components/container'

export default function Contact() {
  const email = 'laluardian@outlook.com'

  return (
    <Container
      additionalMetadata={{
        title: 'Contact - Lalu Ahmad Ardiansyah',
        description: 'Contact me for any questions or inquiries.',
      }}
    >
      <h1>Contact</h1>
      <p>
        I can be reached anytime via email at <Anchor href={`mailto:${email}`}>{email}</Anchor>.
      </p>
    </Container>
  )
}
