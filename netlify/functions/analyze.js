document.getElementById("result").innerHTML =
`
<h2>Viral Score: ${data.score}</h2>

<h3>Suggestions</h3>
<p>${data.suggestions.join("<br>")}</p>

<h3>Better Titles</h3>
<p>${data.betterTitles.join("<br>")}</p>

<h3>SEO Tags</h3>
<p>${data.tags.join(", ")}</p>

<h3>Description</h3>
<p>${data.description}</p>
`;

