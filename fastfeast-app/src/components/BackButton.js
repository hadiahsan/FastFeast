import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Button variant="primary" onClick={goBack} style={{ marginBottom: '150px' }}>
      Back
    </Button>
  );
};

export default BackButton;