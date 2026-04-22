// py-worker.js
importScripts("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js");

let pyodide = null;

async function loadPyodideAndPackages() {
    pyodide = await loadPyodide();
    // Você pode carregar pacotes aqui se precisar (ex: micropip)
    await pyodide.runPythonAsync(`
import sys
import io
    `);
}

let pyodideReadyPromise = loadPyodideAndPackages();

self.onmessage = async (event) => {
    const { id, python, ...context } = event.data;
    
    try {
        await pyodideReadyPromise;
        
        // Redireciona o stdout para capturar prints
        await pyodide.runPythonAsync(`
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
        `);
        
        await pyodide.runPythonAsync(python);
        
        const stdout = pyodide.runPython("sys.stdout.getvalue()");
        const stderr = pyodide.runPython("sys.stderr.getvalue()");
        
        self.postMessage({ stdout, stderr, id });
        
    } catch (error) {
        self.postMessage({ error: error.message, id });
    }
};
