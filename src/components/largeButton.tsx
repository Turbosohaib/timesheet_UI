export default function Button(props) {
  return (
    <button
      type="submit"
      className="bg-[#1E5282] hover:bg-[#2163a1] rounded text-white font-medium py-3 w-[300px] px-[75px]"
    >
      <span className="tracking-[0.3px]">{props.text}</span>
    </button>
  );
}
