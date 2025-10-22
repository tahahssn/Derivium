export async function fetchResult(mode, equation, variable, point) {
  let apiUrl = "";

  if (mode === "limit") apiUrl = "https://maazbse.pythonanywhere.com/limit";
  else if (mode === "derivative") apiUrl = "https://maazbse.pythonanywhere.com/derivative";
  else if (mode === "partial") apiUrl = "https://maazbse.pythonanywhere.com/partial-derivative";
  else if (mode === "total") apiUrl = "https://maazbse.pythonanywhere.com/total-derivative";
  else throw new Error("Invalid mode");

  const payload =
    mode === "limit"
      ? { equation, variable: variable, point }
      : { equation, variables: variable };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error(`HTTP Error ${response.status}`);

  return await response.json();
}
