let para = document.getElementById("p")
let anc = document.getElementById("anchor")
let text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,neque reiciendis ex cupiditate laboriosam possimus omnis! Possimus, quae aliquid est tempore error sit ea minus molestias corporis cupiditate dignissimos fugit dolorem minima labore quod explicabo voluptatibus repellendus, obcaecati soluta asperiores omnis! Sit dolorem eius nemo nisi voluptate sed repudiandae, obcaecati iste accusamus ullam ipsa quis laudantium dignissimos aliquid ratione. Facilis alias,nesciunt fuga sapiente facere obcaecati similique commodi impedit eaque quae doloremque ducimus aut dolores aliquam explicabo odit sit esse quas cupiditate tempore! Sequi deleniti tempore doloremque perferendis ab neque error distinctio laborum ratione eveniet hic in ut, molestiae alias consectetur harum culpa fugiat inventore est quaerat cumque iste recusandae et.Asperiores repellat incidunt, distinctio provident laudantium fugit quae voluptatum exercitationem eligendi commodi nesciunt eius iste, ducimus qui ipsa voluptate itaque dicta. Deserunt harum incidunt repellat eaque? Repellendus nesciunt earum ut aspernatur, molestiae saepe ab dicta deleniti voluptatibus sint dolores nulla quasi recusandae rerum quas deserunt maiores atque nisi magnam cupiditate. Mollitia, ab. Voluptatum quis deleniti labore consequatur inventore suscipit assumenda expedita sint? Sit magni, sapiente repudiandae maxime, totam velit est aliquam autem repellat facilis debitis error voluptatem inventore amet,minus commodi minima soluta similique mollitia earum consequuntur. Temporibus, perferendis.
`

if(text.length > 100){
   anc.innerHTML = `See More`
   para.innerHTML = text.slice(0,100)
   anc.style.display = "inline"
}else{
para.innerHTML = text
}
anc.addEventListener('click',function(){
if(text.length > 100 && anc.innerText == "See More"){
   para.innerText = text;
   anc.innerHTML = `Show Less`
}else{
   para.innerHTML = text.slice(0,100)
   anc.innerHTML = `See More`
}
})