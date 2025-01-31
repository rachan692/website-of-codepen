import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function MaterialUi(props) {
  return (
    <Card className="inline-block max-w-xs rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out bg-white p-4">
      <CardHeader shadow={false} floated={false} className="h-48">
        <img
          src={props.img}
          alt="card-image"
          className="ml-4 h-32 w-full object-cover rounded-lg"
        />
      </CardHeader>
      <CardBody className="space-y-3">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-semibold text-sm">
            <h1 className="line-clamp-1">{props.name}</h1>
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75 text-xs">
          <p className="line-clamp-3">{props.des}</p>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={true}
          fullWidth={true}
          className="bg-blue-600  mt-5 active:scale-90 text-white rounded-lg py-2 font-semibold shadow-md hover:bg-blue-700 transition-colors"
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
}
