const Terminal = () => {
  return (
    <div className="bg-black/25 rounded shadow w-full sm:w-3/4 lg:w-7/12 h-72">
      <header className="border-b-gray-400/25 border-b-[1px] flex px-4 py-2 items-center justify-between gap-6 overflow-hidden">
        <section className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </section>
        <p className="text-sm">root@macbook:~/projects</p>
        <span className="w-9"></span>
      </header>
      <section className="p-4 h-auto text-green-200 font-mono text-xs">
        <p className="mb-1">Last login: Sat Mar 16 10:24:03 on ttys002</p>
        <p className="mb-1">Hack:projects user$ git status</p>
        <p className="mb-1">Already up-to-date</p>
        <p className="mb-1">
          Hack:projects user$ npm install hackathon@latest{" "}
          <span className="animate-pulse">▁</span>
        </p>
      </section>
    </div>
  );
};

export default Terminal;
