import React from "react";
import Movie from "./movie";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default class MovieList extends React.Component {
  render() {
    return (
      <div className='movie-list container p-5 '>
        <h2>Movie List</h2>
        <Movie
          {...{
            id: 1,
            key: 1,
            ranking: 1,
            stars: 5,
            totalstars: 5,
            totalvotes: 1,
            title:
              "House of the Dragon (2022) Drama, Action & Adventure, Sci-Fi & Fantasy, Mystery",
            rating: "R (for language, some sexuality and actuality violence).",
            synopsis:
              "The prequel series finds the Targaryen dynasty at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires—real and imagined—crumble from such heights. In the case of the Targaryens, their slow fall begins almost 193 years before the events of Game of Thrones, when King Viserys Targaryen breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
            image:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wXChZt2FewH6c6LeF9jLNHvuUCH.jpg",
          }}
        />
        <br />
        <br />
        <br />
        <Movie
          {...{
            id: 2,
            key: 2,
            ranking: 2,
            stars: 5,
            totalstars: 5,
            totalvotes: 1,
            title: "Prey (2022) Thriller, Action",
            rating:
              "R (for strong language including survival struggle and adventure).",
            synopsis:
              "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
            image:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fwZrvjroGe4hzjjEz6Dy4viqNeA.jpg",
          }}
        />
        <br />
        <br />
        <br />
        <Movie
          {...{
            id: 3,
            key: 3,
            ranking: 3,
            stars: 5,
            totalstars: 5,
            totalvotes: 1,
            title:
              "The Walking Dead (2010) Action & Adventure, Drama, Sci-Fi & Fantasy",
            rating: "R (for zombies and horror violence).",
            synopsis:
              "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
            image:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n7PVu0hSz2sAsVekpOIoCnkWlbn.jpg",
          }}
        />
        <br />
        <br />
        <br />
        <Movie
          {...{
            id: 4,
            key: 4,
            ranking: 4,
            stars: 5,
            totalstars: 5,
            totalvotes: 1,
            title:
              "The Lord of the Rings: The Rings of Power (2022) Sci-Fi & Fantasy, Action & Adventure, Drama ",
            rating:
              "R (wonderful visuals, adventure and some strong language).",
            synopsis:
              "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
            image:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/suyNxglk17Cpk8rCM2kZgqKdftk.jpg",
          }}
        />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
// }
