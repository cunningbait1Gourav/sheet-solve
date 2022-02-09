const reader = require('xlsx')
const file= reader.readFile('./sheet.xlsx')

var g=1;
let data = [];
let data2=[];
console.log("processing files.............")
const sheets = file.SheetNames;

for(let i=0;i<sheets.length;i++)
{
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
    temp.forEach((res)=>{
        data.push(res);
        console.log(".")
    })
    console.log(`sheet ${i} data collected`)
}

console.log("data has been gathered \n we are starting with processing it will take at least 5 mins");

data.forEach((datas)=>{
    let text= datas.name.toString();
    let seo= datas.seo.toString();
    let book= datas.book.toString();
    text= text.replace(/ /g,"-");
    for(let j=0;j<text.length;j++)
    {
        if(text[j]===":"||text[j]===","||text[j]==="."||text[j]==="+"||text[j]==="#"||text[j]==="@"||text[j]==="!"||text[j]==="$"||text[j]==="%"||text[j]==="&"||text[j]==="*"||text[j]==="("||text[j]===")"||text[j]==="/"||text[j]==="{"||text[j]==="}"||text[j]==="["||text[j]==="]"||text[j]==="|")
        {
            text= text.replace(text[j],"");
        }
        if(text[j]==="-"&& j == text.length)
        {
            text = text.replace(text[j],"");
        }
        if(text[j]==="-" && j == 0)
        {
            text = text.replace(text[j],"");
        }
        if(text[j-1]==="-" && text[j]==="-")
        {
            console.log("found it")
            text = text = text.replace(text[j],"");
        }
        if(text[j]==="-" && text[j+1]==="-")
        {
            console.log("found it");
            data2.push(g);
            text = text = text.replace(text[j+1],"");
        }
    }
    text = text.replace(/==/g,"-");
    text = text.replace(/===/g,"-")
    seo= seo.replace(/kim/g,book);
    seo= seo.replace(/Kim/g,book);
    datas.name= text;
    datas.seo = seo;
    console.log("#");
    g++;
})
console.log(`you need to get these datas corrected manually`);
data2.forEach((datas2)=>{
    console.log(datas2)
})

const ws = reader.utils.json_to_sheet(data)
reader.utils.book_append_sheet(file,ws,"sheet1")
reader.writeFile(file,'./sheet1.xlsx')


