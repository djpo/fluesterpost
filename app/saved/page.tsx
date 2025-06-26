"use server";

export default async function Saved(): Promise<React.JSX.Element> {
  return (
    <div className="p-3 flex justify-center">
      <div className="w-full max-w-150">
        <h1 className="text-lg mb-5">Users&apos; saved cycles</h1>
      </div>
    </div>
  );
}
