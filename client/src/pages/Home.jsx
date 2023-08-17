import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddProjectModal';
import '../'
export default function Home() {
  return (
    < >
    <div className='main-home'>
      <div className='heading'> 
        PROJECT-HUB
      </div>
      
      <div className='d-flex gap-3 mb-4 bg-gradient-primary text-yellow'>
      <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
      </div>
    </>
  );
}