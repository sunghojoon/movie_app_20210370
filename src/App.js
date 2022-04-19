function Shoes({name, picture}) {
   return (
       <div>
           <h2>I like {name}</h2>
          <img src ={picture} />
       </div>
   );}

const ShoesIlike = [
{
   name:'nike dunk low retro black',
   image:'https://footsell.com/g2/data/og_image/sneakernews/607160.jpg',
},
{
   name:'nike air force 1',
   image:'https://t1.daumcdn.net/cfile/tistory/27372A4057D1826208',
},
{
   name:'nike x peaceminusone kwondo1',
   image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XHCdRTNmRj5cdt7CbtxkkQAAAA%26pid%3DApi&f=1',
},
{
   name:'jordan 1 university blue',
   image:'https://footsell.com/g2/data/cheditor5/2101/view_thumbnail/mania-done-20210120091423_nookprve.jpg',
},
{
   name:'jordan 1 chicago',
   image:'http://hoopbro.co.kr/web/product/big/201611/259_shop1_783031.jpg',
},
];

function App() {
  return(
     <div>
        {ShoesIlike.map(dish => <Shoes key={dish.name} name={dish.name} picture={dish.image}/>)}
     </div>
  );
}

export default App;