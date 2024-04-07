const sachen =[
{
	"name":"Polished Andesit(1:6)",
	"text":"Dieser Block ist wie das normale Andesit nur eben poliert.Den kann man mit 4 Andesit in der Werkbank herstellen(oben rechts,oben mitte,mitte links,mitte mitte).Er dient nur Dekorations Zwecken",
	"id":"Polished-Andesite",
	"pfad":"img/PolishedAndesite.png"
},
{
	"name":"Grass(2)",
	"text":"Dieser Block ist der oberste Erdeblock",
	"id":"Grass",
	"pfad":"img/Grass.png"
},
{
	"name":"Dirt(3:1)",
	"text":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
	"id":"Dirt",
	"pfad":"img/Dirt.png"
},
{
	"name":"Coarse-Dirt(3:1)",
	"text":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
	"id":"Coarse-Dirt",
	"pfad":"img/Grobe_Erde.png"
},
{
	"name":"Podzol(3:2)",
	"text":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
	"id":"Podzol",
	"pfad":"img/Podsol.png"
},
{
	"name":"Cobblestone(4)",
	"text":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
	"id":"Cobble",
	"pfad":"img/Cobble.png"
},
{
	"name":"Oak Wood Planks(5)",
	"text":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
	"id":"Oak Wood Planks(5)",
	"pfad":"img/Oak_Planks.png"
},
]

let returnArray = [];
function getTemplates(sachen){
	for(let i = 0;i < sachen.length - 1;i++)
{
	let tmp = '<div class="content-item-wrap">'+
						'<div class="content-item">'+
							'<div class="content-item-text">'+
								'<h2 id="'+sachen[i].id+'">'+
								sachen[i].name+
								'</h2><br>'+
								sachen[i].text+
							'</div>'+
							'<div class="content-item-img">'+
								'<img src="'+sachen[i].name+'"/></div></div></div>';
	returnArray.push(tmp);
}
	
	return returnArray;
}
let tmpArray = getTemplates(sachen);
console.log(tmpArray);

var ele = document.getElementById("content");
returnArray.forEach(function(t){
	console.log(ele);
	
	ele.appendChild(document.fromString(t));
});

