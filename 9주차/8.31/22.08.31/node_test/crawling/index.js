const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  //await page.goto("https://comic.naver.com/webtoon/weekdayList?week=mon");
  //await page.pdf({ path: "test.pdf", format: "A4" });
  //await page.screenshot({ path: "screanshot.jpg", fullPage: true });
  //await browser.close();
  await page.goto("https://news.daum.net/digital#1");

  

  const data = await page.evaluate(() => {
    const webtoonList = document.querySelectorAll(".box_news_major .link_txt")
    const titles = Array.from(webtoonList).map((li) => li.textContent.trim());
    return titles;
  });

  console.log(data);
};

main();
