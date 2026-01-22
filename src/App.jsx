
import WaveBackground from "./WaveBackground";

export default function App() {
  return (
    <>
      <WaveBackground />

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
  <div className="w-full max-w-2xl mx-auto text-center">
    <h1 className="mb-4 text-5xl font-bold text-gray-900">
      hi! i'm mika
    </h1>

    <p className="mb-8 text-gray-600 leading-relaxed">
      i'm a 4th year Computer Science student at UBC w/ a minor in Data Science.
    </p>

    <nav className="mb-10 flex flex-wrap justify-center gap-3">
      <button className="rounded-full bg-gray-100 px-5 py-2 text-gray-800">
        About
      </button>
      <button className="rounded-full bg-gray-100 px-5 py-2 text-gray-800">
        Projects
      </button>
      <button className="rounded-full bg-gray-100 px-5 py-2 text-gray-800">
        FAQ
      </button>
      <button className="rounded-full bg-gray-100 px-5 py-2 text-gray-800">
        Contact
      </button>
    </nav>

    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">
        Exam Generator
      </h3>

      <p className="mb-4 text-gray-600">
        Web app for creating and analyzing MCQ exams with variants.
      </p>

      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
        Web
      </span>
    </div>
  </div>
</main>
    </>
  );
}