export default function App() {
  return (
    <main className="bg-slate-50 w-full h-screen">
      <div>
        <h3>Growing and animated background effect</h3>
        <div className="flex justify-center items-center p-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-700 opacity-75 blur-md group-hover:blur-xl transition duration-1000 animate-tilt" />
            <button className="flex items-center gap-4 bg-zinc-900 px-7 py-4 rounded-md relative">
              <span className="flex items-center gap-8 text-slate-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-600 -rotate-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
                Tailwind example
              </span>
              <span className="h-5 w-[1px] bg-slate-500" />
              <span className="text-indigo-300 group-hover:text-slate-50 transition duration-1000">
                Glowind and animated &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3>Not a glowing effect, just a box shadow</h3>
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow-sm" />
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow-md" />
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow" />
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow-lg" />
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow-xl" />
      </div>
    </main>
  );
}
