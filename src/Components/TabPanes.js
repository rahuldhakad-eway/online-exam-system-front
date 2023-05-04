import React, { useEffect, useState } from 'react'
import axios from 'axios';


const TabPanes = () => {
    const [technology, setTechnology] = useState([]);
    const [question, setQuestion] = useState([]);
    // useEffect(() => {
    //     async function show() {
    //         let res = await axios.post("http://localhost/online-exam-system/api/get-all-technology");
    //         let resDat = await axios.post("http://localhost/online-exam-system/api/get-all-question");
    //         console.log(resDat.data.questions)
    //         console.log(res.data.technologies)
    //         setTechnology(res.data.technologies)
    //         setQuestion(resDat.data.questions)
    //         console.log(resDat.data.questions.technology.name)
    //     }
    //     show();

    // },[question,technology]);




    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
      try {
        const response = await axios(url);
        setPosts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
  
    useEffect(()=> {
      fetchPost();
    }, [posts])]

    useEffect(() => {
        setTimeout(async () => {
            let data = await axios.post("http://localhost/online-exam-system/api/get-all-technology", {}).then(res => {
                console.log(res)
                setTechnology(res.data.technologies)
            });
            let d = await axios.post("http://localhost/online-exam-system/api/get-all-question", {}).then(rs => {
                console.log(rs.data)
                setQuestion(rs.data.questions)
            });
        }, 1000);
      //  console.log(technology);
    }, []);

    return (
        <div>


            {/* Tabpanes */}

            <div class="tab-content">
             
                            {/* {tech.id} */}
                            {question.map((q) => {
                                

return (
    <>

                            <div id={q.technology.name} class="container tab-pane active ">
                                <br />
                                <div class="questions-text">
                                    <form>

                                        <h2>What is the capital of France?</h2>
                                        {/* 

                                                    <input type="radio" id="paris" name="capital" value="paris" />

                                                    <label for="paris">{q.option1}</label><br />
                                                    <input type="radio" id="london" name="capital" value="london" />
                                                    <label for="london">{q.option2}</label><br />
                                                    <input type="radio" id="london" name="capital" value="london" />
                                                    <label for="london">{q.option3}</label><br />
                                                    <input type="radio" id="london" name="capital" value="london" />
                                                    <label for="london">{q.option4}</label><br />
                                                 */}


                                        {/* <input type="radio" id="berlin" name="capital" value="berlin" />
                            <label for="berlin">Berlin</label><br />
                            <input type="radio" id="london" name="capital" value="london" />
                            <label for="london">London</label><br />
                            <input type="radio" id="rome" name="capital" value="rome" />
                            <label for="rome">Rome</label><br /> */}
                                    </form>
                                </div>
                                <button className="mark-for-review">Mark For Review<i class="fa-solid fa-forward"></i></button>
                                <button className="clear-response-btn">Clear Response <i class="fa-solid fa-xmark"></i> </button>
                                <button className="save-btn">Save & Next <i className="fa-regular fa-floppy-disk"></i></button>

                            </div>
                            </>
                                            )
                                        })}
                           
                            {/* <div id={val.name} class="container tab-pane fade">
                                <br />
                                <div class="questions-text">

                                    <form>


                                        <h2>What is the capital of France?</h2>
                                        <input type="radio" id="paris" name="capital" value="paris" />
                                        <label for="paris">Paris</label><br />
                                        <input type="radio" id="berlin" name="capital" value="berlin" />
                                        <label for="berlin">Berlin</label><br />
                                        <input type="radio" id="london" name="capital" value="london" />
                                        <label for="london">London</label><br />
                                        <input type="radio" id="rome" name="capital" value="rome" />
                                        <label for="rome">Rome</label><br />
                                    </form>
                                </div>
                                <button className="mark-for-review">Mark For Review<i class="fa-solid fa-forward"></i></button>
                                <button className="clear-response-btn">Clear Response <i class="fa-solid fa-xmark"></i> </button>
                                <button className="save-btn">Save & Next <i class="fa-regular fa-floppy-disk"></i></button>



                            </div> */}
                            {/* <div id={val.name} class="container tab-pane fade">
                                <br />
                                <div class="questions-text">
                                    <form>

                                        <h2>What is the capital of France?</h2>
                                        <input type="radio" id="paris" name="capital" value="paris" />
                                        <label for="paris">Paris</label><br />
                                        <input type="radio" id="berlin" name="capital" value="berlin" />
                                        <label for="berlin">Berlin</label><br />
                                        <input type="radio" id="london" name="capital" value="london" />
                                        <label for="london">London</label><br />
                                        <input type="radio" id="rome" name="capital" value="rome" />
                                        <label for="rome">Rome</label><br />
                                    </form>

                                </div>
                                <button className="mark-for-review">Mark For Review<i class="fa-solid fa-forward"></i></button>
                                <button className="clear-response-btn">Clear Response <i class="fa-solid fa-xmark"></i> </button>
                                <button className="save-btn">Save & Next <i class="fa-regular fa-floppy-disk"></i></button>
                            </div> */}
                 
            </div>




















        </div>
    )
}

export default TabPanes;