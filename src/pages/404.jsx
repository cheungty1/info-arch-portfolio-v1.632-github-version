import ButtonLink from '@/components/common/ButtonLink';
import { Container} from 'react-bootstrap';
import { FiHome } from 'react-icons/fi'

const NotFoundPage = () => {
  return (
    <div className="notFoundWrapper">
      <Container className="text-left">  
      <div className="notFound">
        <h2>404 -</h2>
        <h2>This page does not exist!</h2>
        <ButtonLink path="/">
          <FiHome/>
         </ButtonLink>
         </div>  
      </Container>
    </div>
  )
}

export default NotFoundPage
