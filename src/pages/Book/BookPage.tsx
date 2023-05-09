import React, { useEffect, useState } from "react";
import styles from "./BookPage.module.scss";
import Title from "src/components/Title/Title";
import { BackArrowIcon } from "src/assets/icons/BackArrowIcon";
import BookCard from "src/components/BookCard/BookCard";
import { CardProps } from "src/components/Card/types";
import { title } from "process";
import { useSelector } from "react-redux";
import { CardSelectors } from "src/redux/reducers/cardSlice";




type CardType = {
    error?: string;
    title: string;
    subtitle?: string;
    authors?: string;
    publisher?: string;
    isbn10?:string;
    isbn13?: string;
    pages?: string;
    year?: string;
    rating?: string;
    desc?: string;
    price?: string;
    image: string;
    url?: string;
    pdf?: {
        "Chapter 2": string,
        "Chapter 5": string,
    };
  };

const MOCK_CARD: CardType =  {
    error: "0",
    title: "Robot Operating System (ROS) for Absolute Beginners, 2nd Edition ",
    subtitle: "Security in the Cloud",
    authors: "Julien Vehent",
    publisher: "Manning",
    isbn10: "1617294136",
    isbn13: "2781617294136",
    pages: "384",
    year: "2018",
    rating: "5",
    desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
    price: "$26.98",
    image: "https://itbook.store/img/books/9781617294136.png",
    url: "https://itbook.store/books/9781617294136",
    pdf: {
      "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
      "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf",
    },
  }



const BookPage = () => {
   
  
    return (
        <div>
             <div className={styles.back}>
        <BackArrowIcon />
      </div>
            
            <BookCard card={MOCK_CARD} />  
        
      </div>
    );
  };
  
  export default BookPage;