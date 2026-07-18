"use client";
import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black px-6">
      <div className="text-center max-w-xl">
        {/* Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
          <SearchX className="h-14 w-14 text-red-500" />
        </div>

        {/* Error Code */}
        <h1 className="mt-8 text-8xl font-extrabold tracking-widest text-white">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 leading-7">
          The page you're looking for doesn't exist or may have been moved.
          Please check the URL or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-6 py-3 font-semibold text-gray-300 transition hover:border-gray-500 hover:bg-gray-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-gray-500">
          Error Code: 404 • Resource Not Found
        </p>
      </div>
    </section>
  );
};

export default NotFound;
