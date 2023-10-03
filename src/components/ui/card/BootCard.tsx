"use client";
import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function BootCard({
  title = defaultValue.title,
  text = defaultValue.text,
  buttonText = defaultValue.buttonText,
  imgSrc = defaultValue.imgSrc,
  url = "/pages/home/main/courses/main-course",
}: {
  title?: string;
  text?: string;
  buttonText?: string;
  imgSrc?: string;
  url?: string;
}) {
  return (
    <Link href={url}>
      <Card>
        {/* <Card.Img variant="top" src={imgSrc} /> */}
        <div className=" bg-gray-800 h-52 w-full"></div>
        <Card.Body>
          <Card.Title style={{ fontSize: "18px" }}>{title}</Card.Title>
          <Card.Text style={{ fontSize: "12px" }}>{text}</Card.Text>
          {/* <Button variant="primary">{buttonText}</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
}

const defaultValue = {
  title: "CardTitle",
  text: " Some quick example text to build on the card title .",
  buttonText: "Go somewhere",
  imgSrc: "/image1.png",
};
