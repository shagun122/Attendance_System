function ThemeCustomizer({
  theme,
  setTheme,
  darkMode,
}) {

  const themes = [

    {
      name: "Blue",
      value: "blue",
      color: "bg-blue-500",
    },

    {
      name: "Green",
      value: "green",
      color: "bg-green-500",
    },

    {
      name: "Purple",
      value: "purple",
      color: "bg-purple-500",
    },

    {
      name: "Orange",
      value: "orange",
      color: "bg-orange-500",
    },
  ];

  return (

    <div
      className={`mt-8 p-8 rounded-3xl shadow-2xl ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Theme Customizer
        </h1>

        <p className="mt-2 opacity-70">
          Personalize dashboard appearance
        </p>

      </div>

      {/* Themes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {themes.map((item) => (

          <button
            key={item.value}
            onClick={() =>
              setTheme(item.value)
            }
            className={`p-6 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
              theme === item.value
                ? "border-white scale-105"
                : "border-transparent"
            } ${
              darkMode
                ? "bg-slate-800"
                : "bg-slate-100"
            }`}
          >

            <div
              className={`w-16 h-16 rounded-full mx-auto ${item.color}`}
            ></div>

            <h1 className="mt-5 text-lg font-bold">
              {item.name}
            </h1>

          </button>

        ))}

      </div>

    </div>
  );
}

export default ThemeCustomizer;