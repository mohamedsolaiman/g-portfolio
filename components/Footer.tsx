export default function Footer() {
  return (
    <footer className="h-20 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 mt-12 bg-[#0a0a0a]">
      <span className="text-[10px] text-zinc-600 uppercase tracking-widest mb-4 md:mb-0">© 2026 Mohamed Solaiman</span>
      <div className="flex gap-4 sm:gap-8">
        <span className="text-[9px] text-zinc-700 uppercase tracking-widest">Designed for Precision</span>
        <span className="text-[9px] text-zinc-700 uppercase tracking-widest">Built for Performance</span>
      </div>
    </footer>
  );
}
