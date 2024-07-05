import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";

const TABLE_HEAD = [
  "User",
  "Books Purchased",
  "Total Amount",
  "Payment Status",
  "",
];

const TABLE_ROWS = [
  {
    userName: "John Doe",
    avatar: "https://example.com/avatar1.jpg",
    books: ["The Great Gatsby", "To Kill a Mockingbird"],
    totalAmount: "$35.98",
    paymentStatus: "Paid",
  },
  {
    userName: "Jane Smith",
    avatar: "https://example.com/avatar2.jpg",
    books: ["1984", "Animal Farm", "Brave New World"],
    totalAmount: "$42.97",
    paymentStatus: "Pending",
  },
  // Add more rows as needed
];

export function CheckoutTable() {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h5" color="blue-gray">
          Checkout Data
        </Typography>
      </CardHeader>
      <CardBody className="overflowY-scroll px-20">
        <table className="mt-4 border border-blue-gray-100 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className=" font-bold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                { userName, avatar, books, totalAmount, paymentStatus },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={userName}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {userName}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {books.join(", ")}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {totalAmount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={paymentStatus}
                          color={paymentStatus === "Paid" ? "green" : "red"}
                        />
                      </div>
                    </td>
                    {/* <td className={classes}>
                      <Tooltip content="View Details">
                        <IconButton variant="text" color="blue-gray">
                          <FaEye size={16} />
                        </IconButton>
                      </Tooltip>
                    </td> */}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
