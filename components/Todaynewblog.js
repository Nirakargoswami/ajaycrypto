'use server'
import React from "react";
import { Button } from "@headlessui/react";
import Link from 'next/link'



const Todaynews = ({ posts, region }) => {
    return (
        <div>
            <div className="MainTitle cdumzF">
                <h2 className="lerjFI">Head Line </h2>

            </div>
            <div className="Blogbox flex overflow-x-scroll space-x-4">

                {posts.map((x, index) => (
                    <Link href={`/News/${x.id}`}>

                        <div style={{ backgroundColor: "rgba(26, 137, 23, 0.1)" }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <a href="#">


                                <img className="Imagecontent" src={`${x.jetpack_featured_media_url}`} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 jAUurx   dark:text-black">
                                        {x.title.rendered}
                                    </h5>
                                </a>
                                {/* <div dangerouslySetInnerHTML={{ __html: x.excerpt.rendered }} /> */}
                                {/* <div className="Timeimogi">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span style={{ fontSize: "15px", marginLeft: "10px" }}>
                                        {x.date}


                                    </span>
                                </div> */}



                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>

                            </div>
                        </div>
                    </Link>
                ))}


                {/* {posts.map((x, index) => (
                    <div key={index} className="Box flex-none w-48  border border-gray-300 rounded-lg">
                        {x.attributes.Media.data.attributes.formats.thumbnail.url &&
                            <div className="finceamge bg-gray-200 h-32 w-full ">
                                <img style={{ borderRadius: "4px" }} src={`${x.attributes.Media.data.attributes.url}`} />
                            </div>}
                        <div className="TitleBox flex flex-col">
                            <p className="flex-grow mb-2">
                                {x.attributes.Title}
                            </p>
                            <div>
                                <Link href={`/blog/${x.id}`}>
                                    <Button className="self-start bg-blue-500 text-white px-2 py-2 rounded">

                                        Read More

                                        <svg style={{ display: "inline" }} class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>

                                    </Button>
                                </Link>



                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                    <span className="size-66">
                                        {x.attributes.Reaad}
                                    </span>

                                    <svg style={{ marginLeft: "6px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span style={{ fontSize: "15px", marginLeft: "15px" }}>
                                        {x.attributes.Postedat}


                                    </span>
                                </div>




                            </div>


                        </div>
                    </div>
                ))} */}
            </div>

        </div>
    );
};

export default Todaynews;
