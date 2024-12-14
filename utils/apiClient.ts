const BASE_API_URL = process.env.BASE_API_URL || "http://localhost:8000";
//zz
export async function apiRequest<T>(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
    data?: T
) {
    try {
        const response = await fetch(`${BASE_API_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : undefined,
        });

        if (!response.ok) {
            throw new Error(`Error fetching ${endpoint}: ${response.status}`);
        }
        return response.json();
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred while fetching data.");
    }
}
