export const getBookData = async (subjectType: string) => {
  const res = await fetch(
    `https://openlibrary.org/subjects/${subjectType}.json?limit=5`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
};
