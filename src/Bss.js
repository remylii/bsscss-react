import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Thread from "./components/Thread";
import PostForm from "./components/PostForm";
import "./Bss.css";

export default function Bss() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <main>
          <Thread />
        </main>
        <PostForm />
      </div>
      <Footer />
    </div>
  );
}
