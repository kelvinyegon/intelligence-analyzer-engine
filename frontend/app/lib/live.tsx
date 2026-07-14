const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000";

const livePerfomance = async(url: string) => {
    const response = await fetch(`${BASE_URL}/live/analyze?url=${encodeURIComponent(url)}`)

    if(!response.ok) {
        const error = await response.json()
        throw new Error(error.detail || "Unknown Link")
    }

    return response.json()
}

export default livePerfomance

 