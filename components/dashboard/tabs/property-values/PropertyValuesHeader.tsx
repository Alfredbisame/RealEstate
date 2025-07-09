export default function PropertyValuesHeader() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Property Values</h2>
        <p className="text-white/80 text-sm">Track the value and appreciation of your properties</p>
      </div>
      <div className="mt-4 md:mt-0">
        <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg font-semibold text-sm">Last updated: Q2 2024</span>
      </div>
    </div>
  );
} 