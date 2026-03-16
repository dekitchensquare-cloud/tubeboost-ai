exports.handler = async function(event){

const { title } = JSON.parse(event.body);

let score = 50;

if(title.length < 60) score += 10;
if(/\d/.test(title)) score += 10;
if(/how|why|best|secret/i.test(title)) score += 20;

return{
statusCode:200,
body:JSON.stringify({score})
};

};
