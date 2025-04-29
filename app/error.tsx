"use client";

export default function Error({ error }: { error: string }) {
    console.log("Error: ", error);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
            <p>Something went wrong!</p>
        </div>
    );
}