window.onload = function () {
  document.getElementById("textInput").focus();
};
const output = document.getElementById("output");
const input = document.getElementById("textInput");
input.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    const userInput = input.value.toLowerCase();
    if (userInput === "about") {
      output.textContent = `
im part of DIMAS LONTONG ASSOCIATON, i'm here to tell you the truth in order to allert us about THEM.`;
    } else if (userInput === "dimaslontongassociation") {
      output.textContent = `
DIMAS LONTONG ASSOCIATION is a group of people initiate by the greatest DIMAS LONTONG. 
He is an anonymous person protected by the country, have many relation and have the right of full control to the the millitary, technology, including elon musk property, and mark zuckerberg.`;
    } else if (userInput === "they") {
      output.textContent = `
an unknown creature, nor they have physique, but DIMAS LONTONG often see it in his dream.
still unknown, the real evidence is cow farmers suddenly dissapearing one by one
decreasing cow population in the future.`;
    } else if (userInput === "theletter") {
      output.innerHTML = `
 5-12-5005

 dear past

 the world is not a great place to live in the future. in fact we can't still leave earth,
 not because we don't have technology, but we love earth so much and will miss it. 
 it's unresonable willingness called love. we deeply in love with our earth, and not
 ready for the long belonging.

 dear past

 the cow will dissapear one by one until one day cows would be a very rare animal to beat vaquita,
 and harimau sumatera. the market doesn't sell beef anymore, we haven't eat beef since 10 years ago
 and it is the worst.
 we detected the problem is they, and why they know where us is, what make they
 curious about us is.. SOUNDHOREG

 dear past
 
 DONT LET ELON MUSK KNOW SOUNDHOREG OR HE WILL BRING IT TO THE SPACE
 AND THEY WILL CURIOUS ABOUT US

 sincerely
 <span id="blink">wthavngnc</span>`;
    }
    input.value = "";
  }
});

//iftheautomaticlineoutputneedtochange
/*
const text1 = `5-12-5005\n dear past\n
\nthe word is not a great place to live. in fact we cant still leave earth
not that we dont have technology. we too much love earth, and will miss it. it's
unresonable willingness called love. we deeply in love with our earth, and not
ready for the long belonging.\n
\ndear past\n
\nthe cow will dissapear one by one until one day meat cow price will fly above
up to the sky.\n
\nwe detected the problem is they, and why THEY know where us is, what make THEY
curious about us is.. SOUNDHOREG\n
\nmy advice is\n
\nDONT LET ELON MUSK KNOW SOUNDHOREG OR HE WILL BRING IT TO THE SPACE
AND THEY WILL CURIOUS ABOUT US\n

\nsincerly\n
\nwthavngnc\n`

const formattedText1 = text1.replace(/\n/g, "<br>");
*/
