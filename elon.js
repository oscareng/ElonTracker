const puppeteer = require(`puppeteer`);

(async () => {
  const browser = await puppeteer.launch({
    userDataDir: "./user_data",
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto(
    "https://twitter.com/elonmusk/status/1590755506112823296?cxt=HHwWgIDQpYztv5MsAAAA"
  );

  await page.waitForNetworkIdle();

  //   await page.$$eval("#id__8h5yp915q1x > span", (elHandles) =>
  //     elHandles.forEach((el) => console.log(el))
  //   );

  const all = await page.$$eval(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(n) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(-n+3) > div:nth-child(-n+3) > div.css-901oao.r-1nao33i.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0 > span",
    //"#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(n) > div > div > div > article > div > div",
    (elements) => elements.map((e) => e.textContent)
  );
  console.log(all);
  // const button = await page.$$eval(
  //   "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(n) > div > div > div > div > div > span",
  //   (elements) => elements.map((e) => e.textContent)
  // );
  // console.log(button);

  await page.exposeFunction("puppeteerLogMutation", async () => {
    console.log(`Mutation Detected`);
    const all2 = await page.$$eval(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(n) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(-n+3) > div:nth-child(-n+3) > div.css-901oao.r-1nao33i.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0 > span",
      //"#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(n) > div > div > div > article > div > div",
      (elements) => elements.map((e) => e.textContent)
    );
    console.log(all2);
  });

  await page.evaluate(() => {
    const timeline = document.querySelector(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div"
    );
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          puppeteerLogMutation();
        }
      }
    });
    observer.observe(timeline, { childList: true });
  });

  const [response] = await Promise.all([
    // page.waitForNavigation(),
    page.click(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(n) > div > div > div > div > div > span"
    ),
  ]);

  await page.waitForNetworkIdle();
})();
//return elements.map((e) => e);
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(11) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(7) > div > div > div > article > div > div
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(7) > div > div > div > article > div > div
//#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(7) ç> div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2) > div:nth-child(2)
//<div dir="auto" lang="en" class="css-901oao r-1nao33i r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0" id="id__yzglmxrhks" data-testid="tweetText"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">As long as you are taking suggestions </span><img alt="🙏" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f64f.svg" title="Folded hands" class="r-4qtqp9 r-dflpy8 r-sjv1od r-zw8f10 r-10akycc r-h9hxbl"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">  how about verifications that classify accounts by type (maybe different colors or icons) to make it easy for Twitter users to figure out who they are following. Governments, companies, celebs, &amp; individuals might all choose the same name.</span></div>
//#id__yzglmxrhks
//#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(5) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2) > div:nth-child(2)
//<div dir="auto" lang="en" class="Css-901oao r-1nao33i r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0" id="id__lhquay8h45" data-testid="tweetText"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">I love when people complain about food at a restaurant … at a restaurant </span><img alt="🤣" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f923.svg" class="r-4qtqp9 r-dflpy8 r-sjv1od r-zw8f10 r-10akycc r-h9hxbl"><img alt="🤣" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f923.svg" class="r-4qtqp9 r-dflpy8 r-sjv1od r-zw8f10 r-10akycc r-h9hxbl"></div>
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(13) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2) > div:nth-child(1)
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(8) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2) > div:nth-child(2)
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(5) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2) > div:nth-child(2)
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(3) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2)
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(11) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2) > div.css-1dbjc4n.r-4qtqp9.r-zl2h9q
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(11) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2)
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(11) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2) > div:nth-child(2)
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(11) > div > div > div > article > div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2)
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(11) > div > div > div > article > div > div > div
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(11)
// //show more replies buttons
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(10) > div > div > div > div > div > span
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(16) > div > div > div > div > div > span
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(16) > div > div > div > div > div > span
// #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(12) > div > div > div > div > div > span
