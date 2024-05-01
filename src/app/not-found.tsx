import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Not Found",
};

function NotFoundPage() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center">
      <h1 className="text-secondary font-bold text-3xl sm:text-4xl">404</h1>
      <p className=" text-xl sm:text-2xl">Error! Page not found...</p>
    </div>
  );
}

export default NotFoundPage;
