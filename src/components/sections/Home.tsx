import AndroidSimulator from '../blocks/HomeBlocks/AndroidSimulator'
import Terminal from '../blocks/HomeBlocks/Terminal';

const Home = () => {
    return (
        <div className="flex justify-between px-24 h-full w-full">
            <div className="flex justify-center items-center  ">
                <Terminal />
            </div>
            <div className="m-8 h-full w-124 flex justify-center items-center ">
                <AndroidSimulator />
            </div>
        </div>
    )
}

export default Home