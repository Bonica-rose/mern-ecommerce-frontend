const Topbar = () => {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>

        <div className="flex items-center gap-4">
            <span>Admin</span>

            <button className="px-3 py-2 rounded bg-red-500 text-white">
            Logout
            </button>
        </div>
        </header>
    );
}

export default Topbar;
