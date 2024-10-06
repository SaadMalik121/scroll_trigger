import Card from "./components/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    image: "/images/1.png",
    heading: "Heading 1",
    description:
      "This is the description for card 1. It describes the first card in detail. The card represents a particular product or concept that can be used to showcase key features and benefits. With vibrant imagery and concise, clear messaging, it is designed to attract the viewer's attention. The description continues to explain what the card offers and how it relates to the overall theme of the collection. Whether for informational purposes or product marketing, the card serves as a useful tool in engaging customers.",
  },
  {
    image: "/images/2.png",
    heading: "Heading 2",
    description:
      "This is the description for card 2. It highlights the specific elements that make this card stand out. The image plays a crucial role in communicating the product's unique value. Detailed text provides insight into why this card is essential to the overall offering, breaking down its benefits in a compelling way. Furthermore, the description outlines how the card fits within the broader category of products or services. Ideal for users looking to make informed decisions, this card simplifies the process of understanding key features.",
  },
  {
    image: "/images/3.png",
    heading: "Heading 3",
    description:
      "This is the description for card 3. In this section, the focus shifts to what makes the third card unique. It captures the essence of the product or message through its design and thoughtful content. The imagery complements the written description, offering a visual and textual explanation that users can easily grasp. This card is intended to provide detailed, yet accessible, information about the subject it represents, making it a valuable resource for those seeking clarity and a comprehensive overview.",
  },
  {
    image: "/images/4.png",
    heading: "Heading 4",
    description:
      "This is the description for card 4. The card draws attention to an innovative solution or idea that has the potential to benefit the viewer. It features a concise summary of the main attributes of the product or concept, supported by relevant visuals. The description elaborates on how this card fits into the larger context, providing essential details that guide the user toward a deeper understanding. With a focus on clarity, the content is crafted to make even complex ideas simple and easy to comprehend.",
  },
  {
    image: "/images/5.png",
    heading: "Heading 5",
    description:
      "This is the description for card 5. Here, the card showcases a specific feature or aspect of the product that differentiates it from others. It uses both imagery and text to engage the user, offering a holistic view of the subject at hand. The description emphasizes key selling points, making it clear why this particular product is important or useful. With a balance of creativity and informative content, this card acts as a powerful tool for communicating essential details to a wide audience.",
  },
  {
    image: "/images/6.png",
    heading: "Heading 6",
    description:
      "This is the description for card 6. This card serves as an overview of the product, providing comprehensive information that helps users make informed decisions. The image complements the text, creating a visually appealing and informative package. The description breaks down the main benefits, offering insight into how the product or service can solve problems or enhance the user's experience. By presenting the content in a clear and engaging way, this card ensures that the message is easy to understand and compelling for the audience.",
  },
];

function App() {
  return (
    <div className="w-full flex flex-col space-y-5 justify-center items-center py-8">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          heading={card.heading}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default App;
