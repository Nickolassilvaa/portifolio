import { Header } from './components/header'
import { MainContainer } from './components/mainContainer'
import { TechIcon } from './components/techIcon'
import { TechList, ITechList } from './services/techList'
import './styles/main.css'

function App() {

  return (<>
    <div className='w-full bg-slate-300 h-auto'>
      <div className='max-w-5xl mx-auto px-8'>
        <Header />
        <MainContainer />
      </div>

      <div className='
          flex
          items-center
          justify-start

          w-full 
          h-[15vh] 

          bg-zinc-900
          text-white
          
          px-4
          gap-4
          
          scrollbar-thin
          scrollbar-thumb-zinc-300 
          scrollbar-track-zinc-900
          scrollbar-thumb-rounded-full

          sm:h-[20vh]
          md:justify-around
        '>

        {TechList.map((tech: ITechList) => {
          return (<TechIcon key={tech.id} link={tech.link} _alt={tech._alt} />)
        })}
      </div>
    </div>
  </>
  )
}

export default App

