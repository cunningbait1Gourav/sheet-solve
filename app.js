const reader = require('xlsx')
const file= reader.readFile('./sheet.xlsx')

let data = [];
let data2 =[];

const sheets = file.SheetNames;

for(let i=0;i<sheets.length;i++)
{
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
    temp.forEach((res)=>{
        data.push(res);
    })
}

console.log("data has been gathered \nwe are starting with processing it will take at least 5 mins");

data.forEach((datas)=>{
    let text= datas.name;
    let seo= datas.seo;
    let book= datas.book;
    text= text.replace(/ /g,"-");
    for(let j=0;j<text.length;j++)
    {
        if(text[j]==="."||text[j]==="#"||text[j]==="@"||text[j]==="!"||text[j]==="$"||text[j]==="%"||text[j]==="&"||text[j]==="*"||text[j]==="("||text[j]===")"||text[j]==="/"||text[j]==="{"||text[j]==="}"||text[j]==="["||text[j]==="]")
        {
            text= text.replace(text[j],"");
        }
    }
    console.log(text);
    seo= seo.replace(/kim/g,book);
    console.log(seo);
    datas.name =text;
    datas.seo = seo;
    console.log(data);
})

const ws = reader.utils.json_to_sheet(data)
reader.utils.book_append_sheet(file,ws,"sheet1")
reader.writeFile(file,'./sheet.xlsx')


