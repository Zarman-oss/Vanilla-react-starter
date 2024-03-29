import CustomCard from './Shared/CustomCard.jsx';
import {
  Badge,
  Card as MaterialCard,
  CardBody,
  CardFooter,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext.jsx';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <CustomCard>
      <div className="flex flex-col items-center gap-4 m-8">
        <MaterialCard className="w-full max-w-md">
          <CardBody className="gap-4">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="h3">Reviews</Typography>
              <IconButton
                variant="text"
                size="lg"
                onClick={() => deleteFeedback(item.id)}
              >
                <i className="fas fa-circle-xmark fa-lg" />
              </IconButton>
            </div>
            <Typography variant="h6">{item.text}</Typography>
            {item.rating && (
              <Badge
                content={item.rating}
                className="m-auto p-auto"
                placement="top-start"
              />
            )}
          </CardBody>
          <CardFooter className="pt-0">
            {/* Add any additional buttons or actions here */}
          </CardFooter>
        </MaterialCard>
      </div>
    </CustomCard>
  );
};

export default FeedbackItem;
