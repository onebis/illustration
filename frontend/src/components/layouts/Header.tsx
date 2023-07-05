export default function Header() {
    return (
        <>
            <header className="bg-gray-900 text-white">
                <nav className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center">
                        <a className="text-xl font-bold" href="#">Logo</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a className="hover:text-gray-300" href="#">マイページ</a>
                        <a className="hover:text-gray-300" href="#">ログイン</a>
                        {/*<a className="hover:text-gray-300" href="#">Services</a>*/}
                        {/*<a className="hover:text-gray-300" href="#">Contact</a>*/}
                    </div>
                </nav>
            </header>
        </>
    )
}