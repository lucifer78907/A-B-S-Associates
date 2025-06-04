import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
    const error: any = useRouteError();

    return (
        <div className="min-h-screen  flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-red-300">
            <div className="bg-white rounded-xl shadow-lg p-8 m-4 flex flex-col items-center max-w-md">
                <svg
                    className="w-16 h-16 text-red-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01"
                    />
                </svg>
                <h1 className="text-3xl font-bold text-red-600 mb-2">Oops!</h1>
                <p className="text-gray-700 mb-4 text-center">
                    Sorry, an unexpected error has occurred.
                </p>
                {error?.statusText || error?.message ? (
                    <p className="text-sm text-gray-500 mb-4">
                        <i>{error.statusText || error.message}</i>
                    </p>
                ) : null}
                <Link
                    to="/"
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;