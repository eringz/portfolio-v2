import GithubActivity from './components/GithubActivity';


const Github = () => {
    return (
        <div className="p-6 w-full rounded-2xl shadow-2xl">
            <div className="flex justify-between">
                <h2>Github Activity</h2>
                <p className="text-xs">
                    <span>600</span>
                    <span className=""> contributions in the last year</span>
                </p>
            </div>
            {/* <p>
                <span>600</span>
                <span> contributions in the last year</span>
            </p> */}

            <div>
                <div>
                    <GithubActivity
                    />
                    
                </div>
            </div>
        </div>
    )
};

export default Github;