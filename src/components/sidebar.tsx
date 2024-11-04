export default function Sidebar() {
  return (
    <aside className="w-[295px]  bg-gray-100 px-6 py-4 rounded-lg">
      <input
        type="text"
        placeholder="Qidiruv"
        className="mb-4 w-[262px] h[48px] p-3 rounded-xl border bg-gray-200"
      />
      <nav>
        <ul className="space-y-2">
          {[
            "Barchasi",
            "Hashamatli honalar",
            "Oddiy honalar",
            "Uchrashuv zallari",
            "Tadbir zallari",
          ].map((item, index) => (
            <li key={index} className="text-lg">
              <button 
                className={`w-[263px] h-[48px] text-left px-3 rounded-xl hover:bg-gray-200 ${
                  item === "Barchasi" ? "bg-primary text-white hover:bg-orange-400" : ""
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}