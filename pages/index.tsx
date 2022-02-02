import type { NextPage } from 'next'
import { Basket } from '../components/basket/basket'
import { PageWrapper } from '../components/page-wrapper/page-wrapper'

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Basket />
    </PageWrapper>
  )
}

export default Home
