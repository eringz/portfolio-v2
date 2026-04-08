import AndroidSimulator from '../blocks/HomeBlocks/AndroidSimulator'
import Terminal from '../blocks/HomeBlocks/Terminal';
import GithubActivity from '../blocks/HomeBlocks/GithubActivity';

const Home = () => {

    return (
        <div className="flex h-full w-full">
            <div className="flex flex-col gap-4 p-24 w-1/2 items-center">
                <Terminal />
                <div className="p-4 w-full">

                    <GithubActivity />
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <AndroidSimulator />
            </div>
            
            
        </div>
    )
}

export default Home