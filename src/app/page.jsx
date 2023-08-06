"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("https://dummyjson.com/products");
      console.log(res);
      let json = await res.json();
      setData(json["products"]);
      console.log(json);
    })();
  }, []);

  console.log(data);

  return (
    <div>
      <h1 className="container mx-auto text-4xl text-center font-semibold bg-gradient-to-r from-yellow-900 to-gray-700 bg-clip-text text-transparent">
        this is home HomePage
      </h1>
      <div className=" container mx-auto grid grid-cols-3 gap-6">
        {data.map((item, index) => {
          return (
            <Link href="/product" key={index}>
              <Card className="mt-6 w-100 h-64 hover:bg-yellow-200 ">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {item["title"].slice(0, 20) + "..."}
                  </Typography>
                  <Typography>
                    {item["description"].slice(0, 50) + "..."}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-8">
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
