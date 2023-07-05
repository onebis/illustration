const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-6">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                        <a className="text-xl font-bold" href="#">Logo</a>
                    </div>
                    <div className="w-full sm:w-auto text-center">
                        {/*<a className="mr-4 hover:text-gray-300" href="#">Home</a>*/}
                        {/*<a className="mr-4 hover:text-gray-300" href="#">About</a>*/}
                    </div>
                    <div className="w-full sm:w-auto text-right">
                        &copy; 2023 Company Name. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer