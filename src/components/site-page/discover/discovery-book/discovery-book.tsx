interface DiscoveryBookProps {
  id: string;
}

const DiscoveryBook = (props: DiscoveryBookProps) => (
  <div className="relative top-5 mr-4">
    <img
      className="h-28 w-24"
      src={`https://covers.openlibrary.org/b/ID/${props.id}-L.jpg`}
    />
  </div>
);

export default DiscoveryBook;
