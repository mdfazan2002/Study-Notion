import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useState } from "react";

const Card = (props) => {
    const [enrolled, setEnrolled] = useState(false);
    const [liked, setLiked] = useState(false);

    function enrollHandler() {
        setEnrolled(!enrolled);
        if (!enrolled) {
            toast.success("Enrolled Successfully");
        } else {
            toast.warning("Unenrolled Successfully");
        }
    }

    function likeHandler() {
        setLiked(!liked);
        if (!liked) {
            toast.success("Liked Successfully");
        } else {
            toast.warning("Liked Removed");
        }
    }

    const [readmore, setReadmore] = useState(false);
    const description = readmore ? props.course.description : `${props.course.description.substring(0, 100)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden border border-gray-300'>
            <div className='relative '>
                <img src={props.course.image.url} alt="" className="image" />

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={likeHandler}>
                        {
                            !liked ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{props.course.title}</p>
                <p className='mt-2 text-white '>
                    {description}
                    {props.course.description.length > 100 && (
                        <span onClick={readmoreHandler} style={{ color: '#12b0e8', cursor: 'pointer' }}>
                            {readmore ? ' Show less' : ' Show more'}
                        </span>
                    )}
                </p>
            </div>
            <button className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 ${enrolled ? 'bg-red-500' : ''}`} onClick={enrollHandler}>
                {enrolled ? 'Unenroll' : 'Enroll now'}
            </button>
        </div>
    )
}
export default Card;
