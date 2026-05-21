function SearchFilter({
  darkMode,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) {

  return (

    <div
      className={`p-6 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-5 items-center justify-between ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Search */}
      <input
        type="text"
        placeholder="Search employee..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
        className={`w-full lg:w-[400px] p-4 rounded-2xl border outline-none ${
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-slate-100 border-slate-300"
        }`}
      />

      {/* Filter */}
      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(
            e.target.value
          )
        }
        className={`w-full lg:w-[220px] p-4 rounded-2xl border outline-none ${
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-slate-100 border-slate-300"
        }`}
      >

        <option value="All">
          All Status
        </option>

        <option value="Present">
          Present
        </option>

        <option value="Absent">
          Absent
        </option>

      </select>

    </div>

  );
}

export default SearchFilter;