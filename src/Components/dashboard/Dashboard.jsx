import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Card from '../card/Card';
export default function Dashboard() {

const[trending,setTrending] =useState([]);
const[readlaterdb,setReadlaterdb] =useState([]);


    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apikey=53d1cc299b0b4a3e8fe0794de18c2759&page=2")
        .then((res)=>{
            setTrending(res.data.articles);
        })
    }, []);

    const readLater = (newCard) => {
        axios
          .post('http://localhost:3100/readlater', newCard, {
            headers: { 'Content-Type': 'application/json' },
          })
          .then(function (response) {
            if (response.status === 201) {
              setReadlaterdb([...readlaterdb, response.data]);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    return (
        <div className='container'>
        <div className='row' style={{width:"max"}}>
                    {trending.map((news) => (
                        <Card
                        urlToImage={news.urlToImage}
                        title={news.title}
                        author={news.author}
                        readLater={readLater}
                        description={news.description}
                        url={news.url}
                        />
                    ))
                    } 
        </div>
        </div>
    );
};
