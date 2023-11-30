import { useState } from "react";

const Section = ({ title, description, isVisible, setVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="text-2xl font-bold p-2">{title}</h1>
      {isVisible ? (
        <>
          <button
            onClick={() => setVisible(false)}
            className="underline border-zinc-950"
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          onClick={() => setVisible(true)}
          className="underline border-zinc-950"
        >
          Show
        </button>
      )}

      {/* {isVisible && <p>{description}</p>} */}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibileSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>;
      <Section
        title={"About Instamart"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        setVisible={(boolean) =>
          boolean ? setVisibileSection("about") : setVisibileSection("")
        }
        isVisible={visibleSection == "about"}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        setVisible={(boolean) =>
          boolean ? setVisibileSection("team") : setVisibileSection("")
        }
        isVisible={visibleSection == "team"}
      />
      <Section
        title={"Carreer Instamart"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        setVisible={(boolean) =>
          boolean ? setVisibileSection("carrer") : setVisibileSection("")
        }
        isVisible={visibleSection == "carrer"}
      />
    </div>
  );
};

export default Instamart;
