export async function getBookData() {
  const res = await fetch(
    "https://openlibrary.org/works/OL45804W/editions.json",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
