import React from "react";
import "./App.css";

const Book1 = {
  name: "The Whispers by Ashley Audrain (June 6)",
  description: `The Whispers begins with a young boy falling from his window in the middle of the night. His family watches him from his hospital room, where he lies in a coma. While his mother waits by his side, refusing to speak to anyone, the family’s friends and neighbors wait back home, each confronting their own role in the events that led up to the tragedy. Over the course of one week, the mothers in each of these four families are forced to face their own secrets and the uncomfortable truths that connect them to one another – all while anxiously awaiting the fate of the young boy. This novel faces uncomfortable truths of its own: intuitions we ignore, the sacrifices of motherhood and what happens when we put our needs ahead of our children’s.`,
  image:
    "https://thestoryexchange.org/app/uploads/2023/06/IMG_7627-525x793.jpeg",
};

const Book2 = {
  name: "All the Gold Stars by Rainesford Stauffer (June 6)",
  description: `The newest book from journalist and author Rainesford Stauffer focuses on the psychology around ambition. From getting gold stars on our homework in grade school, to attending the “right” college, to putting in extra hours at work, Stauffer evaluates how the cultural, personal and societal pressures around ambition have led to a nationwide burnout epidemic. She combines her personal narrative with interviews with students, parents, workers, psychologists and labor organizers to show the common pressures everyone is facing and the consequences that follow. By asking hard questions, she encourages readers to evaluate our own relationships with ambition so that we can reach our goals in a healthier way. `,
  image:
    "https://thestoryexchange.org/app/uploads/2023/06/IMG_7628-525x793.jpeg",
};

const Book3 = {
  name: "Banyan Moon by Thao Thai (June 13)",
  description: `When Ann Tran gets a call that her beloved grandmother Minh has passed away, she returns home to Florida to face her estranged mother, Huong. There, the two women learn that Minh has left them both Banyan House, the crumbling Gothic manor where Ann grew up. Under the same roof for the first time in years, the mother and daughter attempt to rebuild their relationship without Minh, the one person who’s always held them together.
  Running parallel to this is Minh’s story – we watch her grow up in the shadow of the Vietnam war and eventually immigrate to America. Years later, when Ann makes a discovery in Banyan House’s attic, all of Minh’s long-buried secrets come to light. Spanning decades and continents, Banyan Moon tells a story of the things we inherit from our mothers, whether we like it or not. `,
  image:
    "https://thestoryexchange.org/app/uploads/2023/06/IMG_7629-525x792.jpeg",
};

const Book4 = {
  name: "The Sunset Crowd by Karin Tanabe (July 4)",
  description: `In this novel, Evra Scott, the daughter of an Oscar-winning director and a Brazilian bombshell actress, is L.A.’s reigning style queen. Currently, she’s romantically linked to famous screenwriter Kai de la Faire.
  Meanwhile, Theodora Leigh is fighting to become a movie producer in a town where sex and sexism sell. Luckily, getting ahead by any means necessary is L.A.’s mantra.
  And then there’s Bea Dupont, a photographer for Rolling Stone and Vogue who attends every party. She’s also in love with her oldest friend, Kai de la Faire – yes, Evra’s Kai de la Faire.
  From Rodeo Drive to the French Riviera, this story follows each woman in her pursuit of glory and stardom in a highly competitive setting where some people achieve the American dream and some don’t. And they all learn one truth: it’s about faking it till you make it. `,
  image:
    "https://thestoryexchange.org/app/uploads/2023/06/IMG_7630-525x798.jpeg",
};

const Book5 = {
  name: "Karnali Blues by Buddhi Sagar (December 27)",
  description: `"Karnali Blues" follows the life of the protagonist, Sumnima, and his relationship with his father, Brish Bahadur.
  The story is narrated from Sumnima’s perspective as he reflects on his childhood and the life of his father. It captures the trials and tribulations of Brish Bahadur, a man with big dreams but limited means, as he moves from one village to another in search of better opportunities.
  The novel beautifully encapsulates the father-son relationship, marked by moments of tenderness, misunderstanding, and eventual reconciliation. As Sumnima grows, he begins to understand the complexities of his father's life and the sacrifices made for the family. The novel explores themes of love,
 loss, and the passage of time, illustrating how these experiences shape the bond between parent and child.
 "Karnali Blues" has been widely acclaimed for its authentic portrayal of rural Nepali life and its emotional resonance. It has struck a chord with readers for its relatable depiction of familial bonds and the universal themes of love and sacrifice. The novel has also contributed significantly to contemporary Nepali literature, garnering praise for its storytelling and linguistic artistry.`,
  image:
    "https://m.media-amazon.com/images/I/81nsJCxRcoL._AC_UF1000,1000_QL80_.jpg",
};

const BooksList = () => {
  return (
    <div style={{ width: "90%", marginLeft: "10rem" }}>
      <div
        className="wrapper"
        style={{ display: "flex", flexDirection: "row", gap: "3rem" }}
      >
        <div className="image">
          <img src={Book1.image} alt="" />
        </div>

        <div className="book-info">
          <h3>{Book1.name}</h3>

          <p>{Book1.description}</p>
        </div>
      </div>

      <div
        className="wrapper-inversed"
        style={{ display: "flex", flexDirection: "row", gap: "3rem" }}
      >
        <div className="book-info">
          <h3>{Book2.name}</h3>

          <p>{Book2.description}</p>
        </div>
        <div className="image">
          <img src={Book2.image} alt="" />
        </div>
      </div>

      <div
        className="wrapper"
        style={{ display: "flex", flexDirection: "row", gap: "3rem" }}
      >
        <div className="image">
          <img src={Book3.image} alt="" />
        </div>

        <div className="book-info">
          <h3>{Book3.name}</h3>

          <p>{Book3.description}</p>
        </div>
      </div>

      <div
        className="wrapper-inversed"
        style={{ display: "flex", flexDirection: "row", gap: "3rem" }}
      >
        <div className="book-info">
          <h3>{Book4.name}</h3>

          <p>{Book4.description}</p>
        </div>
        <div className="image">
          <img src={Book4.image} alt="" />
        </div>
      </div>

      <div
        className="wrapper"
        style={{ display: "flex", flexDirection: "row", gap: "3rem" }}
      >
        <div className="image">
          <img src={Book5.image} alt="" />
        </div>

        <div className="book-info">
          <h3>{Book5.name}</h3>

          <p>{Book5.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
