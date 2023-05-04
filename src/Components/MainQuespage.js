import React from 'react'
import ChooseQuestionNumber from './ChooseQuestionNumber'
import NavTabs from './NavTabs'
import TabPanes from './TabPanes'
import './css/media-query.css'
import './css/style.css'

const MainQuespage = () => {
    return (
        <>
            <div className='firstdiv'>
                <div className="title">
                    <h2>MCQ Questions</h2>
                </div>
                <div className="show-time"><span id="time"></span>  </div>
                <div className="container mt-3">
                    <br />
                    <div className="row">
                        <div className="col-lg-8">
                            {/* <!-- Nav tabs --> */}
                            <NavTabs />

                            {/* Tabpanes */}
                            <TabPanes />


                        </div>
                        <div className="col-lg-4">
                            <h2> Choose A Question</h2>
                            <div className="qbutton">
                                <ChooseQuestionNumber />

                            </div>
                        </div>





                    </div>


                </div>
            </div>







        </>
    )
}

export default MainQuespage