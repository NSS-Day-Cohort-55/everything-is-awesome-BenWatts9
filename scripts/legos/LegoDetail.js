import { invertColor } from './../helpers.js';

export const LegoDetail = (brick) => {
  const link = brick.ColorstreamLinkImage;

  let block = `<section style="background-color:#${brick.ColorHex}">
                <div class="blockname">
                  ${link ? `<div><img src="./images/legoblock.png"></div>` : ""}
                  <h3>Name: ${brick.LegoName}</h3>
                </div>
                <div class="block-years">Manufactured ${1 + brick.YearTo - brick.YearFrom} years, ${brick.YearFrom} - ${brick.YearTo}</div>
              </section>`;
  

  if (link) {
    //true? wrap the block in an a tag
    return `
    <article class="block-wrapper">
      <a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
				${block}
			</a>
    </article>`
  } else {
    //false? return the block
    return `
    <article class="block-wrapper">
      ${block}
    </article>`
  }
}