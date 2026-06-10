function MoodButton({ label, icon, onSelect, contanct,}) {
  return (
    <button
      onClick={onSelect}
      className="  group relative px-6 py-3 rounded-xl bg-black border border-emerald-400/40 text-emerald-300 shadow-[0_6px_20px_rgba(16,185,129,0.35)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-1  active:scale-95
      "
    >

      <span className=" absolute inset-0 rounded-xl bg-emerald-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />


      <span className="flex items-center gap-2 text-lg font-semibold">

        <span className="  text-2xl animate-[float_2.5s_ease-in-out_infinite] drop-shadow-[0_0_10px_rgba(16,185,129,0.9)]">
          {icon}
        </span>

        {label}
        {contanct}
        
      </span>
    </button>
  );
}

export default MoodButton;
