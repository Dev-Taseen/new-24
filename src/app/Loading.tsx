


const LoadingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
            <div className="text-center">
                {/* Spinner */}
                <div className="w-12 h-12 mx-auto border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>

                {/* Loading Text */}
                <p className="mt-5 text-lg font-semibold text-red-600">
                    Loading...
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    Please wait a moment
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;

