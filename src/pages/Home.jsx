import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
    return (
        <>
            <section className="py-5" >
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            {/* <ProductCard title={"Fancy Product 1"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/233/450/300"} className={"card h-100 shadow"}/> */}
                            <ProductCard />
                        </div>
                        <div className="col mb-5">
                            <ProductCard title={"Fancy Product 2"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/237/450/300"} className={"card h-100 shadow"} />
                        </div>
                        <div className="col mb-5">
                            <ProductCard title={"Fancy Product 3"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/503/450/300"} className={"card h-100 shadow"}/>
                        </div>
                        <div className="col mb-5">
                            <ProductCard title={"Fancy Product 4"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/290/450/300"} className={"card h-100 shadow"}/>
                        </div>
                        <div className="col mb-5">
                            <ProductCard title={"Fancy Product 5"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/120/450/300"} className={"card h-100 shadow"}/>
                        </div>
                        <div className="col mb-5">
                            <ProductCard title={"Fancy Product 6"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/98/450/300"} className={"card h-100 shadow"}/>
                        </div>
                        <div className="col mb-5">
                            <ProductCard title={"Fancy Product 7"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/765/450/300"} className={"card h-100 shadow"}/>
                        </div>
                        <div className="col mb-5">
                            <ProductCard title={"Fancy Product 8"} price={"$40.00 - $80.00"} url={"https://picsum.photos/id/768/450/300"} className={"card h-100 shadow"}/>
                        </div>
                    </div>
                </div>
            </section >
            
        </>
    )
}

export default Home