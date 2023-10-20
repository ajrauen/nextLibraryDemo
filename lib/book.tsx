export const getDiscoverBooksData = async (subjectType: string) => {
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

export const getBookData = async (key: string) => {
  const res = await fetch(`https://openlibrary.org/works/${key}.json`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
};

export const getBookAuthor = async (key: string) => {
  const res = await fetch(`https://openlibrary.org/${key}.json`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
};
