import React from 'react'

const main = () => {
    return (
        <div>
        <div className="order-and-map-container">
            <div className="order-container">
            <h1>Moving and relocation services that change the world one van at a time</h1>

            <div>
                <div className="eco-container">
                    <div className="eco-text">
                        <h3>Using Only Non-Diesel Vans</h3>                       
                       
                    </div>  
                    <div className="lm"><p>Learn more</p></div>
                    
                </div>
            </div> 

            <div className="location-container">
            <label htmlFor="pickupAddress"></label>
            <input type="text" placeholder="Pick up Address"/>   

            <div className="location-container">
            <label htmlFor="dropoffAddress"></label>
            <input type="text" placeholder="Drop off Address"/>      
            </div>       
            </div>
            <button className="get-quote">GET A QUOTE</button>
            
            </div>
        </div>

        <div className="what-we-do">            
            <h1>What we do: Instant pickup we provide eco-friendly removable vans</h1>

            <div className="info">
                <div className="leftSide">

                    <div className="topLeft">
                        <h2>Select a Van: </h2>
                        <p>We have a variety of vans to choose from in order to suit your needs.</p>
                    </div>

                    <div className="bottomLeft">
                        <h2>Instant Price:</h2>
                        <p> Get an instant estimated charge without the hassle of getting various quotations on your email</p>
                    </div>
                </div>

                <div className="rightSide">

                    <div className="topRight">
                        <h2>Enter Location: </h2>
                        <p> Pick up and drop off location is all you need to provide.</p>
                    </div>

                    <div className="bottomRight">
                        <h2>Schedule pickup time: </h2>
                        <p> Have the ability to schedule your pickup time and location</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mission">
            <h2>Our mission: Together, we can make or cities liveable</h2>

        <div className="mission-container">
            <h3>We minimize traffic</h3>
            <div>
                <p>We plan to minimize traffic by being the only removal service that offers removal moving bundles for single and small items with passengers who have a similar intention</p>
            </div>          
        </div>

        <div className="mission-container">
            <h3>We help you breather better</h3>
            <div>
                <p>We are the first online platform to come up with a fleet of electric, hydrogen, and CPG vans, with which we aim to combat the pollution caused by diesel vans.</p>
            </div>          
        </div>

        <div className="mission-container">
            <h3>We keep the noises down</h3>
            <div>
                <p>instant pickup is the only removal company in the United Kingdom tackling noise pollution, as more than 100 million people are exposed to annoying traffic everyday.</p>
            </div>          
        </div>

        <div className="mission-container">
            <h3>We offer comfortable removal services that cost less!</h3>
            <div>
                <p>We achieve our slogan of "pay less but move Green" by taking advantage of our vans which are not charged for congestions.</p>
            </div>          
        </div>

        <div className="mission-container">
            <h3>We encourage re-usability</h3>
            <div>
                <p>We offer free useable bags and this replaces the use of single use plastic mattress cover, sofa covers as the most effective way to reduce waste is to not create it in the first place.</p>
            </div>          
        </div>

        </div>
        
        <div>
            <h2 className="join">Join our family and to learn more or get a quotation</h2>
        </div>
        
        <div className="cities-container">
            <h2>Our cities</h2>

        <div className="service-hours">
            <h5>Service hours in London</h5>
            <p>Monday to Thursday: 5am to 4am</p>
            <p>Friday 5 am to Monday 4am: non-stop</p>

        </div>

        </div>
       
        <div className="about-us">
            
        </div>

        </div>
    )
}

export default main
