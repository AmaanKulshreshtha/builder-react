"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Loader from "./components/Loader/Loader";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Loader, {
  name: "Loader",
});
