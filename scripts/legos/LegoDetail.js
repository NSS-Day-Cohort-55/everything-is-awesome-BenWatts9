import { invertColor } from './../helpers.js';
import { capBricks } from './../helpers.js';
import { yearsFunc } from './../helpers.js';

export const LegoDetail = (brick) => {
  const link = brick.ColorstreamLinkImage;

  let block = `<section style="background-color:#${brick.ColorHex}">
                <div class="blockname">
                  ${link ? `<div><img src="./images/legoblock.png"></div>` : ""}
                  <h3>Name: ${capBricks(brick.LegoName)}</h3>
                </div>`
                
                let funYear = yearsFunc(brick.YearFrom, brick.YearTo)
                
                if (!isNaN(funYear)){
                  block += `<div class="block-years">Manufactured ${1 + funYear} years, ${brick.YearFrom} - ${brick.YearTo}</div>` 
                }
                
                if (brick.Notes !== ""){
                  block += `<div class="block__notes">${brick.Notes}</div>`
                } 
              `</section>`;
  

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