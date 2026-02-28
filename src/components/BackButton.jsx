import { useNavigate } from "react-router-dom";
import { Button } from "../components";

const BackButton = () => {
  const navigate = useNavigate();

  const handlePrevousPage = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Button type="back" onClick={(e) => handlePrevousPage(e)}>
      &larr; Back
    </Button>
  );
};

export default BackButton;
