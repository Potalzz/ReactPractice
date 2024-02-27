export default function Heading({ color = "blue", text, fontSize }) {
  return <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>;
}
