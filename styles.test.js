const fs = require("fs");

const html = fs.readFileSync("index.html","utf8");

describe("CSS3 Multi Column Layout",()=>{

test("h1 exists",()=>{
    expect(html).toMatch(/<h1>/i);
});

test("columns class exists",()=>{
    expect(html).toMatch(/class=["']columns["']/i);
});

test("column-count is 3",()=>{
    expect(html).toMatch(/column-count\s*:\s*3/i);
});

test("column-gap is 30px",()=>{
    expect(html).toMatch(/column-gap\s*:\s*30px/i);
});

test("column-rule exists",()=>{
    expect(html).toMatch(/column-rule\s*:\s*3px\s+solid\s+gray/i);
});

test("padding is 15px",()=>{
    expect(html).toMatch(/padding\s*:\s*15px/i);
});

test("background color white",()=>{
    expect(html).toMatch(/background-color\s*:\s*white/i);
});

test("text-align justify",()=>{
    expect(html).toMatch(/text-align\s*:\s*justify/i);
});

test("h1 color darkblue",()=>{
    expect(html).toMatch(/color\s*:\s*darkblue/i);
});

test("column-span all",()=>{
    expect(html).toMatch(/column-span\s*:\s*all/i);
});

});