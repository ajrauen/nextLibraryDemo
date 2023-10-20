import CreateIcon from "@mui/icons-material/Create";
import { Button } from "@mui/material";

interface BookPurchaseProps {
  id: string;
}

const BookPurchase = (props: BookPurchaseProps) => {
  return (
    <div className="col-span-3">
      <div className=" inline-block	overflow-hidden	">
        <div className="rounded-r-2xl inline-block	overflow-hidden	">
          <img
            className="h-80 w-52"
            src={`https://covers.openlibrary.org/b/ID/${props.id}-L.jpg`}
          />
        </div>
      </div>

      <div className="flex flex-row">
        <Button variant="outlined" startIcon={<CreateIcon />}>
          Want to Read
        </Button>
      </div>
    </div>
  );
};

export default BookPurchase;
