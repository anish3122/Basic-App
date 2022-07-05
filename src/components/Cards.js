import './Cards.css';

function Cards(){
    return(
        <div>
    <h1 className="text-center mt-5 mb-5">
        Amazon Officers and Directors
    </h1>
    <div className="container">
        <div className="row mt-5">
            <div className="col-lg-4">
                <div className="card w-100 hover-zoom hover-shadow">
                    <div className="card-body">
                        <img src="https://s2.q4cdn.com/299287126/files/images/officers/jeff_bezos.jpg" className="img-circle w-50 d-block mx-auto hover-shadow" alt=""/>
                        <h3 className="card-title text-center">Executive Chair</h3>
                        <p className="card-text text-center">Jeff Bezos founded Amazon.com in 1994. Amazon’s mission is to be Earth's most customer-centric company.</p>
                        <div className="text-center">
                        <a href="https://en.wikipedia.org/wiki/Jeff_Bezos" target="_blank" className="btn btn-primary">Profile
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card w-100">
                    <div className="card-body">
                        <img src="https://s2.q4cdn.com/299287126/files/images/officers/andrew_jassy.jpg" className="img-circle w-50 d-block mx-auto hover-shadow" alt=""/>
                        <h3 className="card-title text-center">Chief Executive Officer</h3>
                        <p className="card-text text-center">Andy Jassy is President and CEO of Amazon.com and also serves on the Board of Directors.He founded and led Amazon Web Services (AWS).</p>
                        <div className="text-center">
                            <a href="https://en.wikipedia.org/wiki/Andy_Jassy" target="_blank" className="btn btn-primary">Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card w-100">
                    <div className="card-body">
                        <img src="https://s2.q4cdn.com/299287126/files/images/officers/Brian_olsavsky.jpg" className="img-circle w-50 d-block mx-auto hover-shadow" alt=""/>
                        <h3 className="card-title text-center">Chief Financial Officer</h3>
                        <p className="card-text text-center">Mr. Olsavsky joined Amazon.com in April 2002. As CFO of Amazon.com, he oversees the company's overall financial activities.</p>
                        <div className="text-center">
                        <a href="https://www.linkedin.com/in/brian-olsavsky-601ba1" target="_blank" className="btn btn-primary">Profile
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Cards;