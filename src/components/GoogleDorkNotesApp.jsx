// (Full component code - this is the graphical, Tailwind-styled React component with preloaded dorks.)


<div className="bg-[#080809] border border-white/6 rounded-2xl p-4 mb-6">
<div className="flex gap-3 items-center">
<input
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Search dorks or titles..."
className="flex-1 bg-transparent outline-none placeholder:text-gray-500 text-sm"
/>
<button onClick={exportJSON} className="text-sm px-3 py-2 rounded-full border border-white/6">Export</button>
<label className="text-sm px-3 py-2 rounded-full border border-white/6 cursor-pointer">
Import
<input onChange={importJSON} type="file" accept="application/json" className="hidden" />
</label>
</div>
</div>


<main>
<div className="grid gap-3">
{(filtered.length ? filtered : dorks).map((d) => (
<div key={d.id} className="bg-[#060607] border border-white/4 rounded-xl p-4 flex justify-between items-start">
<div className="max-w-4xl">
<div className="text-sm text-gray-400">{d.title}</div>
<pre className="mt-1 text-sm bg-transparent whitespace-pre-wrap break-words font-mono">{d.dork}</pre>
</div>
<div className="flex flex-col items-end gap-2 ml-4">
<button onClick={() => copyToClipboard(d.dork)} className="text-xs px-3 py-1 rounded-md border border-white/6">Copy</button>
<button onClick={() => removeDork(d.id)} className="text-xs px-3 py-1 rounded-md border border-red-500 text-red-400">Delete</button>
</div>
</div>
))}


{!dorks.length && (
<div className="p-6 text-center text-gray-400">No dorks yet — click Add to create one or import a JSON file.</div>
)}
</div>
</main>


{showAdd && (
<div className="fixed inset-0 flex items-center justify-center z-50">
<div className="absolute inset-0 bg-black/60" onClick={() => setShowAdd(false)} />
<div className="relative bg-[#0a0a0b] border border-white/6 rounded-2xl p-6 w-full max-w-lg">
<h2 className="text-xl font-semibold mb-3">Add new dork</h2>
<label className="block text-sm text-gray-300">Title (optional)</label>
<input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full mb-3 bg-transparent outline-none border-b border-white/6 py-2" />
<label className="block text-sm text-gray-300">Dork</label>
<textarea value={newDork} onChange={(e) => setNewDork(e.target.value)} rows={4} className="w-full mb-4 bg-transparent outline-none border border-white/6 rounded-md p-2 font-mono" />
<div className="flex justify-end gap-3">
<button onClick={() => setShowAdd(false)} className="px-4 py-2 rounded-lg border border-white/6">Cancel</button>
<button onClick={addDork} className="px-4 py-2 rounded-lg bg-white/6">Add dork</button>
</div>
</div>
</div>
)}


<footer className="mt-8 text-xs text-gray-500">Tip: keep your repo as <code>google-dorks.json</code> for easy import/export and versioning on GitHub.</footer>
</div>
</div>
);
}
