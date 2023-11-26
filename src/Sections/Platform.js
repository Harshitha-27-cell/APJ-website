import React from 'react'
import { Images } from '../constants';
const Platform = () => {
    return (
        <section className="PlatfromSection" id="Platform">
            <div className="Plat Heading">
                <h3>Platforms</h3>
            </div>
            <div className="Plat Content">
            <p>
                <span>
                    Whether you're a coding novice or a seasoned developer, APJ Abdul Kalam Hackers Academy has something
                    to offers regarding different coding platforms. Join our vibrant community and embark on an exciting coding journey that will
                    broaden your horizons, enhance your skills, and connect you with a network of passionate individuals
                    who share your love for coding.
                </span>
                </p>
            </div>
            <div className="Platforms">
                {
                    Images.map((items) => (
                        <div className="PlatBox" key={items.content}>
                            <img 
                            src={items.value}
                            alt="Platforms" 
                            height={100}
                            width={100}
                            />
                            <p>{items.content}</p>
                            <div className='PlatSat'>
                                <a href={items.link}>{items.linkName}</a><i class="bi bi-arrow-right"></i>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Platform
