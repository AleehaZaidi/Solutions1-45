
interface album {
    artist:string;
    title:string;
    track?:number;
};
  
function make_album( artist:string, title:string, track?:number): album{
       const album:album={
        artist,
        title
       }
  if (track!== undefined){
    album.track=track
  }
  return album 
}
const album1=make_album("artist1","album1")
const album2 =make_album("artist2","album",12)
const album3=make_album("artist3","album3")



console.log(album1);
console.log(album2);
console.log(album3);


