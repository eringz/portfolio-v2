import AndroidSimulator from '../blocks/HomeBlocks/AndroidSimulator'
import Terminal from '@/features/terminal/Terminal'

import GithubActivity from '@/features/github/components/GithubActivity';



const Home = () => {

    return (
        <div className="flex flex-col justify-center item-center lg:flex-row gap-y-8 p-6 lg:w-full h-full overflow-x-hidden">
            <div className="flex flex-col gap-y-8 lg:w-2/3 justify-between items-center">
                <Terminal />
                {/* <GithubActivity /> */}
                <GithubActivity />
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <AndroidSimulator />
            </div>
        </div>
    )
}
export default Home