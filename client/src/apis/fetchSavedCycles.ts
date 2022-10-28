const getCycles = async () => {
  const maxCount = 5;
  const query = `query GetCycles($maxCount: Int) {
    getCycles(last: $maxCount) {
      _id
      originLang
      originText
      steps {
        lang
        text
      }
    }
  }`;

  const res = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { maxCount },
    }),
  });
  const parsed = await res.json();

  return parsed.data.getCycles;
};

export { getCycles };
