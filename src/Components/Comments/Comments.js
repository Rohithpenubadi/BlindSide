import React, { useState, useEffect } from 'react'
import './Comments.css';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
const Comments = ({ data }) => {
    const [isChecked, setIsChecked] = useState(true)
    const [commentsId, setCommentsId] = useState(null)
    const [comment, setComment] = useState({})
    const [posts, setPosts] = useState([])
    const [isPlaceholder, setIsPlaceholder] = useState(true)

    const user = localStorage.getItem("user")
    const { name, imageUrl } = JSON.parse(user && user);

    const Addcomment = (comment) => {
        setPosts([...posts, [comment]].flat());
        setIsPlaceholder(false)
    }
    const checkedComments = ({ id }) => {
        setIsChecked(!isChecked)
        setCommentsId(id)
    }

    const TextChange = ({e, id}) => {
        setComment({ comments: e.target.value, id: id })
        setIsPlaceholder(true)
    }


    const commentsDialog = (value) => {
        return (
            <>
                {
                    posts?.length > 0 && (
                        posts.map((item) => (
                            value.id === item.id &&
                            <div className="posted_comments">
                                <img className="profile_image" src={imageUrl && imageUrl} alt="Profile" />
                                <div className="comments">
                                    <div style={{ fontWeight: "bold", fontSize: 16 }}>{name}</div>
                                    <div>{item?.comments}</div>
                                </div>
                            </div>
                        ))
                    )
                }
                <div className="comments_dialog">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <img className="profile_image" src={imageUrl && imageUrl} alt="Profile" />
                        {name}
                    </div>
                    <div>
                        <input
                            className='comment_input'
                            id={value.id}
                            type="text"
                            placeholder={isPlaceholder ? 'Add a comment' : null}
                            value={isPlaceholder ? (value?.id === comment?.id ? comment?.comments : null) : ""}
                            onChange={(e) => TextChange({e,id:value.id})}
                        />
                        <button
                            onClick={() => Addcomment(comment)}
                            className="comment_btn"
                        >
                            POST
                        </button>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className="videos_list">
            {
                data && data.map((value, key) => {
                    return (
                        <div>
                            <iframe width="710" height="300" title={value.id}
                                src={value.URL}>
                            </iframe>
                            {value.Description}

                            <div>
                                <div className="comments_container">
                                    <p className="comments_header">Comments</p>
                                    <div>
                                        <div onClick={() => checkedComments({ id: value.id })} className="btn_comments">
                                            {
                                                (commentsId && commentsId === value.id) ? (
                                                    isChecked ? <BsFillArrowUpCircleFill size={25} /> : <BsFillArrowDownCircleFill size={25} />
                                                ) : <BsFillArrowUpCircleFill size={25} />
                                            }
                                        </div>
                                    </div>
                                </div>
                                {
                                    (commentsId && commentsId === value.id) ? (
                                        isChecked &&
                                        (
                                            commentsDialog(value)
                                        )
                                    ) :
                                        commentsDialog(value)
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comments