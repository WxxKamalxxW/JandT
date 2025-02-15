import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600">Welcome to My App</h1>
        <Link href="/login">
          <button className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
}
