import type {
  GetStaticProps,
  NextPage,
} from 'next';
import { Navigation } from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps =
  () => {};
