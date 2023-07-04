import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addAccount } from "../redux/bankSlice";

export default function MyDialog() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    title: "",
    body: "",
  });

  const handletitle = (event) => {
    const title = event.target.value;
    setValue((prevdata) => ({
      ...prevdata,
      title: title,
    }));
  };
  const handlebody = (event) => {
    const body = event.target.value;
    setValue((prevdata) => ({
      ...prevdata,
      body: body,
    }));
  };

  console.log(value);
  const handleOpen = () => setOpen(!open);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sdasd");
    setOpen(open);
    if (value) {
      dispatch(
        addAccount({
          title: value.title,
          body: value.body,
        })
      );
    }
  };

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        Add new user
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="p-10 flex justify-center"
      >
        <Card color="transparent" shadow={false}>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="CUSTOMER NAME" onBlur={handletitle} />
              <Input size="lg" label="ACCOUNT NUMBER" onBlur={handlebody} />
            </div>
            <Button className="mt-6" fullWidth type="sumbit">
              Register
            </Button>
          </form>
        </Card>
      </Dialog>
    </Fragment>
  );
}
