import AndroidSimulator from '../blocks/HomeBlocks/AndroidSimulator'
import Terminal from '@/features/terminal/Terminal'

import GithubActivity from '@/features/github/components/GithubActivity';



const Home = () => {

    return (
        <div className="flex h-full w-full">
            <div className="flex flex-col gap-16 p-24 w-1/2 justify-between items-center">
                <Terminal />
                {/* <GithubActivity /> */}
                <GithubActivity />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <AndroidSimulator />
            </div>
        </div>
    )
}
export default Home