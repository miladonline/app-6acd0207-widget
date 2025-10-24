interface ToolOutput { structuredContent?: any; }
declare global { interface Window { openai?: { toolOutput?: ToolOutput; }; } }

function App() {
  const data = window.openai?.toolOutput?.structuredContent;
  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-pulse text-6xl mb-4">👋</div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">👋</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Hello World!</h1>
          <p className="text-gray-600 mb-6">Welcome to your React widget</p>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            🚀 Built with React + TypeScript + Vite + Tailwind
          </div>
          {data && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left">
              <p className="text-xs text-gray-500 mb-2 font-semibold">Data from window.openai:</p>
              <pre className="text-xs text-gray-700 overflow-auto max-h-40">{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;