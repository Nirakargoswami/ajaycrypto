'use server'
import React from "react";
import { Button } from "@headlessui/react";
import Link from 'next/link'


const Thsiweek = ({ posts, region }) => {
    return (
        <div>
            <div className="MainTitle cdumzF">
                <h2 className="lerjFI">Finance New's</h2>

            </div>
            <div className="fiinceBox">

                {posts.reverse().map((x, index) => (
                    <Link href={`/News/${x.id}`}>
                        <div key={index} className="iiwocm">
                            <div className="Cardtitle">
                                <h6 className="dtjHgI">
                                    {x.title.rendered}
                                </h6>
                                {true &&
                                <div className="finceamge bg-gray-200 h-32 w-full ">
                                    <img className="imgbox" src={`${x.jetpack_featured_media_url}`} />
                                </div>}
                            </div>
                            

                            <div>
                            <p className="kDZZDY">
                                <div dangerouslySetInnerHTML={{ __html: x.excerpt.rendered }} />

                            </p>
                        </div>
                            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                {/* <span className="size-66">
                                {x.attributes.Reaad}
                            </span> */}

                                <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span style={{ fontSize: "15px", marginLeft: "15px" }}>
                                    {x.date}


                                </span>
                            </div>
                            <div className="buttombox">

                                <Button className="self-start bg-blue-500 text-white px-2 py-2 rounded">

                                    Read More

                                    <svg style={{ display: "inline" }} class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>

                                </Button>




                            </div>


                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Thsiweek;
