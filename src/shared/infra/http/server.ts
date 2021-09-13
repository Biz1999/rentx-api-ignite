import { app } from "./app";
import ip from "ip";

app.listen(3333, ip.address(), () =>
  console.log("RentX Server is running on port 3333")
);
