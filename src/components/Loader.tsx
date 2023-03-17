
interface LoadingProps {
    message: string;
}

const Loader: React.FC<LoadingProps> = ({ message }) => {
    return (
        <main className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black mb-5">
            <div className="custom-loader ">

            </div>

        </main>
    )
}

export default Loader