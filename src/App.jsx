export default function App() {
  return (
    <main className="bg-slate-50 w-full h-screen"> 
      <div>
        <h3>Growing and animated background effect</h3>
      </div>
      <div>
        <h3>Not a glowing effect, just a box shadow</h3>
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow-sm"></div>
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow-md"></div>
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow"></div>
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow-lg"></div>
        <div className="bg-white mt-5 w-96 h-16 rounded-md shadow-xl"></div>
      </div>
    </main>
  );
}
