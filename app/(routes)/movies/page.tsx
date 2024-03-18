
async function getTrendingTV() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: process.env.AUTH as string,
      },
    }
  );
  return response.json();
}

export default function MoviePage() {
  return (
    <div>Movie Page</div>
  );
}
